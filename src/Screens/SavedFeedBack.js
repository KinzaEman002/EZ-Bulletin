import { View, Text,StyleSheet, ScrollView,KeyboardAvoidingView } from 'react-native'
import  {React,useEffect,useState} from 'react'
import firebase from 'firebase/compat/app';
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import Background from '../components/Background'
import Button from '../components/Button'
import { auth } from '../../firebase'

const SavedNews = () => {
  const user=auth.currentUser.uid;
  const itemRef = firebase.database().ref(user+"/Summary" )
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [listt, setListt] = useState([])
    
    let [isUpdating, setIsUpdating] = useState(false)
    let [currentKey, setCurrentKey] = useState('')


    useEffect(() => {
        fetchData()
    }, [])

    function addHandle() {
        if (isUpdating) {
            itemRef.child(currentKey).update({ name,text, news});
            fetchData()
            setText('')
            setEmail('')
            setName('')
        }
        if (!isUpdating) {
            itemRef.push({ text,email,news });
            fetchData()
            setText('')
            setEmail('')
            setName('')
        }
        alert("Feedback sent to Admin")
    }

    let item = [];
   
    function fetchData() {
        itemRef.on('value', function (snap) {
            // console.log(snap)
            let a_ = snap.val();
            for (let x in a_) {
                console.log(x)
                console.log(a_[x])
                item.push({ text: a_[x].text, key: x ,email:a_[x].email,   name: a_[x].news})
            }
            setListt(item)
        })
    }

    function handleUpdate(key, text,email,news) {
        setCurrentKey(key)
        setIsUpdating(true)
        setText(text)
        setEmail(email)
        setName(name)


    }
    function handleDelete(key) {
        itemRef.child(key).remove()
        fetchData()
    }


      
  return (    <Background>
    
    {console.log(listt)}

     <ScrollView>
            {listt.map((item, index) => {
              console.log(item);
              return (
                <><View style={{  padding: 5, borderWidth: 0.34, margin: 10 }}>
                  <Text style={{ title: 'Name', flex: 0.90,color: "black" }}>Summary:{'\t'}{'\t'} {item.name}</Text>
                  {/* <Text style={{ flex:0.90,color: "black" }}>Email:{'\t'}{'\t'} {item.email}</Text>
                  <Text style={{ title: 'Name',  color: "black" }}>{'\n'}{'\n'}Feedback:{'\n'}{'\n'}  {item.text}</Text> */}
                </View><View>
                  
                    <Button style={styles.button1}  onPress={() => handleDelete(item.key)}><Text >Delete</Text></Button>
                  </View></>
              );
            })}
          </ScrollView>
      </Background>
  )
}

export default SavedNews
const styles = StyleSheet.create({
    rows: {
      flexDirection: 'row',
      marginTop: 4,
      marginLeft:90
    },
    Text:{
        color:"black",
    },
    button:{
      marginTop:-10,
      marginBottom:-22
     },
     button1:{
       marginTop:2,
       paddingTop:-230
      },
      link: { 
        fontFamily:"fantasy",
        fontWeight:"bold",
        fontSize: 17,
         color: theme.colors.primary,
         textAlign: 'center',
        
       },
       link1: {
         fontFamily:"fantasy",
         fontWeight:"bold",
         marginTop:10,
         fontSize: 13,
          color: "green",
          textAlign: 'center',
         
        },
        link2: {
         fontFamily:"fantasy",
         fontWeight:"bold",
         marginTop:10,
         fontSize: 15,
     textDecorationLine: 'underline',
          color: theme.colors.primary,
          textAlign: 'center',
         
        },

    Button:{

    }
  })
  
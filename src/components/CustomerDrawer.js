// import { StyleSheet,  View,Image } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// // import { Drawer } from 'react-native-paper'
// import { DrawerItem } from '@react-navigation/drawer'
// import { theme } from '../core/theme'

// import { NavigationContainer } from '@react-navigation/native-stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { DrawerContentScrollView } from '@react-navigation/drawer'


// import{
//   Avatar,
//   Title,
//   Caption,
//   Paragraph,
//   Drawer,Text
// }from 'react-native-paper'
// import { color } from 'react-native-reanimated'

// const Stack = createNativeStackNavigator();
// export default function CustomerDrawer(props) {
 
//   return (
    
//     <View style={{flex:1}}>
//       <DrawerContentScrollView {...props}>
//       <View style={styles.drawerContent}>
//        <View style={styles.userInfoSection}>
//         <View style={{flexDirection:"row",marginTop:15}}>
//         <Avatar.Image
//         source={{
//           uri:"https://media.istockphoto.com/id/1147538000/photo/breaking-news.jpg?s=612x612&w=0&k=20&c=pf3wEdEaN-GjTQX4P5_HCDGdqAun_wLpK3YFU26EIQ0="
//         }}
//         size={50}/>
//         <View style={{marginLeft:15,flexDirection:"column"}}>
//           <Title  style={styles. title}>Umais Iqbal</Title>
//           {/* <Caption styl={styles.caption}>App Developer</Caption> */}
        
//         </View>
//         </View>
//         <View style={styles.row}>
//           <View style={styles.section}>
//             {/* <Paragraph style={[styles.Paragraph,styles.caption]}>100</Paragraph> */}
//             <Caption style={styles.caption}>Email: malikumais777@gmail.com</Caption>
//           </View>
//           {/* <View>
//           <Paragraph style={[styles.Paragraph,styles.caption]}>210</Paragraph>
//             <Caption style={styles.caption}>Followers</Caption>
//           </View> */}
//         </View>
//       </View>
//       <Drawer.Section style={styles.drawerSection}>
    
// <DrawerItem
      
//           icon={()=><Image source={imagePath.icSave}
//           style={styles.img}/>}
//         label="Saved News"
//          onPress={()=>{props.navigation.navigate('Summary')}}
//          /> 
// <DrawerItem
//          icon={()=><Image source={imagePath.icDiversity}
//          style={styles.img}/>}
//         label="Categories"
//          onPress={()=>{props.navigation.navigate('Listen News')}}
//          /> 
// <DrawerItem
//         icon={()=><Image source={imagePath.icCustomer}
//         style={styles.img}/>}
//         label="Admin Support"
//          onPress={()=>{props.navigation.navigate('NewsPaper')}}
//          /> 
//            <DrawerItem
      
//       label="Feedback Form"
//        onPress={()=>{props.navigation.navigate('NewsPaper')}}
//        icon={()=><Image source={imagePath.icUserA} 
//        style={styles.img}
//        />
//       }
//       // labelStyle={{color:'purple',fontWeight:"200",color:"purple"}}
//       /> 
// {/* <DrawerItem
//         // icon={({color,size})=>(
//           <MaterialIcons name="live-tv" size={24} color="black" />
//         )}
//         label=""
//          onPress={()=>{props.navigation.navigate('Live')}}
//          />  */}
//          {/* <DrawerItem
//         icon={({color,size})=>(
//           <Icon
//           name='television-guide'
//           color={color}
//           size={size}/>
//         )}
//         label="Live"
//          onPress={()=>{props.navigation.navigate('Live')}}
//          />  */}
//       <DrawerItem
  
//   icon={()=><Image source={imagePath.icHistory}
//   style={styles.img}/>}
//         label="Login"
//          onPress={()=>{props.navigation.navigate('LoginScreen')}}
//          /> 
//            <DrawerItem
        
//         label="User Guide"
//         icon={()=><Image source={imagePath.icuserUserMa}
//         style={styles.img}/>}
//          onPress={()=>{props.navigation.navigate('UserGuide')}}
//          />
//          <DrawerItem
       
//           icon={()=><Image source={imagePath.icLog}
//           style={styles.img}/>}
//         label="Signout"
//          onPress={()=>{props.navigation.navigate('Signout')}}
//          /> 
           
//          {/* <DrawerItem
//         icon={({color,size})=>(
//           <Icon
//           name='account-check-outline'
//           color={color}
//           size={size}/>
//         )}
//         label="Contact Us"
//          onPress={()=>{props.navigation.navigate('ContactUs')}}
//          /> 
//         */}
//       </Drawer.Section>
//       </View>
//       </DrawerContentScrollView>
   
        
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   img:{
//     color: "red",
//     size:600
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//       marginBottom: 15,
//       borderTopColor: '#f4f4f4',
//       borderTopWidth: 1
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
// import {COLORS, IMGS} from '../constants';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <ImageBackground source={IMGS.bgPattern} style={{height: 140}}>
        <Image source={IMGS.user} style={styles.userImg} /> */}
      {/* </ImageBackground> */}
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: "white",
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});

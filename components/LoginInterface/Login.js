import React,{useState} from "react";
import { StyleSheet,View,Image,TouchableOpacity,Dimensions,Alert,ImageBackground,Text,TextInput,SafeAreaView,Linking} from "react-native";

import { Icon } from 'react-native-elements'


import logo from "./logo.png"

const Login=({navigation})=>{
    const [loginStatus,setLoginStatus]=useState(false)
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    let userCred={
        username,
        password
    }
    const __login=()=>{
        
        if(userCred.username=="" || userCred.password==""){
            Alert.alert(
                "Alert",
                "You have Not Entered Correct User Details.",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }else{
            setLoginStatus(true)
            console.log(userCred);
        navigation.navigate('ClassInfo')
        }
        

    }

    const  __handelUsername=(username)=>{
        setUserName(username)
    }
    const __handelPassword=(password)=>{
        setPassword(password)
    }

    return(
        <>
        <View style={styles.mainContainer}>
                    
                    <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require('./logo.png')}
                    />
                    <Text style={{
                        fontSize:28,
                        fontWeight:'700',
                        letterSpacing:2,
                        marginTop:16,
                        color:'#00B7C6',
                        marginLeft:10
                    }}>Attendence<Text style={{color:'#6202EE'}}>__Cam</Text> </Text>
                    </View>

                    <View style={{
                        marginTop:16*5,
                        
                    }}>
                        <Text style={{
                            fontSize:16,
                            fontWeight:'600',
                            
                        }}>
                        <Text style={{
                            color:'#6202EE',
                        
                        }} >Login </Text>or <Text
                        style={{
                            color:'#6202EE'
                        }}
                        >SignUp</Text> for free.</Text>
                    </View>

                   {loginStatus?
                   
                   <View style={{
                       flex:1,
                       flexDirection:'column',
                       alignItems:"center",
                       justifyContent:'center',
                       width:'82%'
                   }}>


                   <TouchableOpacity style={{
                       marginTop:20,
                       padding:10,
                       width:'82%',
                       backgroundColor:'#2f6ce5',
                       height: 50,
                       borderRadius:5,
                       display:'flex',
                       alignItems:'center',
                       justifyContent:'center',
                       
                   }}
                   onPress={()=>{

                    userCred={}
                    setLoginStatus(false)

                   }}
                   >
                       <Text style={{
                           color:'white',
                           fontSize:20
                       }}>Logout</Text>
                   </TouchableOpacity>

                   </View>
                   
                   :
                       <>
                    <SafeAreaView style={{
                        
                        width:'90%',
                        marginTop:50

                   }}>
                       <Text  style={{
                           marginLeft:13,
                           fontSize:18,
                           color:'#6202EE',
                           fontWeight:'600'
                       }}>UserName</Text>
                       <TextInput style={{

                                        height: 40,
                                        margin: 12,
                                        borderWidth: 1,
                                        padding: 10,
                                        borderRadius:5,
                                        color:'#00B7C6',
                                        textDecorationLine:'none',
                                        fontSize:16,
                                        borderColor:'grey'
                                        

                       }}
                       
                       onChangeText={__handelUsername}
                        />
                       <Text
                            style={{
                           marginLeft:13,
                           fontSize:18,
                           color:'#6202EE',
                           fontWeight:'600',
                           letterSpacing:1,
                           marginTop:10
                       }}                       
                       >Password</Text>
                       <TextInput style={{height: 40,
                                        margin: 12,
                                        marginTop:9,
                                        borderWidth: 1,
                                        padding: 10,
                                        borderRadius:5,
                                        color:'#00B7C6',
                                        textDecorationLine:'none',
                                        fontSize:16,
                                        borderColor:'grey'
                                        }}
                                        
                                        onChangeText={__handelPassword}
                                         />
                       {/* <Input
                       style={styles.loginInput}
                        placeholder='BASIC INPUT'
                        /> */}
                   </SafeAreaView>

                   <TouchableOpacity style={{
                       marginTop:20,
                       padding:10,
                       width:'82%',
                       backgroundColor:'#2f6ce5',
                       height: 50,
                       borderRadius:5,
                       display:'flex',
                       alignItems:'center',
                       justifyContent:'center'
                   }}
                   onPress={__login}
                   >
                       <Text style={{
                           color:'white',
                           fontSize:20
                       }}>Login</Text>
                   </TouchableOpacity>

                    <Text style={{
                        marginTop:10
                    }}>
                    Forgot Password?
                    </Text>

                    <View
                      style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                      }}
                    />

                   </>
                   
                   }

                   


                    <View style={{flexDirection: 'row', alignItems: 'center',margin:20,marginTop:32}}>
                      <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                      <View>
                        <Text style={{ textAlign: 'center',color:'grey'}}>Contact Us to Sign Up</Text>
                      </View>
                      <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                    </View>

                    <TouchableOpacity style={{
                        marginBottom:100
                    }}
                    onPress={()=>{
                        Linking.openURL(`mailto:${'abhishekdiwate879@gmail.com'}`)
                    }}
                    >
                    <Icon
                      name='sc-telegram'
                      type='evilicon'
                      color='#2f6ce5'
                      size={24}
                      reverse={true}
                      raised={true}
                     
                    />
                    </TouchableOpacity>

        </View>
        </>
    )


}

let screenHeight=Dimensions.get("window").height;
 let screenWidth=Dimensions.get('window').width;

const styles= StyleSheet.create({

 mainContainer:{
     height:screenHeight,
     width:screenWidth,
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     marginTop:Math.round((screenHeight*12)/100),
     marginBottom:Math.round((screenHeight*5)/100)
 },
 logo:{
    width:16*4,
    height:16*4
 },
 logoContainer:{
     display:'flex',
     flexDirection:'column',
     justifyContent:'space-between',
    alignItems:'center',
    height:16*5
 },
 loginInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
})



export default Login;
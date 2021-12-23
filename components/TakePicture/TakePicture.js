import React from "react";
import { StyleSheet,View,Image,TouchableOpacity,Dimensions,Text,} from "react-native";






const TakePicture=({navigation})=>{

  const __takePicture=()=>{
    navigation.navigate("CameraModule")
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

                  
                    <Image
                    style={{
                        marginTop:50
                    }}
                    // style={styles.logo}
                    source={require('./AttendenceAnimation.gif')}
                    />


                   <View style={{
                       display:'flex',
                       justifyContent:'flex-start',
                       alignItems:'center'
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
                       justifyContent:'center'
                   }}
                   onPress={__takePicture}
                   >
                       <Text style={{
                           color:'white',
                           fontSize:20
                       }}>Capture Image</Text>
                   </TouchableOpacity>

                 

                    <View
                      style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 2,
                      }}
                    />

                    <View style={{flexDirection: 'row', alignItems: 'center',margin:50,marginTop:32}}>
                      <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                      <View>
                        <Text style={{ textAlign: 'center',color:'grey'}}>Press To Capture</Text>
                      </View>
                      <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                    </View>
                
                   
                   </View>

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
     justifyContent:'center',
     marginTop:Math.round((screenHeight*8)/100),
     marginBottom:Math.round((screenHeight*1)/100)
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



export default TakePicture;
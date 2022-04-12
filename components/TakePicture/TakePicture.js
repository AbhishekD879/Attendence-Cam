import React from "react";
import { StyleSheet,View,Image,TouchableOpacity,Dimensions,Text,ActivityIndicator} from "react-native";
import * as ImagePicker from "expo-image-picker"
import {useSelector,useDispatch} from "react-redux"
import axios from "axios";
import {PdfData} from "./../../actions/index"

let screenHeight=Dimensions.get("window").height;
 let screenWidth=Dimensions.get('window').width;

const TakePicture=({navigation})=>{
  const dispatch=useDispatch()
  const loggedUser=useSelector((state)=>state.setUserCread)
  const classDetails=useSelector((state)=>state.setClassDetails)
  const [status,requestPermission]=ImagePicker.useCameraPermissions()
  const [cCapturedImage,setCapturedImage]=React.useState("")
  const [recivedBase,setRecivedBase]=React.useState("")
  const __takePicture= async()=>{
    // navigation.navigate("CameraModule")
    if(status.status==="granted"){
      const image= await ImagePicker.launchCameraAsync({
          // allowsEditing:true,
          quality:1,
          base64:true
      }).catch((err)=>{
          console.log(err)
      })
        if(image.base64){
        setCapturedImage(image.base64)
        const base=await axios.post("http://192.168.2.107:8080/img",{
          classDetails,
          loggedUser,
          "base64Img":image.base64
          })
         if(base){
          let payload=[...base.data,image.base64]
          dispatch(PdfData(payload))
          setCapturedImage("")
          navigation.navigate("Attendence_Pdf")
         }
        }
    }
  }

    return(
      <View>
        {cCapturedImage.length===0?<>
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
        </>:<ActivityIndicator style={{display:"flex",justifyContent:"center",alignItems:"center",height:screenHeight}} size={"large"} color={"red"}/>}
      </View>
       
    )


}



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
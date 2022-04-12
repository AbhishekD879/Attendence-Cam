import React,{useState} from "react";
import { StyleSheet,View,Image,TouchableOpacity,Dimensions,Alert,ImageBackground,Text,TextInput,SafeAreaView} from "react-native";
import {useDispatch} from "react-redux"
import {classDetailsInfo} from "./../../actions/index"
let screenHeight=Dimensions.get("window").height;
 let screenWidth=Dimensions.get('window').width;

 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = today.getFullYear();
 today = dd + '/' + mm + '/' + yyyy;

const ClassInfo = ({navigation}) => {
    const dispatch=useDispatch()
    const [subject,setSubject]=useState('');
    const [lecture,setLecture]=useState('');
    const [className,setClassName]=useState('')

    const __sumbit=()=>{
        const classInfo={
            subject,
            date:today,
            lecture,
            className
        }
        if(classInfo.subject==""|| classInfo.lecture=="" || classInfo.className==""){
            Alert.alert(
                "Alert",
                "You have Not Entered Correct Lecture Details.",
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
            dispatch(classDetailsInfo(classInfo))
        navigation.navigate("TakePicture")
        }
        
    }
    const __handelClassName=(className)=>{
        setClassName(className)
    }
    const __handelSubject=(subject)=>{
        setSubject(subject)
    }
    const __handelLecture=(lecture)=>{
        setLecture(lecture)
    }
    return (
       <View style={{
           
           width:screenWidth,
           height:screenHeight,
           marginTop:Math.round((screenHeight*10)/100),
           display:'flex',
           flexDirection:'column',
           alignItems:'center'
           

       }}>

                <View style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'space-around',
                    
                }}>
                    <Image
                    style={{
                        width:16*4,
                        height:16*4
                    }}
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

                    <SafeAreaView style={{
                       width:'90%',
                       marginTop:50

                   }}>
                       <Text  style={styles.lable}>ClassName</Text>
                       <TextInput onChangeText={__handelClassName} placeholder='example:BE,TE...' style={styles.inputs} />
                       <Text  style={styles.lable}>Subject Name</Text>
                       <TextInput onChangeText={__handelSubject} placeholder='example:Maths' style={styles.inputs} />
                       <Text  style={styles.lable}>Date</Text>
                       <TextInput defaultValue={today} editable={false} style={{...styles.inputs,opacity:1}} />
                       <Text  style={styles.lable}>Lecture No.</Text>
                       <TextInput onChangeText={__handelLecture} keyboardType='numeric' placeholder='example:1' style={styles.inputs} />
                       
                       
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
                   onPress={__sumbit}
                   >
                       <Text style={{
                           color:'white',
                           fontSize:20
                       }}>Sumbit</Text>
                   </TouchableOpacity>

                   <View style={{flexDirection: 'row', alignItems: 'center',margin:50,marginTop:32}}>
                      <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                      <View>
                        <Text style={{ textAlign: 'center',color:'grey'}}>Sumbit Info</Text>
                      </View>
                      <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                    </View>
       </View>
    )
}


const styles=StyleSheet.create({

    lable:{
        marginLeft:13,
        fontSize:18,
        color:'#6202EE',
        fontWeight:'600'
    },
    inputs:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        color:'#00B7C6',
        textDecorationLine:'none',
        fontSize:16,
        borderColor:'grey'
    }

})

export default ClassInfo

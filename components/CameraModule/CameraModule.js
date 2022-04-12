
import React,{useEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground,Dimensions,Platform} from 'react-native'
import {Camera} from 'expo-camera'
import { Icon } from 'react-native-elements'
import axios from 'axios'
const {height,width}=Dimensions.get('window')
let camera
export default function CameraModule({navigation}) {
  const screenRatio = height / width;
  const [startCamera, setStartCamera] = React.useState(false)
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState(null)
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = React.useState('off')
  const [ratio,setRatio]=React.useState('4:3')
  const [isratio,setIsRatio]=React.useState(false)
  
  const getRatio= async()=>{
    if (Platform.OS==="android"){
      const ratios = await camera.getSupportedRatiosAsync().catch((err)=>{console.log(err);});
      
      const {height,width}=Dimensions.get('window');
      let desiredRatio=height/width
      // const screenRatio = height / width;
      // console.log(ratios,screenRatio)
      return {ratios,desiredRatio}
    }
  }

  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    // console.log(status)
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
    let pictureSize= await camera.getAvailablePictureSizesAsync(ratio).catch((err)=>console.log(err))
    console.log(pictureSize)
  }
  const __takePicture = async () => {
    const options={
        base64:true,
        exif:true,
        // skipProcessing:true
    }
    const photo= await camera.takePictureAsync(options)
    // console.log(photo)
    setPreviewVisible(true)
    //setStartCamera(false)
    setCapturedImage(photo)

  }


  const __savePhoto =() => {
    let config = { headers: {  
      // 'Content-Type':'image/png',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'}
}
    let base={
      base64Img:`${capturedImage.base64}`
    }
  // axios.post("http://192.168.1.111:8080/img",JSON.stringify(base) ,config).then().catch((err)=>{console.log(err);})
  setCapturedImage(null)
  setPreviewVisible(false)
  navigation.navigate("Attendence_Pdf")
  // __startCamera()

  }
  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }
  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }
  }
  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
   
  }
  const cameraReadyStatus= async()=>{
    let {ratios,desiredRatio}= await getRatio().catch((err)=>console.log(err));
    
  
    let tempCalculatedratio=[]
    let realRatios = {};
   
    ratios.forEach((ratio)=>{
     let [width,height]=ratio.split(":")
        let actualComputedRatio= Number(width)/Number(height)
        realRatios[actualComputedRatio]=ratio;
        tempCalculatedratio.push(actualComputedRatio)
    })
    var closest = tempCalculatedratio.reduce(function(prev, curr) {
      return (Math.abs(curr - desiredRatio) < Math.abs(prev - desiredRatio) ? curr : prev);
    });
    setRatio(`${realRatios[closest]}`)
    
  }
  useEffect(()=>{
    __startCamera()
  },[])
  return (
   
        <View
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
          ) : (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{flex: 1}}
              ref={(r) => {
                camera = r
              }}
              onCameraReady={cameraReadyStatus}
              ratio={`${ratio}`}
              focusDepth={1}
              zoom={0}
              
            >
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    left: '5%',
                    top: '10%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableOpacity
                    onPress={__handleFlashMode}
                    style={{
                      backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                      borderRadius: 50,
                      
                    }}
                  >
                    <Icon
                    
                    name='bolt'
                      type='material'
                     
                      size={15}
                      reverse={true}
                      raised={true}
                    
                   />
                
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={__switchCamera}
                    style={{
                      marginTop: 20,
                      borderRadius: 50,
                     
                      backgroundColor: cameraType === 'front' ? '#fff' : '#000'
                    }}
                  >
                   <Icon 

                    name='360'
                      type='material'
                     
                      size={15}
                      reverse={true}
                      raised={true}

                   />
                      
                    
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                       
                        bottom: 30,
                       
                      }}
                      
                    >
                        
                    <Icon 

                      name='camera'
                      type='material'
                     
                      size={35}
                      reverse={true}
                      raised={true}

                   />

                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      

      
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const CameraPreview = ({photo, retakePicture, savePhoto}) => {
  // console.log('sdsfds', photo)
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground
        source={{uri: photo && photo.uri}}
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
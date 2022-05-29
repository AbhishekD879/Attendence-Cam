
import * as React from 'react';
import {View,TouchableOpacity,Text, Dimensions, Alert, } from 'react-native'
import * as FileSystem from 'expo-file-system';
import { StyleSheet } from 'react-native';
import * as Print from "expo-print"
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { WebView } from 'react-native-webview';
// import html from './reciveddata';
import { useSelector } from 'react-redux';

const width=Dimensions.get("window").width;
const height=Dimensions.get("window").height;
import { StorageAccessFramework } from 'expo-file-system';


const Atteendence_Pdf = ({navigation}) => {
  const [savedPdf,setSavedPDf]=React.useState(false)
  // React.useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', (e) => {
  //       const action = e.data.action;
  //       e.preventDefault();
  //       if(!savedPdf){
  //         return
  //       }
        
  //     })
  // );
  // React.useEffect(()=>{
  //   navigation.removeListner('')
  // })

const savePdfFile= async(PdfMapping,base64Data)=>{

  try{
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!permissions.granted) {
      return;
  }
  
  
  
  try {
      await StorageAccessFramework.createFileAsync(permissions.directoryUri, `${PdfMapping[0].classDetail}_${PdfMapping[0].Subject}_${PdfMapping[0].lectureNo}`, 'application/pdf')
          .then(async(uri) => {
              await FileSystem.writeAsStringAsync(uri, base64Data, { encoding: FileSystem.EncodingType.Base64 });
          })
          .catch((e) => {
             Alert.alert("File Error","Error Occured While Creating the File")
          });
  } catch (e) {
      throw new Error(e);
  }
  }catch(err){
    Alert.alert("Premission Error","Permission for Storage Was not Granted")
  }
}

const PdfMapping=useSelector((state)=>state.setPDF)

const [PdfUri,setPdfUri]=React.useState({
  base64:"",
  uri:""
})
let spread=[]
if(PdfMapping[0].length!==0){
  PdfMapping[0].students.forEach((std,index)=>{
    let trmp=` <tr>
              <td>${index+1}</td>
              <td>${std}</td>
            </tr>`
            spread.push(trmp)
  })
}
let spread2=spread.join("\n")
let html=`<div style="margin: 0 8rem">
    <h1 style="text-align:center;font-size: 3.2vw;color:#00B7C6">Attendence__<span style="color:#6202EE">Cam</span></h1>
     <h1 style="text-align:center;font-size: 3.2vw;">PDEA College of Engineering Manjari</h1>
    <div style="float:left">
      <h3 style="font-size: 2.9vw;">Instructor name :${PdfMapping[1].username}
        <h3/>
        <h3 style="font-size: 2.9vw;">Class :${PdfMapping[0].classDetail}
        <h3/>
        <h3 style="font-size: 2.9vw;">Subject:${PdfMapping[0].Subject}
        <h3/>
        <h3 style="font-size: 2.9vw;">Lecture No. :${PdfMapping[0].lectureNo}
        <h3/>
        <h3 style="font-size: 2.9vw;">Date :${PdfMapping[0].date}
        <h3/>
          
    </div>
    <div style="text-align:center">
  <style>
  table.GeneratedTable {
    width: 100%;
    background-color: #ffffff;
    border-collapse: collapse;
    border-width: 2px;
    border-color: #ffcc00;
    border-style: solid;
    color: #000000;
  }
  
  table.GeneratedTable td, table.GeneratedTable th {
    border-width: 2px;
    border-color: #ffcc00;
    border-style: solid;
    padding: 3px;
  }
  
  table.GeneratedTable thead {
    background-color: #ffcc00;
  }
  </style>
  <table class="GeneratedTable">
    <thead>
      <tr>
        <th>SrNo.</th>
        <th>Present Students</th>
      </tr>
    </thead>
    <tbody>
      ${spread2}
    </tbody>
  </table>
  </div>
  <div style="text-align:center;margin-top:1rem">
    <img style="object-fit:contain;width:100%" src="data:image/jpeg;base64,${PdfMapping[2]}">
  </div>
  </div>`

const pdfcreator= async()=>{
  const file= await Print.printToFileAsync({
    html,
    base64:true,
  }).catch((err)=>console.log(err))
 
setPdfUri({
    base64:file.base64,
    uri:file.uri
  })
 await savePdfFile(PdfMapping,file.base64)
 setSavedPDf(true)
 Alert.alert("PDF Saved","PDF has been Saved In AttendencePDF Directoary in Root of Your Device")
 navigation.navigate("ClassInfo")
 
}

  return (
   <>
      {PdfUri.base64=""?(
      <View style={{ width:width,
        height:height,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"}}>
      <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{
      // uri:PdfUri
      html:html,
      }}
      />

      <TouchableOpacity onPress={handelDownload} style={{padding:10,backgroundColor:"#6202EE",borderRadius:10}}>
          <Text style={{color:"white",fontSize:1.2*16}}>
            Download Sheet
        </Text>
       </TouchableOpacity>
      </View>
      ):(
        
        <View style={{
          width:width,
          height:height,
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{
      // uri:PdfUri
      html:html,
      }}
      />
          <TouchableOpacity style={{padding:10,backgroundColor:"#6202EE",borderRadius:10}} onPress={pdfcreator}>
          <Text style={{color:"white",fontSize:1.2*16}}>
            Create_PDF
        </Text>
       </TouchableOpacity>
        </View>
        
        )
      }

       
       
   </>
  )
}
const styles = StyleSheet.create({
  container: {
    width,
    height,
    // flex: 1,
    marginTop:60,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
});
export default Atteendence_Pdf
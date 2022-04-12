
import * as React from 'react';
import {View,TouchableOpacity,Text,Alert, Dimensions, } from 'react-native'
import { StyleSheet } from 'react-native';
import * as Print from "expo-print"
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { WebView } from 'react-native-webview';
// import html from './reciveddata';
import { useSelector } from 'react-redux';

const width=Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const Atteendence_Pdf = () => {
const PdfMapping=useSelector((state)=>state.setPDF)
const [PdfUri,setPdfUri]=React.useState("")
let spread=[]
PdfMapping[0].students.forEach((std,index)=>{
    let trmp=` <tr>
              <td>${index}</td>
              <td>${std}</td>
            </tr>`
            spread.push(trmp)
  })
let spread2=spread.join("\n")
let html=`<div style="margin: 0 8rem">
    <h1 style="text-align:center;font-size: 3.2vw;">Attendence Cam</h1>
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
console.log(html);
const pdfcreator= async()=>{
  const file= await Print.printToFileAsync({
    html,
  }).catch((err)=>console.log(err))
  
  setPdfUri(file.uri)
}

  return (
   <>
      {PdfUri?(
      <>
      <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html:html}}
      />

      <TouchableOpacity style={{padding:10,backgroundColor:"#6202EE",borderRadius:10}}>
          <Text style={{color:"white",fontSize:1.2*16}}>
            Download Sheet
        </Text>
       </TouchableOpacity>
      </>
      ):(
        <TouchableOpacity style={{padding:10,backgroundColor:"#6202EE",borderRadius:10}} onPress={pdfcreator}>
          <Text style={{color:"white",fontSize:1.2*16}}>
            Create_PDF
        </Text>
       </TouchableOpacity>)
      }

       
       
   </>
  )
}
const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    marginTop:60,
  },
});
export default Atteendence_Pdf
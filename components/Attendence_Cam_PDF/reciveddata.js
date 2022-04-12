// let spread=[]
// PdfMapping[0].students.forEach((std,index)=>{
//     let trmp=` <tr>
//               <td>${index}</td>
//               <td>${std}</td>
//             </tr>`
//             spread.push(trmp)
//   })
// let spread2=spread.join("\n")
// let html=`<div style="margin: 0 8rem">
//     <h1 style="text-align:center;font-size: 3.2vw;">Attendence Cam</h1>
//      <h1 style="text-align:center;font-size: 3.2vw;">PDEA College of Engineering Manjari</h1>
//     <div style="float:left">
//       <h3 style="font-size: 2.9vw;">Instructor name :${PdfMapping[1].userName}
//         <h3/>
//         <h3 style="font-size: 2.9vw;">Class :${PdfMapping[0].ClassDetail}
//         <h3/>
//         <h3 style="font-size: 2.9vw;">Subject:${PdfMapping[0].Subject}
//         <h3/>
//         <h3 style="font-size: 2.9vw;">Lecture No. :${PdfMapping[0].lectureNo}
//         <h3/>
//         <h3 style="font-size: 2.9vw;">Date :${PdfMapping[0].date}
//         <h3/>
          
//     </div>
//     <div style="text-align:center">
//   <style>
//   table.GeneratedTable {
//     width: 100%;
//     background-color: #ffffff;
//     border-collapse: collapse;
//     border-width: 2px;
//     border-color: #ffcc00;
//     border-style: solid;
//     color: #000000;
//   }
  
//   table.GeneratedTable td, table.GeneratedTable th {
//     border-width: 2px;
//     border-color: #ffcc00;
//     border-style: solid;
//     padding: 3px;
//   }
  
//   table.GeneratedTable thead {
//     background-color: #ffcc00;
//   }
//   </style>
//   <table class="GeneratedTable">
//     <thead>
//       <tr>
//         <th>Header</th>
//         <th>Header</th>
//       </tr>
//     </thead>
//     <tbody>
//       ${spread2}
//     </tbody>
//   </table>
//   </div>
//   <div style="text-align:center;margin-top:1rem">
//     <img style="object-fit:contain;width:100%" src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
//   </div>
//   </div>`

//   export default html;


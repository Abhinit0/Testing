 import React from 'react';
// import jsPDF from "jspdf";
import jsPDF from "../../node_modules/jspdf/dist/jspdf.umd.min.js"
import { applyPlugin } from 'jspdf-autotable'
applyPlugin(jsPDF)
// import './App.css';
// let jsPDF = require('jspdf');
// require('jspdf-autotable');

const Export= (props) => {

  //  const   downloadObj = [
  //   { name: "Keanu Reeves", profession: "Actor" },
  //   { name: "Lionel Messi", profession: "Football Player" },
  //   { name: "Cristiano Ronaldo", profession: "Football Player" },
  //   { name: "Jack Nicklaus", profession: "Golf Player" },
  // ]
    

 function  exportPDF() {
    const unit = "pt";
    const size = "A2"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Searched data";
    const headers = [Object.keys(props.data[0]|| {})];
    const data = props.data.map(d=>Object.values(d))
    //const data = downloadObj.map(elt=> [elt.name, elt.profession]);
     console.log("pdf_data",data)
    let content = {
      startY: 50,
      head: headers,
      body: data
    };
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("log_report.pdf")
}
    
        return (
          <div>
            <button onClick={() => exportPDF()}>Generate Report</button>
          </div>
        );
      
}
    
    export default Export;

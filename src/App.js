import logo from './logo.svg';
import './App.css';
import {csv} from 'd3';
import { useEffect, useState } from 'react';
import {Line, Doughnut,Scatter} from 'react-chartjs-2';
import 'chart.js/auto';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Chart from 'react-google-charts'


function App() {
  const scatterData = [
    ['Age', 'Weight']
  ];
  const scatterDataVitess = [
    ['Vitesse', 'Time'],
   
    //  [1,0.023345024422543246],
    //  [2,0.009021480335176692],
    //  [3,0.021342010330767727],
    //  [4,0.00895606948140235],
    //  [5,0.003934547134939088],
    //  [6,0.006344445087734429]
    
  ];
  
  
  const scatterOptions = {
    title: 'Age vs. Weight comparison',
    hAxis: { title: 'Position X', minValue: 0, maxValue: 1 },
    vAxis: { title: 'Position Y', minValue: 1, maxValue: 2},
    legend: 'none',
  }
  const scatterVitess = {
    title: 'Vitesse vs. Time',
    hAxis: { title: 'Time', minValue: 0, maxValue: 14000 },
    vAxis: { title: 'Vitesse', minValue: 0, maxValue: 1.5},
    legend: 'none',
  }
  const [csvFile,setcsvFile] = useState();
  const [csvArray,setcsvArray] = useState([]);
  const [ddd,setTest] = useState([]);
  const [VVVV,setVitesse] = useState([]);
  
 
const labelsF=[];
const dataF=[];
const VCalculer=[];
const ddistance=0;
const vvitess=0;
const ttemps = 0;
  const data={

labels:labelsF,
datasets:[{
data:VVVV,

borderColor: 'rgb(0, 0, 0)',


}]
};





  
  

  
  
  var heading = ['Vitesse'];
  var body = [];
 
  const possXX=[];
  const possYY=[];
  const dist=[];

  
 
  const processCSV=(str,delim=',')=>{
    const  headers = str.slice(0,str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n')+1).split('\n');
    
    
    const newArray = rows.map(row=>{
    
      const value = row.split(delim);
      const eachObject  = headers.reduce((obj,header,i) =>{
        obj[header]=value[i];
       
        
       
        return obj;
      },{}) 
     
      
      return eachObject;
    })

setcsvArray(newArray);

  }
  
  const submit = () =>{
    const file =csvFile;
    const reader = new FileReader();
    reader.onload = function(e) {
      const text =e.target.result;
      
      processCSV(text);
    }
    reader.readAsText(file);
   
    
    
  }
  
  const submitConole = () =>{
    for (var i = 0; i < possXX.length; i++) {
      const arrayVitess=[];
      const result=0;
      VCalculer.push(Math.sqrt((possXX[i+1]-possXX[i])*(possXX[i+1]-possXX[i])+(possYY[i+1]-possYY[i])*(possYY[i+1]-possYY[i]))*1000/(dist[i+1]-dist[i]))
    // DX.push(possXX[i+1]-possXX[i]);
    arrayVitess.push(Number(dist[i]),Number(Math.sqrt((possXX[i+1]-possXX[i])*(possXX[i+1]-possXX[i])+(possYY[i+1]-possYY[i])*(possYY[i+1]-possYY[i]))*1000/(dist[i+1]-dist[i])))
    scatterDataVitess.push(arrayVitess);
    }
    setVitesse(VCalculer);
    console.log(VCalculer);
    console.log(scatterDataVitess);
    setTest(scatterDataVitess);
    // for (var i = 0; i < possXX.length; i++) {
    //   result = VVVV[i] + result;
    // }

   
    // possXX.map((val,i) =>{
      
    //   console.log(val,1);

    // })
  
        //afficher vitess
       
  }
  const clear = () => {
    this.setState({
        arr: [],
    });
};


 
  return (
    <div >
     <form id='csv-form'>
       <input type='file'
        accept='.csv'
        id='csvFile'
        onChange={(e)=>{
          setcsvFile(e.target.files[0])
        }}
       ></input>
       <button onClick={(e)=>{
         e.preventDefault()
         if(csvFile)submit()
       }}>submit</button>
       <button onClick={(e)=>{
        e.preventDefault()
        if(csvFile)submitConole()
      }}>Afficher Vitesse</button>
       {csvArray.length>0 ? <>
   
{/*        
       <table>
       
         <tbody>
           {
             csvArray.map((item,i)=>{
               if(i<csvArray.length-1){
             
                const arrayyy=[];
               console.log('vitess:' + item.Vitesse)
              // console.log('X :' + item.PosX );
              // console.log('Y :' + item.PosY);
              
              //labelsFpush(parseInt(item.PosX*100));
              //dataF.push(parseInt(item.PosZ*100));
              arrayyy.push(Number(item.PosX),Number(item.PosZ));
<h1>{item.Vitesse}</h1>
             
             scatterData.push(arrayyy);
             
           
             
           
             
             
               }
             
             
             })
            

           }
         </tbody>
       </table> */}
       
       </> : 'null'}
     </form>
     -------------------------------
    
 {/* <Line data={data}
    

     
       
      
       /> */}
  
       
  <Chart
          width={'700px'}
          height={'420px'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={scatterData}
          options={scatterOptions}
          rootProps={{ 'data-testid': '1' }}
        />  
        
        <div id='here'>
        {/* <Chart
        width={'1000px'}
        height={'600px'}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={ddd}
        options={scatterVitess}
        rootProps={{ 'data-testid': '1' }}
      /> */}
      <Line data={data}
    

     
       
      
    />
          </div>
       
      
  
  {
    
             csvArray.map((item,i)=>{
               if(i<csvArray.length-1){
             
                
                const arrayyy=[];
              
               body.push(item.Vitesse);
              // console.log('X :' + item.PosX );
              // console.log('Y :' + item.PosY);
              
              //labelsF.push(parseInt(item.PosX*100));
              //dataF.push(parseInt(item.PosZ*100));
              arrayyy.push(Number(item.PosX),Number(item.PosZ));

 //ddistance=Math.sqrt((Number(item.PosX[i+1])-Number(item.PosX[i]))*(Number(item.PosX[i+1])-Number(item.PosX[i]))+(Number(item.PosZ[i+1])-Number(item.PosZ[i]))*(Number(item.PosZ[i+1])-Number(item.PosZ[i])));

            // D=Number(item.PosX[38])-Number(item.PosX);
             console.log('kkkk'+item.PosX[3]);
            //  D1 = D*D + D1;
             scatterData.push(arrayyy);
             possXX.push(Number(item.PosX));
             dist.push(Number(item.Timestamp));
             possYY.push(Number(item.PosZ));
             labelsF.push(item.Timestamp);
            
            
             
           
             
           
             
             
               }
               
              
             
             })
             
            

           }

  
    {
      
    }
 
 <table >
                <thead>
                    <tr>
                        Vitess Affiche
                    </tr>
                </thead>
                <tbody>
               
                {body.map(val =>
                <th>
                  <td><p>  V={val}</p></td>
                  </th>
             
              )}
            
                </tbody>
            </table>
            <table >
                <thead>
                    <tr>
                        Vitess Calculer
                    </tr>
                </thead>
                <tbody>
               
                {VVVV.map(val1 =>

                
                <th>
                  <td><p>  V={val1}</p></td>
                  </th>
                
              )}
            
                </tbody>
            </table>
            <h1>Vitesse Moyenne </h1>
          
       
    </div>
    
  );
}

export default App;

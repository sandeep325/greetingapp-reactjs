import React from 'react';
 function App(){

    let curDate= new Date();
    curDate=curDate.getHours();
    
    let greeting="";
    let stylecss={};
    let greetingimg="";
    if(curDate>=1 && curDate <12)
    {
    greeting="Good Morning";
    stylecss.color="#59b300";
    greetingimg="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3_0vaeOON4KekFOFHodEulN5QMiQz1FpeCg&usqp=CAU";
    }
    else if(curDate>=12 && curDate<20)
    {
      greeting="Good Afternoon";
    stylecss.color="#ffcc00";
    greetingimg= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEuYEusUXxuW6xCgqpCs-6_qBFLpGheApb3g&usqp=CAU";
    
    
    }
    else
    {
      greeting="Good Night";
    stylecss.color=" #404040";
    greetingimg="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXeqLCR74Co5zAQxJXQgxzCKUsDcrgIUPG0g&usqp=CAU";
    
    }
 return(
         <>
         <div>
         <h1>Hello user <span style={stylecss}>{greeting}</span> </h1>
     
         <img  className="imgstyle" src={greetingimg} alt='{greeting}"img from internet"'/>
     
        </div>
         </>
       );

 }
export default App;
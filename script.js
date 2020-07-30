function generateprn()
{
  var year=document.myform.cyear.value;
  var brno=document.myform.branch.value;
  var bno=document.myform.batch.value;
  var sqnum=document.myform.snum.value;

  if(year.length>2 || year.length < 2 || isNaN(year)==true){
    alert("Current Year should be 2 Digit ");
    
  }

  else if(isNaN(brno)==false){
    alert("Branch Code should not be Numeric");
  }

  else if(brno.length>2 || brno.length < 2 ){
    alert("Branch Code should be 2 Letters");
    
  }

  else if(bno.length>2){
      alert("Batch Number should be at most 2 Digit");
  }  

  else if(isNaN(bno)==true){
      alert("Batch Number should be Numeric");
  }  
  else if(isNaN(sqnum)==true){
       alert("Sequential Number should be Numeric");
  } 

  else if(sqnum.length>4 || bno.length<1){
      alert("Sequential Number should be less than 5 Digit");
  }

  else if(sqnum.length>0 && sqnum.length<2 && bno.length>=0 &&bno.length<2){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno + 0 +bno + 0 + 0 + 0 + sqnum);
    
  } 

   else if(sqnum.length>0 && sqnum.length<2 ){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno + bno + 0 + 0 + 0 + sqnum);
    
  } 

  else if( sqnum.length>1 && sqnum.length<3 && bno.length>=0 &&bno.length<2 ){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno +0+bno + 0 + 0 + sqnum);
  } 

  else if( sqnum.length>1 && sqnum.length<3 ){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno +bno + 0 + 0 + sqnum);
  } 

  else if(sqnum.length>2 && sqnum.length<4 && bno.length>=0 &&bno.length<2){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno +0+bno + 0 + sqnum);
  } 

  else if(sqnum.length>3 && sqnum.length<5 && bno.length>=0 &&bno.length<2){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno +0+bno  + sqnum);
  } 

  else if(sqnum.length>2 && sqnum.length<4){
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno +bno + 0 + sqnum);
  } 

  else{
    document.getElementById("print").innerHTML =("Your Generated PRN is :"+year + brno +bno + sqnum);
  }
}

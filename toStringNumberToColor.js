var GetColorFromPairNumber=require("./GetColorFromPairNumber.js");

function toString(){
  let colorcombo={}
  for(let i=1;i<=25;i++)
  {
    
    colorcombo=GetColorFromPairNumber(i);
    manual=manual+i+":"+colorcombo.major+" "+colorcombo.minor;
   
  }
  return manual;
}

module.exports=toString;
  

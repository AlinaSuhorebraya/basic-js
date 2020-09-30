const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
  let newArr = arr;
  if(!Array.isArray(arr))
  {
    throw new Error();
  }

  if(arr)
  {

newArr.forEach((a, i)=>
  {
   if(newArr[i] == '--discard-next')
   {
     
     newArr[i] = undefined;
     if(i+1<newArr.length){
     newArr[i+1]=undefined;
     }
   }
   else if(newArr[i] == '--discard-prev')
   {
     newArr[i] = undefined;
     if(i-1>0){
    newArr[i-1]=undefined;
     }
   }
   else if(newArr[i] == '--double-next')
   {
    if(i+1<newArr.length){
    newArr[i] = newArr[i+1];
    }
    else newArr[i]=undefined;
    
   }
   else if(newArr[i] == '--double-prev')
   {
    if(i-1>0){
    newArr[i] = newArr[i-1];
    }
    else newArr[i]=undefined;
   }

 })

//  newArr = newArr.filter((e)=>e!=undefined);
//  return newArr;
for(let i = 0; i <newArr.length; i++)
{
  if(newArr[i]==undefined)
  {
    newArr.splice(i,0);
    i--;
  }
}
return newArr;
}
else return new Error();

};

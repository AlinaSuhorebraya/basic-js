const CustomError = require("../extensions/custom-error");

module.exports = function transform( /*arr*/ ) {
//   let newArr = [];
//   if(arr)
//   {
    
//  arr.forEach((a, index)=>{
//    newArr.push(a);
//    if(a == '--discard-next')
//    {
//      newArr.splice(0, index+1);
//    }
//    if(a == '--discard-prev')
//    {
//      newArr.splice(0, index);
//    }

//  })
//  return newArr;
// }
// else return new Error();
throw new CustomError('Not implemented');
};

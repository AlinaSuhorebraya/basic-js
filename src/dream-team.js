const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArr = [];

//   members.forEach(member =>{
//  if(typeof member === String)
//     {
//      member = member.split(' ').join('');
//       newArr.push(member[0]);
//     }
//     return newArr.sort();

//   })
if(members){
for(let i = 0; i < members.length; i++)
{
  if( typeof members[i]=='string')
    {
 
     members[i] = members[i].split(' ').join('');
      newArr.push(members[i][0].toUpperCase());
    }
    
}
return newArr.sort().toString().split(',').join('');
}
else return false
};

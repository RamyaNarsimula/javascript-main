console.log("Statement   1")// first this stmt is executed
const display=()=>{
let sum=0;
for(let i=0;i<=100000000000;i++)
{
    sum=sum+i;// this is calculated for 100 million times
}
console.log(sum);// it executes after 100 million times calculation
}
display();// display function calling through function definition
console.log("Statement   2")//lastly it executes
// it executes like FIFO like priority wise
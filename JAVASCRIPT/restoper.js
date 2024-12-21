function rest(...args)// it should particularly contains 3dots for restoperator no min or max of dots only 3 dots is fixed
{
    let result=0;
    for(let arg of args)// this is a for each loop
    {
        result=result+arg;//args 10 value is stored in arg and so on..
    }
    console.log("Result is="+result)
}
rest(10,20,30,40,50); // we cam pass n numbers of parameters
//agrs is a parametername it stores multiple parameters
//rest(10,20,30,40,50,2,12,3,5,7,73,324,72,78,23,223,45,4557,435); this also executes with result 6009 ie., multiple values
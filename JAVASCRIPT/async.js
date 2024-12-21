async function test() {
    x = await 10 + 20;
    console.log("Inside of the function")
    return x;
}
let result= test();
//console.log("final result is ="+result);
//Promise statement
result.then((data)=>{    // after adding then keyword ie., is promise it gives the o/p by sum
    console.log(data)
}).catch((error)=>{     //promise block till here catch for false
    console.log(data)
})


//async function test() {
    x = await 10 + 20;
    console.log("Inside of the function")
    return x;
}
let result= test();
//console.log("final result is ="+result);
//Promise statement
result.then((data)=>{    // after adding then keyword ie., is promise it gives the o/p by sum
    console.log(data)
}).catch(error)=>{     //promise block till here catch for false
    console.log(data)
})

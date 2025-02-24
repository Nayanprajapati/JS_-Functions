// using var
function example() {
    var x =  10;
    console.log(x);

}
example();
// console.log(x);

// in this stage we have called the function example() and we have assigned a value to x variable inside the function
// so now we cannot  access the variable x outside the function because it is a local variable using var inside the function 
// but if we print it inside the function we can access it easily. and re defination is possible but its headache for debugging.
// you can manupulate it as well as redeclare it




// Blocked scope using let variable
{let N = 10;
    console.log(N);

}

// in this blocked scope we can assess the value within the blocked { }




let x = 10;
if (true) {
    let y =20;
    console.log(x);
    console.log(y);
    
}
console.log(x);
// console.log(y);

// in this another example of blocked scope as we can see let x=10; is accessible globally and let y=20; is accessible only inside the if block
// so when we print those x,y  we can access them easily.inside the block but outside the block we cannot access so the output will be
// reference error: y is not defined
// you can only manupulate it but you cannot redeclare it.


// using const variable
const nayan = ("boy");
console.log(nayan);

// in this const variable it remains constant and doesnot change and you cannot manupulate or you cannpt redeclare it.
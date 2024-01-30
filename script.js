// let butn=document.querySelector("message")
// butn.addEventListener("click",
// function check(){
//     let i=0;
    
//     var answer = document.querySelector('input[name="answer"]:number').value;
//     var result = document.getElementById('result');
//     let no=Math.floor(Math.random()*100)+1;
//     while(answer!=no)
//     {
//         if(answer>0 && answer<101)
//         {
//             result.textContent("Enter a number between 1 to 100");
//             break;
//         }
//         else if(answer>no)
//         {
//             result.textContent("The number is lower");
//         }
//         else if(answer<no)
//         {
//             result.textContent("The number is higher");

//         }
//         else{
//             result.textContent("The number is correct");
//         }
//     }
// });
const min=1;
const max=100;
var trys=0;
const secret=Math.floor(Math.random()*100)+1;
console.log(secret)
let button1=document.getElementById("checkButton");
console.log(button1.value);
button1.addEventListener("click",function(){
    let inpevent=document.getElementById("userGuess");
    const userGuess=parseInt(inpevent.value);
   
//    while(userGuess!=secret)
    {
        console.log(userGuess);
   console.log(secret);
    trys+=1;
    if(userGuess<min || userGuess>max)
    {
        document.getElementById("message").textContent="Please enter a number between 1 to 100.";
        
    }
    else if(userGuess>secret)
    {
        document.getElementById("message").textContent="Try for a lower number.";
        
    }
    else if(userGuess<secret)
    {
        document.getElementById("message").textContent="Try for a higher number.";
       
    }
    else if(userGuess==secret)
    {
        document.getElementById("message").textContent=`You guessed the right number with ${trys} tries`;
      
    
    
    
}}

});
//1.FizzBuzz

let num;
let i;
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
    {
        document.write("FizzBuzz ");
        document.write("<br>");
    }
    else if(i%3==0){
        document.write("Fizz ");
        document.write("<br>");
    }
    else if(i%5==0)
    {
        document.write("Buzz ");
        document.write("<br>");
}
    else{
         document.write(i );
         document.write("<br>");
    }
}




//2.palindrome

function p(str)
{
    let str1="";
    let k;
    for (k=str.length-1;k>=0;k--){ 
        str1 += str[k];
    }
    if(str==str1){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
console.log(p("racecar"));


// 3.largest number
function array(a){
    let num1 = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num1){
        num1 = a[i];
      }
    }
    return num1;
  }
  
  const arr = [1,5,25,45,100];
  console.log(array(arr));


//4th program

function o(l){
    let result={}
    for(let m=0;m<l.length;m++){
        let ch=l.charAt(m)
    
    if(!result[ch])
        result[ch]=1;
    else
        result[ch]+=1
    }
    return result;

}
console.log(o("i am sowndharya"));




//5.longest word
function l(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0];
} 
console.log(l("hey guys"));



// 6.factorial

function f(num){
    let j;
    let fact=1;
    for(j=1;j<=num;j++)
        {
        fact=fact*j;
        
    }
    return(fact);
}
console.log(f(8));


// 7.Celsius to Fahrenheit

function cel(n){
    return (9/5)*n+32;
 }
 console.log(cel(18));


// 8th program

let array1=[0,1,2,3,8,7,5,4];
let x=array1.length;//4
let sum1=0;
let g;
for(g=0;g<=x;g++){
    sum1=sum1+g;
}
let sum=0;
let q;
for(q=0;q<x;q++){
    sum=sum+array1[q];
}
console.log(sum1-sum);


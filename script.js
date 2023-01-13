document.querySelector(".delit").onclick=function(){
    let num1=document.querySelector(".number-1").value;
    let num2=document.querySelector(".number-2").value;
    alert(parseInt(num1) / parseInt(num2));
}
document.querySelector(".umnozhit").onclick=function(){
    let num1=document.querySelector(".number-1").value;
    let num2=document.querySelector(".number-2").value;
    alert(parseInt(num1) * parseInt(num2));
}
document.querySelector(".vichitat").onclick=function(){
    let num1=document.querySelector(".number-1").value;
    let num2=document.querySelector(".number-2").value;
    alert(parseInt(num1) - parseInt(num2));   
}
document.querySelector(".clazhit").onclick=function(){
    let num1=document.querySelector(".number-1").value;
    let num2=document.querySelector(".number-2").value;
    alert(parseInt(num1) + parseInt(num2));
}
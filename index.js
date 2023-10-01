var num1=parseInt(prompt("Enter the first number"));
var num2=parseInt(prompt("Enter the second number"));
function calculator(num1,num2) {
  var Addition=num1+num2;
  var Substraction=num1-num2;
  var Multiplication=num1*num2;
  var Division=num1/num2;
  var Modulas=num1%num2;
  var large=num1>num2 ?"num1":"num2 "

  document.write("The addition will be :" +Addition+"<br/>");
  document.write("The Substraction will be :"+Substraction +"<br/>" );
  document.write("The  will be Multiplication:"+Multiplication +"<br/>" );
  document.write("The  Division will be :"+Division +"<br/>" );
  document.write("The Modulas will be :"+Modulas +"<br/>");
  document.write("The  largest number will be :"+large +"<br/>");
}
calculator(num1,num2);





  

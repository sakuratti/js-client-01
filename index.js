
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
  var number1 = input1.value;
  var number2 = input2.value;
  var remainder = 0;

  while (number1 % number2 != 0){
    remainder = number1 % number2
    number1 = number2
    number2 = remainder
  }

  result.innerHTML = number2
  


});

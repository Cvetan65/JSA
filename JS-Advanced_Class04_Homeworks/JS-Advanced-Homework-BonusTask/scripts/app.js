$(document).ready(function () {
  $('#myButt').click(() => { 
    let num = parseInt($('#factInp').val());
    let sumTo = num => num === 0 ? 1 : num * sumTo(--num);
    let result = sumTo(num)
    $('#output').append(`
      <h1>Factorial of ${num} is: ${result}</h1>
    `);
  });
});

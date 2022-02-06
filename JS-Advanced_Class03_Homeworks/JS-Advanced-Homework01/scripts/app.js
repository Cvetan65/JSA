$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: ' https://pokeapi.co/api/v2/pokemon',
    success: function (response) {
        for(let i=0;i<10;i++){
         $('#cities').append(`<li>Name: ${response.results[i].name} <br>URL: ${response.results[i].url}</li>`);
         console.log(response.results[i])
        }
       
    },
    error: function (response) {
      console.log('The request failed!');
    },
  });
});

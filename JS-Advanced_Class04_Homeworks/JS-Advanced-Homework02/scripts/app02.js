$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'https://swapi.dev/api/planets/?page=2',
    success: (responseSecond) => {
      $('#myBut').click(() => {
        printPlanets(responseSecond);
        $('#myBut').hide();
      });
      $.ajax({
        type: 'GET',
        url: responseSecond.next,
        success: (responseThird) => {
          $('#next').click(() => {
                $('#tabrow').empty();
                printPlanets(responseThird)
                $('#next').hide(); 
          });
        },
        error: (response) => {
          console.log('There request failed');
          console.log(response.responseText);
        },
      });
      $.ajax({
        type: 'GET',
        url: responseSecond.previous,
        success: (responseFirst) => {
          $('#previous').click(() => {
                $('#tabrow').empty();
                printPlanets(responseFirst);
                $('#previous').hide();
          });
        },
        error: (response) => {
          console.log('There request failed');
          console.log(response.responseText);
        },
      });  
      
    },
    error: (response) => {
      console.log('There request failed');
      console.log(response.responseText);
    },
  });

  let printPlanets = (arr) => {
    console.log(arr);
    console.log(arr.results.length);
    $('#tabrow').append(`
                    <tr>
                        <th>Planet name</th>
                        <th>Population</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                    </tr>
              
                    `);
    for (let i = 0; i < arr.results.length; i++) {
      $('#tabrow').append(`
                    <tr>
                        <td>${arr.results[i].name}</td>
                        <td>${arr.results[i].population}</td>
                        <td>${arr.results[i].climate}</td>
                        <td>${arr.results[i].gravity}</td>
                    </tr>
            `);
    }
  };
});

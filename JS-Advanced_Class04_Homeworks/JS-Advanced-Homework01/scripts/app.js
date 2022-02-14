$(document).ready(function () {
  $('#myBut').click(function () {
    fetch('https://swapi.dev/api/planets/?page=1')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        printPlanets(myJson);
      });
  });
  function printPlanets(arr) {
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
    $('#myBut').prop('disabled', true);
  }
});

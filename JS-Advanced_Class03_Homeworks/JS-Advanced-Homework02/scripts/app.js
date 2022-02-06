$(document).ready(function () {
 
    let url = 'https://jsonplaceholder.typicode.com/users/1';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
       $('#myBtn').click(function () {  
         $('#data').append(`<table><tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
       </tr>
       <tr>
          <td>${myJson.id}</td>
          <td>${myJson.name}</td>
          <td>${myJson.username}</td>
          <td>${myJson.email}</td>
              <td>
                <table>
                  <tr>
                    <th>street</th>
                    <th>suite</th>
                    <th>city</th>
                    <th>zipcode</th>
                    <th>geo</th>
                  </tr>
                  <tr/>
                    <td>${myJson.address.street}</td>
                    <td>${myJson.address.suite}</td>
                    <td>${myJson.address.city}</td>
                    <td>${myJson.address.zipcode}</td>
                    <td>
                      <table>
                        <tr>
                          <th>lat</th>
                          <th>lng</th>
                        </tr>
                        <tr>
                          <td>${myJson.address.geo.lat}</td>
                          <td>${myJson.address.geo.lng}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
          <td>${myJson.phone}</td>
          <td>${myJson.website}</td>
          <td>${myJson.company.name}</td>
        </tr></table>`
       )
       $('#myBtn').prop('disabled', true);
      });
  });
});

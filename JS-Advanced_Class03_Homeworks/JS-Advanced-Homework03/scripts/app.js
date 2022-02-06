$(document).ready(function () {
  fetch('https://dog.ceo/api/breed/hound/images')
    .then((response) => {
      return response.json();
      console.log('The request faild');
    })
    .then((myJson) => {
      console.log(myJson);
      for(let i=0;i<myJson.message.length;i++){
        $('#output').append(`<div><img src=${myJson.message[i]} width="200px" height="auto"></div>`)

      }
    });
});

$(document).ready(function () {
  let arrName = ['Petko', 'Trajko', 'Zvonko', 'Svirko', 'Ganjo'];
  let arrLastName = [
    'Petkovski',
    'Trajkovski',
    'Zvonkovski',
    'Svirkovski',
    'Tatarski',
  ];

  for (let i = 0; i < arrName.length; i++) {
    ((name, lName) => {
      $('#output').append(`
      <ul>
        <li>${i+1}. ${name} ${lName}</li>
      </ul>`);
    })(arrName[i], arrLastName[i]);
  }
});

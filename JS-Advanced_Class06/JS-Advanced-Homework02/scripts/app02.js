'use strict';

fetch(
  'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (students) {
    let  studentsWithAverageMoreThen2 = students.filter(student => student.averageGrade > 2).forEach(student => {
      console.log(student.firstName)
      document.getElementById('averageMoreTwo').innerHTML +=
      ` <tr>
            <td>${student.firstName}</td>  
            <td>${student.lastName}</td>  
            <td>${student.averageGrade}</td>  
        </tr>`;       
    });

    let allFemaleStudentsWithAvrgMore5 = students.filter(student => student.gender == "Female").filter(student => student.averageGrade >= 5).forEach(student => {
      console.log(student.firstName);
      document.getElementById('femaleAverageMoreFive').innerHTML +=
      ` <tr>
            <td>${student.firstName}</td>  
            <td>${student.lastName}</td>  
            <td>${student.averageGrade}</td>  
        </tr>`;       
    });

    let allMaleeStudentsLiveSkAge18 = students.filter(student => student.gender == "Male").filter(student => student.age >= 18).forEach(student => {
      console.log(student.firstName);
      document.getElementById('maleLiveSkAdults').innerHTML +=
      ` <tr>
            <td>${student.firstName} ${student.lastName}</td> 
            <td>${student.age} age</td>  
        </tr>`;       
    });

    let averageFemaleMore24 = students.filter(student => student.gender == "Female").filter(student => student.age >= 24).forEach(student => {
      console.log(student.averageGrade);
      document.getElementById('femaleMoreTwentyforGrade').innerHTML +=
      ` <tr>
            <td>${student.firstName}</td>  
            <td>${student.lastName}</td>  
            <td>${student.averageGrade}</td>  
        </tr>`;       
    });

    let maleNameStartB = students.filter(student => student.gender == "Male").filter((student) => student.firstName.startsWith('B')).filter(student => student.averageGrade >= 2).forEach(student => {
      console.log(student.firstName);
      document.getElementById('maleNameOnB').innerHTML +=
      ` <tr>
            <td>${student.firstName}</td>  
            <td>${student.lastName}</td>  
            <td>${student.averageGrade}</td>  
        </tr>`;       
    });
  });

// var person = {
//   name: "Sourav",
//   age: 20,
//   address: {
//     street: "5 main st",
//     city: "boston",
//   },
//   children: ["brian", "lady"],
// };

// // person = JSON.stringify(person);
// // person = JSON.parse(person);
// // console.log(person.name);
// var people = [
//   {
//     name: "sourav",
//     age: 25,
//   },
//   {
//     name: "majumder",
//     age: 40,
//   },
//   {
//     name: "mylady",
//     age: 55,
//   },
// ];
// for (var i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // // Typical action to be performed when the document is ready:
    // document.getElementById("demo").innerHTML = xhttp.responseText;
    // console.log(xhttp.responseText);
    var response = JSON.parse(xhttp.responseText);
    console.log(response.people[1].name);
  }
};
xhttp.open("GET", "people.json", true);
xhttp.send();

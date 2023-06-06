// // recap API
// // async await
// // arrow function
// // api + filter + map - together
// // fetch()
// // .then()
// // .then()
// // sugar //
// // global variables //
// let countries;
// let inputData = document.querySelector("input");
// let tags;
// async function loadData() {
//   let responseOmer = await fetch("https://restcountries.com/v2/all");
//   let dataOmer = await responseOmer.json();
//   countries = [...dataOmer];
//   let filterCountry = countries.filter(function (value) {
//     console.log(value);
//     return value.name.startsWith(countryInput(inputData.value));
//   });
//   let newTags = filterCountry.map(function (x) {
//     return (tags += `<p>${x.name}</p>`);
//   });
//   document.body.innerHTML = tags;
//   // let body = document.body;
//   // for (let i = 0; i < newTags.length; i++) {
//   //   let p = document.createElement("p");
//   //   p.innerHTML = `${newTags[i].name}`;
//   //   body.append(p);
//   // }
//   console.log("Omer Filter", filterCountry);
//   console.log("Omer Map", newTags);
// }
// function countryInput(input) {
//   // charAt
//   // toUpperCase
//   // Slice
//   console.log(input.charAt(0).toUpperCase() + input.slice(1));
//   return input.charAt(0).toUpperCase() + input.slice(1); // finland == Finland
// }
// inputData.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     countryInput(inputData.value);
//     loadData();
//   }
// });
// DOM
let inputSearch = document.querySelector("input");
let ulContainer = document.querySelector("ul");
let items;
// API
async function loadSearch() {
  let response = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${inputSearch.value}`
  );
  let data = await response.json();
  // console.log(data.hits[0]);
  // console.log(data.hits[0].title);
  // console.log(data.hits[0].url);
  // forEach //
  // alternative to for loop //
  data.hits.forEach(function (value) {
    // console.log(value.title);
    // console.log(value.url);
    return (items += `<li><a href="${value.url}">${value.title}</a></li>`);
  });
  ulContainer.innerHTML += items;
}
// Events
inputSearch.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    loadSearch();
  }
});
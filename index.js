onload = () => {
  //Get the first four buttons  from DOM in side element cold class name .container >.row >.col-3.
  const btnCollocations = document.querySelectorAll("button");
  //Container found in side container cold by class name .container
  //Use to render after elements creating,sorting by first-name,sorting by popularity...
  const mainContainerFluid = document.querySelector(".container-fluid");
  //Object hold temp data. this data get from fetch response.
  const objectHoldTempData = {
    dataContainer: [],
    setMokeData: function (dataFromFetch) {
      this.dataContainer = dataFromFetch;
    },
    getMokeData: function () {
      return this.dataContainer;
    },
    addContact: function (randomObject) {
      this.dataContainer.push(randomObject);
    },
    deleteContact: function () {
      // this.dataContainer.pop();
    },
  };
  //Function loading data from Api and put the data in side objectHoldTempData object.
  async function loadData() {
    let responseOmer = await fetch("moke-data.json");
    let data = await responseOmer.json();
    objectHoldTempData.dataContainer = data;
  }
  loadData();
  // Function to creating  picture with person details
  function creatingPictureDetails(arr = []) {
    let pictureWithDetails = arr.map((arrValue) => {
      return `<div class="Box">
    <div class="row">
   <div class="col">
   <img src="${arrValue.pictureUrl}"/>
   </div>
   <div class="col">
   <p><b> Name  ${arrValue.name}<b/><p/>
   <p>Popularity  ${arrValue.popularity}<p />
   <button>Remove</button>
   </div>
   </div>
    <div/>`;
    });
    return pictureWithDetails;
  }
  //Function listening to "Get All Popular Person" button.
  function getAllPopularPersons() {
    let readyToRemove = this.parentNode.children;
    let readyToRemove1 = this.parentNode;
    console.log(readyToRemove );
    console.log(readyToRemove1 );
    creatingPictureDetails(objectHoldTempData.getMokeData()).map((value) => {
      mainContainerFluid.innerHTML += value;
    });
    // creatingPictureDetails(objectHoldTempData.getMokeData()).map((value) => {
    // mainContainerFluid.innerHTML += value;
    // });
    //Function listening to ....
    let RemoveButtonOnPicture = document.querySelectorAll(
      ".container-fluid .Box .row .col button"
    );
    console.log(RemoveButtonOnPicture);
    for (let index = 0; index < RemoveButtonOnPicture.length; index++) {
      RemoveButtonOnPicture[index].addEventListener(
        "click",
        deletingElementFromHtml
      );
    }
  }
  btnCollocations[0].addEventListener("click", getAllPopularPersons);
  // sort in an ascending order by first name
  function getAllPopularPersonSortedByFirstName() {
    const allPopularPersonsBeforeSortedByFirstName = [
      ...objectHoldTempData.getMokeData(),
    ];
    let getSortedArrayObjectsByFirstName;
    getSortedArrayObjectsByFirstName =
      allPopularPersonsBeforeSortedByFirstName.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    //Call function creatingPictureDetails() and sending sorted array objects by firstName
    //To  create picture details from getSortedArrayObjectsByFirstName variable
    //And then print this all elements to user by map function
    creatingPictureDetails(getSortedArrayObjectsByFirstName).map((value) => {
      removingAllRemoveButtons();
      mainContainerFluid.innerHTML += value;
    });
    //return getSortedArrayObjectsByFirstName;
  }
  btnCollocations[1].addEventListener(
    "click",
    getAllPopularPersonSortedByFirstName
  );
  // sort in an ascending order by popularity.
  function getAllPopularPersonSortedByPopularity() {
    const allPopularPersonsBeforeSortedByPopularity = [
      ...objectHoldTempData.getMokeData(),
    ];
    let allPopularPersonSortedByPopularity =
      allPopularPersonsBeforeSortedByPopularity.sort((p1, p2) =>
        p1.popularity < p2.popularity
          ? 1
          : p1.popularity > p2.popularity
          ? -1
          : 0
      );
    //Call function creatingPictureDetails() and sending sorted array objects by popularity
    //To  create picture details from allPopularPersonsBeforeSortedByPopularity variable
    //And then print this all elements to user by map function
    creatingPictureDetails(allPopularPersonSortedByPopularity).map((value) => {
      removingAllRemoveButtons();
      mainContainerFluid.innerHTML += value;
    });
  }
  btnCollocations[2].addEventListener(
    "click",
    getAllPopularPersonSortedByPopularity
  );
  //Function listening Remove button to removing one .Box with all details when the user clicked
  //On the Remove button
  function deletingElementFromHtml(event) {
    //console.log(event.path);
    event.path[6].classList.add("HideElements");
  }
  //I don't allow  to give the user the ability to change or remove  After sorted all
  //Popular persons by popularity or by first name so before print all elements on
  //The screen this function Removing all buttons at place .container-fluid .Box .row .col button
  function removingAllRemoveButtons(){
    let btn = document.querySelectorAll(
      ".container-fluid .Box .row .col button"
    );
    for (let index = 0; index < btn.length; index++) {
      btn[index].classList.add("Remove");
    }
  }
  //Function adding  random contacts when the user click on button "Add Random Contact"
  let isPrintFivePersonOnScreen = false;
  function addingRandomContacts() {
    let tempData = [];
    tempData.push(
      objectHoldTempData.getMokeData()[
        Math.floor(Math.random() * objectHoldTempData.getMokeData().length)
      ]
    );
    //Call function creatingPictureDetails and then sending tempData variable
    //To creating picture details from this array element after that printing
    //This element when the user clicked at the button called "Add Random Contact"
    mainContainerFluid.innerHTML += creatingPictureDetails(tempData);
    //This condition statement help me to print the five person on Screen
    //Only Once after called the function gettingFivePopular()
    //The condition change his state to True the purpose is do not
    //Print again the the five person on Screen
    //This condition give to append only one random popular person after clicked
    if (isPrintFivePersonOnScreen === false) {
      gettingFivePopular();
      isPrintFivePersonOnScreen = true;
    }
    isPrintFivePersonOnScreen = true;
    //Function listening to ....
    let RemoveButtonOnPicture = document.querySelectorAll(
      ".container-fluid .Box .row .col button"
    );
    // console.log(RemoveButtonOnPicture);
    if (RemoveButtonOnPicture !== null) {
      for (let index = 0; index < RemoveButtonOnPicture.length; index++) {
        //console.log(RemoveButtonOnPicture[index]);
        RemoveButtonOnPicture[index].addEventListener(
          "click",
          deletingElementFromHtml
        );
      }
    }
  }
   //Function listening to add random contact Button
   btnCollocations[3].addEventListener("click",addingRandomContacts);
  //Function create five list contacts from objectHoldTempData.getMokeData().slice(0,4)
  //And then this function call to function  creatingPictureDetails()
  //After that send the array listContact to function for the purpose to creating
  //Five Pictures with Details and finally print them on the screen 
  function gettingFivePopular() {
    let listContact = objectHoldTempData.getMokeData().slice(0, 4);
    creatingPictureDetails(listContact).map((value) => {
      mainContainerFluid.innerHTML += value;
    });
  }
};

//Open up the Github repositiory for this reading and view the provided src/index.html file in the browser.

//In src/index.js, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM.

//Use the labels to append the right data in the appropriate h4's, h3's and img tags.


// const fullname = document.getElementById("fullname");

//console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

  document.addEventListener("DOMContentLoaded", () => {

    let profilePicture = document.getElementById("profile-picture");
    let fullName = document.getElementById("fullname");
    let email = document.getElementById("email");
    let street = document.getElementById("street");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postcode = document.getElementById("postcode");
    let phone = document.getElementById("phone");
    let cell = document.getElementById("cell");
    let date_of_birth = document.getElementById("postcode");
    let submitButton = document.getElementById("submit-button")


    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => showData(data))
    //.then(data => obj = data)
    //.then(()=>console.log(obj))


  })

function showData(obj){
  document.getElementById("submit-button").addEventListener("click", function(e){

    debugger;
    fullName.innerText = (json.results["0"].name.first + json.results["0"].name.last);
    email.innerText = json.results["0"].email;
    street.innerText = json.results["0"].location.street;
    city.innerText = json.results["0"].location.city;
    state.innerText = json.results["0"].location.state;
    postcode.innerText = json.results["0"].location.postcode;
    phone.innerText = json.results["0"].phone;
    cell.innerText = json.results["0"].cell;
    date_of_birth.innerText = json.results["0"].dob;
  })
}

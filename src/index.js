const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
var user=fetch("https://randomuser.me/api/")
user.then(r=>r.json()).then(data=>console.log(displaymessages(data.results[0])
))

// data.results[0].gender


function displaymessages(obj) {
  let email = document.getElementById('email_label')
  // debugger;
  email.innerHTML=`Email:${obj.email}`
}



// document.getElementsByTagName("label")[3].textContent= "City: Great place"

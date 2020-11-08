console.log("loading the js file")

const getUser = () => {
  console.log("sending a fetch request")
  let fetchPromise = fetch('https://randomuser.me/api?results=10');
  let jsonPromise = fetchPromise.then(function(response){
    console.log("processing the fetch request")
    console.log("response = ", response)
    return response.json()
  })
  jsonPromise.then(function(json){
    let users = json.results;
    users.forEach(function(user){

      let userCard = generateContactCard(user);
      // let div = document.createElement("div");
      // div.innerHTML = userCardhtml;


      document.getElementById("contacts").appendChild(userCard)
    })
  })

  // console.log("after sending the fetch request")
}
getUser();


const generateContactCard = (user) => {
  let contactCard = document.createElement("div");
  contactCard.className = "contactCard";

  let img = document.createElement("img");
  img.src = user.picture.medium;
  contactCard.appendChild(img);

  let name = document.createElement("h2");
  name.className="name";
  name.innerText = user.name.first + " " + user.name.last;
  contactCard.appendChild(name);

  let phone = document.createElement("span");
  phone.className="phone";
  phone.innerText = user.phone;
  contactCard.appendChild(phone);

  let email = document.createElement("span");
  email.className="email";
  email.innerText = user.email;
  contactCard.appendChild(email);

  return contactCard;
}
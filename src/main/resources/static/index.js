// alert ("alert from js") 
console.log("hello from js")
data= {
    "name":"john doe",
    "gender": "male",

}
data.name
var users =[
    {
    "name":"john doe",
    "gender":"female",
    "img":"john.png"
},
{
    "name": " john doe",
    "gender" : "male",
    "img" : "jane.png"
} 
]
var id=0;
function toggleuser
function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            // convert raw text to json
            return response.json();
        })
        // dom mannipulation with API data
        .then(function(data){

            var userData = data.results[0];

            // 1: image
            var userImage = document.getElementById("user-image");
            userImage.src = userData.picture.large;

            // 2: name
            var userName = document.getElementById("user-name");
            userName.innerHTML = userData.name.first + " " +
                                    userData.name.last;

            // 3: gender
            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = userData.gender;
        })
        // handle error
        .catch(function(err){
            console.log(err);
        })
}
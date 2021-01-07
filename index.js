let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/dogs", configObj)
.then(response => response.json())
.then(object => console.log(object))
.catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
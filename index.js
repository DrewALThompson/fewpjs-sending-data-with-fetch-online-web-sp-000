function submitData(name, email){
  let data = {
    name: name,
    email: email
  }
  let configdObj = {
    method: 'Post',
    headers: {
      headers: "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };
  
  return fetch('http://localhost:3000/users',configdObj)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => {
    alert("Something funky happened, Cool Cat");
    console.log(error.message);
  })
}
 
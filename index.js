function submitData(name, email){
  let fData = {
    name: name,
    email: email
  };
  
  let configdObj = {
    method: 'Post',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(fData)
  };
  
  return fetch('http://localhost:3000/users',configdObj)
  .then(response => response.json())
  .then(json => {
    let insertion = document.createElement('')
    json.
  })
  .catch(error => {
    alert("Something funky happened, Cool Cat");
    console.log(error.message);
  })
}
 
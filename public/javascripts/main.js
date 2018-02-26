(() => {
  let getButton = document.querySelectorAll('.getButton'),
    //  postButton = document.querySelector('.postButton'),
      deleteButton = document.querySelector('.deleteRecord');

function getData(){
  debugger;
  let url = `api/${this.id}`;

  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
}


function deleteARecord(){
  let url = `api/${this.id}`; //this does the same as ?car + this.id

  fetch(url, {method : 'delete'})
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    //change page content here
  })
  .catch((error) => {
    console.log(error);
  });
}


getButton.forEach(button => button.addEventListener('click', getData));
deleteButton.addEventListener('click', deleteARecord);
})();

const el = document.getElementById("goBtn");
el.addEventListener("click", ev => {
  const inp = document.getElementById("numInput");
  //   alert("Your number is " + inp.value);
  deleteOldList();
  populateList(inp.value);
});

// Delete the old list. Rather than delete the li elements, I delete the whole list.
// Then I restart from scratch.
const deleteOldList = () => {
  let victim = document.querySelector("ol");
  if (victim !== null) {
    victim.parentNode.removeChild(victim);
  }
};

// Populates the list with text. Rather than putting all of the functionality in
// Action listener, I send the action listener to a function.
const populateList = async amount => {
  let content = document.getElementById("jsContent");
  let orderedList = document.createElement("ol");

  let olNode = await fetch(`https://randomuser.me/api?results=${amount}`)
    .then(response => response.json())
    .then(data => {
      let content = document.getElementById("jsContent");
      let orderedList = document.createElement("ol");
      data.results.forEach(element => {
        let listItem = document.createElement("li");
        listItem.appendChild(
          document.createTextNode(`${element.name.first} ${element.name.last}`)
        );
        orderedList.appendChild(listItem);
      });
    
      return orderedList;
    });
  content.appendChild(olNode);
};

// REDUNDENT 
const convertResponseToJson = response => response.json();

// REDUNDENT 
const showData = data => {
  let content = document.getElementById("jsContent");
  let orderedList = document.createElement("ol");
  data.results.forEach(element => {
    let listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(`${element.name.first} ${element.name.last}`)
    );
    orderedList.appendChild(listItem);
  });

  return orderedList;
};

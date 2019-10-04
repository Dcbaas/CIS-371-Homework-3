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
  let victim = document.querySelector('ol');
  if(victim !== null) {
    victim.parentNode.removeChild(victim);
  }
};

// Populates the list with text. Rather than putting all of the functionality in
// Action listener, I send the action listener to a function. 
const populateList = amount => {
  let content = document.getElementById('content');
  let orderedList = document.createElement("ol");
  for (let i = 0; i < amount; i++) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(`Item #${i + 1}`));
    orderedList.appendChild(listItem);
  }
  content.appendChild(orderedList);
};
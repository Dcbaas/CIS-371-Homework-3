const el = document.getElementById("goBtn");
el.addEventListener("click", ev => {
  const inp = document.getElementById("numInput");
  //   alert("Your number is " + inp.value);
  populateList(inp);
});

const populateList = amount => {
  let content = document.getElementsByClassName('content');
  // content.appendChild(document.createTextNode('test'));
  let orderedList = document.createElement("ol");
  for (let i = 0; i < amount; i++) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(`Item #${i}`));
    orderedList.appendChild(listItem);
  }
  content.appendChild(orderedList);
};

// Why doesn't this work? 
// document.getElementsByClassName('content').appendChild(document.createTextNode('hello'));
// content.appendChild(document.createTextNode('test'));
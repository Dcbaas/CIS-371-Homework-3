const el = document.getElementById("goBtn");
el.addEventListener("click", ev => {
  const inp = document.getElementById("numInput");
  //   alert("Your number is " + inp.value);
  populateList(inp.value);
});

const populateList = amount => {
  let content = document.getElementById('content');
  let orderedList = document.createElement("ol");
  for (let i = 0; i < amount; i++) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(`Item #${i}`));
    orderedList.appendChild(listItem);
  }
  content.appendChild(orderedList);
};
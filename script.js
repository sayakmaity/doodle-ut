function checkClick(id) {
  // get the element based on the id passed in
  var el = document.getElementById(String(id));

  // if it showed yes, make it no on click
  if (el.textContent == "yes") {
    el.textContent = "no";
    el.style.color = "red";
  }
  // if it showed no, make it maybe on click
  else if (el.textContent == "no") {
    el.textContent = "maybe";
    el.style.color = "orange";
  }
  // final case, set the availability to yes
  else {
    el.textContent = "yes";
    el.style.color = "green";
  }
}

function addEL() {
  // add a new row to the bottom to display the user's availability
  var row = mainTable.insertRow();

  // add cells to the row so that we can add the user's name/availability
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  // add the user's availability to the main table based on what they selected in upper table
  cell1.innerHTML = document.getElementById("myName").textContent;
  cell2.innerHTML = document.getElementById("0").textContent;
  cell3.innerHTML = document.getElementById("1").textContent;
  cell4.innerHTML = document.getElementById("2").textContent;
  cell5.innerHTML = document.getElementById("3").textContent;
  cell6.innerHTML = document.getElementById("4").textContent;
   

}

'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}


function toggleCheck(checkbox) {
  const listItem = checkbox.parentNode;
  if (checkbox.checked) {
    listItem.classList.add("completed");
  }
  else {
    listItem.classList.remove("completed");
  }
}

function addTodoList() {
  const text = document.getElementById("add-todolist").value;
  const boxLength = document.getElementsByClassName("checkbox").length;
  const labelElement = document.getElementById("checklist");
  const newLabel = document.createElement(`label${boxLength + 1}`);
  console.log(newLabel)
  newLabel.innerHTML = `<input type="checkbox" id="checkbox${boxLength + 1}" class="checkbox" onchange="toggleCheck(this)">${text}<button class="del-btn" onclick="deleteTodoList(this)">×</button><br><br>`;
  labelElement.appendChild(newLabel);
}

function deleteTodoList(click) {
  const listItem = click.parentNode;
  listItem.remove();
}
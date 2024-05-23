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
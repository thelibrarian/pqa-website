var qmenu = document.getElementById("qmenu");

function toggleExamples() {
  if (qmenu.style.display == "none") {
    qmenu.style.display = "block";
  } else {
    qmenu.style.display = "none";
  }
}

toggleExamples();
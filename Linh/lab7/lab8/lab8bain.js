let message1 = document.getElementById("message1");
function uploadFile1(files) {
  for (let i = 0; i < files.length; i++) {
    message1.innerHTML += files[i].name + "<br>";
  }
}

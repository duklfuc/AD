let message = document.getElementById("message");
function uploadFile(files) {
  message.innerText = files[0].name;
}

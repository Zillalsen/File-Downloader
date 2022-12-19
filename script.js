let input = document.querySelector("form input");
let button = document.querySelector("form button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchFile(input.value);
  input.value = "";
});

function fetchFile(url) {
  // fetching file and return respons as blob
  fetch(url)
    .then((data) => data.blob())
    .then((file) => {
      // URL.createObjectURL create a url from a passing a object
      let fileUrl = URL.createObjectURL(file);
      // create an <a> tag
      let aTag = document.createElement("a");
      aTag.href = fileUrl; // passing the file url to the href attribute
      document.body.appendChild(aTag); // append the <a> tag in the body
      aTag.download = "filename"; // passing filename as download value
      aTag.click(); // download the file on click
      aTag.remove(); // remove the 'a' tag after downloading
    });
}

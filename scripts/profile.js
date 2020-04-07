
var pictureContainer = document.getElementById("person-profile");
var image = document.createElement("img");
const githubPicture = "https://avatars0.githubusercontent.com/u/33266049?s=400&u=0dfc180e2834661bfab77da80efa0e84a99f844f&v=4";

function setDefault() {
    image.setAttribute("src", "/images/person.jpg");
}

image.onerror = setDefault;
image.setAttribute("src", githubPicture);


pictureContainer.appendChild(image);
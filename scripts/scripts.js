const counter = 10;
const API_KEY = "UZxyjao3_NlX7BGPXout1UEp_PEJb-LtpUAz8mpJsx8";
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${counter}`;
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//Create Elements for Links & photos Dynamicaly
const displayPhoto = ()=>{
  photosArray.forEach((photo)=>{
    const item = document.createElement("a");
    item.setAttribute("target","_blank");
    item.setAttribute("href",photo.links.html)
    const img = document.createElement("img");
    img.setAttribute("src",photo.urls.regular);
    img.setAttribute("alt",photo.alt_description);
    img.setAttribute("title",photo.alt_description)

    item.appendChild(img);
    imageContainer.appendChild(item);
  })
}

async function getPhoto(API_URL){
  try{
    const Response = await fetch(API_URL);
    photosArray = await Response.json();
    displayPhoto();
  }
  catch(error){
    //Error heare
  }
}

getPhoto(API_URL);
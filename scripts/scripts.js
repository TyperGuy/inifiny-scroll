const counter = 10;
const API_KEY = "UZxyjao3_NlX7BGPXout1UEp_PEJb-LtpUAz8mpJsx8";
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${counter}`;


async function getPhoto(API_URL){
  try{
    const Response = await fetch(API_URL);
    const Data = await Response.json();
    console.log(Data)
  }
  catch(error){
    //Error heare
  }
}

getPhoto(API_URL);
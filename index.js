// URL (required), options (optional)
let city = ""
let finalurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=bb0efb66e5c0c4d0ed81a5682f55b4a4";

const citydiv = document.createElement("div");
const tempdiv = document.createElement("div");
const statusdiv = document.createElement("div");
const maindiv = document.querySelector(".Information");
const button = document.querySelector("button");
const input = document.querySelector("input");

maindiv.appendChild(citydiv);
maindiv.appendChild(tempdiv);
maindiv.appendChild(statusdiv);

button.addEventListener('click', ()=> {
    city = input.value;
    finalurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=bb0efb66e5c0c4d0ed81a5682f55b4a4";
    fetchWeatherApi();
});

const fetchWeatherApi = async () => {

    let res = await fetch(finalurl,  {
        mode: 'cors'
    });
    let data = await res.json();

    console.log(data);
    citydiv.textContent = "City: " + data.name;
    tempdiv.textContent = "Temperature: " + data.main.temp;
    statusdiv.textContent = "Status: " + data.weather[0].description;
    /*
    cityname = await data.name;
    citytemp = await data.temp;
    citystatus = await data.status;
    */
}




/*

fetch(finalurl, {
    mode: 'cors'
})
  .then(function(response) {
    // Successful response :)
    console.log("Funcionou");
    teste = response.json();
  
    
  })
  .catch(function(err) {
    // Error :(
    console.log("Não funcionou");
    console.log(err);
  });

*/
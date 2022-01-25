const apiKey="a4d5f05ad9f8dcc4557c08475df3621d";
// var place = document.getElementById('city').value;
var btn = document.getElementById("submit");
var city = document.getElementById("city-name");
var temp = document.getElementById("city-temperature");
var desc = document.getElementById("city-description");
var wind = document.getElementById("city-wind");
var country;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    place = document.getElementById('city').value;
    weatherApi(place);
    place.value='';
})

const weatherApi = async (input) => {
    try{
        const mydata= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`,
   
            {mode: 'cors'}
        );
        var result = await mydata.json();
        //console.log(result);
        var { name } = result;
        var { feels_like } = result.main;
        var { speed } = result.wind;
        var { description } = result.weather[0];
        var { country } = result.sys;

        city.textContent = "City : "+ name + " , " + country;
        temp.textContent = "Temperature : " + Math.round(feels_like-273) + " °C";
        desc.textContent = "Weather : " + description;
        wind.textContent = "Wind Speed : " + speed + " Km/h"; 
        //console.log("name :"+ name + " Temperature : "+Math.round(feels_like-273));
    }
    catch(error){
        alert("City not found");
    }
    
}

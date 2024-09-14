load();
function search() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=${document.getElementById("txtSearch").value}&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("titleCity").innerHTML= "City";
            document.getElementById("titleCountry").innerHTML="Country";
            document.getElementById("titleTempC").innerHTML="Temp°C";
            document.getElementById("titleTempF").innerHTML="Temp°F";

            document.getElementById("city").innerHTML = data.location.name;
            document.getElementById("country").innerHTML = data.location.country;
            document.getElementById("tempC").innerHTML = data.current.temp_c+"°C";
            document.getElementById("tempF").innerHTML = data.current.temp_f+"°F";
        })
}

function load(){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$london&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("tempUk").innerHTML = "Temp : "+data.current.temp_c+"°C / "+data.current.temp_f+"°F";
            document.getElementById("windUk").innerHTML ="Wind : "+data.current.wind_kph+" kmph / "+data.current.wind_mph+" mph";
        })

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("tempUsa").innerHTML = "Temp : "+data.current.temp_c+"°C / "+data.current.temp_f+"°F";
            document.getElementById("windUsa").innerHTML ="Wind : "+data.current.wind_kph+" kmph / "+data.current.wind_mph+" mph";
        })

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$sydney&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("tempAus").innerHTML = "Temp : "+data.current.temp_c+"°C / "+data.current.temp_f+"°F";
            document.getElementById("windAus").innerHTML ="Wind : "+data.current.wind_kph+" kmph / "+data.current.wind_mph+" mph";
        })

}




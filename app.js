
function load() {
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





function load(){
    let search = document.getElementById("txtSearch").value;
    fetch (`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=${search}&days=7`)
    .then(res=>res.json())
    .then(data=>{
        console.log(search);
    })
    
}


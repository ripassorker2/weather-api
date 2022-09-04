let loadWether = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'62fcc15fc9d1fbe44501055151bc7e94'}&units=metric`)
        .then(res => res.json())
        .then(data => displayWhether(data))
}
let displayWhether = (data) => {
    console.log(data)
    let temp = document.getElementById('temp');
    temp.innerText = `${data.main.temp}`

    let city = document.getElementById('city');
    city.innerText = `${data.name}`

    let weather = document.getElementById('weather');
    weather.innerText = `${data.weather[0].main}`

}
document.getElementById('searchBtn').addEventListener('click', function () {

    let serchCity = () => {

        let searchFeild = document.getElementById('input-feild');
        let searchFeildValue = searchFeild.value;
        loadWether(searchFeildValue);
        searchFeild.value = '';

    }
    serchCity();
})


// loadWether('London')
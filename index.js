const API_KEY = `3b18c4ed7b52c9286aca25414b6e3e74`;

const searchCity = () => {
    const searchText = document.getElementById('search-feild').value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    console.log(temp)
    setInnerText('city', temp.name)
    setInnerText('tempr', temp.main.temp)
    setInnerText('weatehr', temp.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgicon = document.getElementById('iconw')
    imgicon.setAttribute('src', url);

}
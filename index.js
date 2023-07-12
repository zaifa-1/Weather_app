let input= document.querySelector('.input');
let submitBtn= document.querySelector('.btn');



submitBtn.addEventListener('click', async ()=>{
    if(input.value=== '') return
    await cityName(input.value);
})

async function getWeather(city) {
    try {
      const weatherAPI = await fetch(`https://api.weatherapi.com/v1/current.json?key=0766a4722b7c471fa6875230231007&q=${city}`, { mode: 'cors' });
      const currentWeather = await weatherAPI.json();
      return currentWeather
    } catch {
      alert('Enter a valid city name')
    }
}



async function cityName(city) {
    try{
        const data = await getWeather(city);
        const cityN = `${data.current.temp_c}°C`;
        let p= document.querySelector('.p')
        p.textContent= cityN
    }catch {
        alert('Enter a valid city name')
      }
  }

  
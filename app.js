const form = document.querySelector("form");
const city = document.querySelector("#city");
const weatherBox = document.querySelector('#weather-box');

form.addEventListener('submit',(events)=>{
      events.preventDefault();

      axios(`http://api.weatherapi.com/v1/current.json?key=eb2c1f91e9ee4733a65170102240901&q=${city.value}&aqi=no`)
      .then((res)=>{
            weatherBox.innerHTML = `
            
      <h2>${res.data.location.name}</h2>
      
      <div class="flex-wrap justify-between">
      <h2>${res.data.location.localtime},${res.data.location.country}</h2>
      </div>
      
      <div class="flex flex-row justify-between flex-wrap">
      <div class="bg-red-500"><h2>${res.data.current.temp_c}</h2></div>
      <div><img src="${res.data.current.condition.icon}"></div>
      </div>
       
      <div class="flex">
      <h2>${res.data.current.feelslike_c}</h2>
      <h2>${res.data.current.humidity}</h2>
      <h2>${res.data.current.wind_kph}</h2>
      </div>
      `;
          console.log(res);
      }).catch((err)=>{
            console.log(err);
      })
      
})

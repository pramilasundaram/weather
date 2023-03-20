
fetch('https://restcountries.com/v3.1/all')
.then((response)=>{
    return response.json();
})
.then ((compdata)=>{    
   let data="";
  

  // console.log(compdata)
  compdata.map((value)=>{
    let a=[];
    let aPI_KEY='7a7a3a5d9ca005dbb398acb8f153fc7d';
    a=value.latlng;
 
    data +=`<div class="col-lg-4 col-sm-4">
            <div class="card " >
            <h5 class="card-title" id="title">${value.name.common}</h5>
            <div class="card-body">
            <img src="${value.flags.png}" class="card-img-top" alt="${value.flags.alt}">
                         
            <p class="card-text">Captital: ${value.capital}</p>
            <p class="card-text">Region: ${value.region}</p>
            <p class="card-text">Country Code: ${value.cca3}</p>
            <a class="btn btn-primary" target ="_blank" href="https://api.openweathermap.org/data/2.5/weather?lat=${a[0]}&lon=${a[1]}&appid=${aPI_KEY}">Click for Weather</a>
            </div>
            </div>
            </div>`
          })
   document.getElementById("cid").innerHTML=data;

})

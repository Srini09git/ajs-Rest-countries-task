// Restcountries using Fetch API;

var result = fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=> {
    var container = document.createElement("div");
    container.setAttribute("class","container");
    var row = document.createElement("div");
    row.setAttribute("class","row");
    var h1 = document.createElement("h1");
    h1.innerHTML="Restcountries using Fetch API";
    container.append(h1,row);
    document.body.append(container);
    for(var i=0;i<data1.length;i++){
        var col = document.createElement("div");
        col.setAttribute("class","col-lg-4");
        col.innerHTML=`<div class="box">
        <div class="card">
        <div class="card-dark">
        <h5 class="card-title bg-dark text-white">${data1[i].name}</h5>
        </div>
        <img src="${data1[i].flag}" class="card-img-top" alt="flag" height="200px" width="100px">
        <div class="card-body">
          <span class="card-text">Capital: ${data1[i].capital}</span>
          <span class="card-text">Region: ${data1[i].region}</span>
          <span class="card-text">Country Code: ${data1[i].alpha3Code}</span>
          <br>
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
        </div>
      </div>`
      row.append(col);
    }
})
.catch((error)=>console.log(error));
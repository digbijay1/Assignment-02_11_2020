function getData(url) {
  return new Promise((response, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        response(xhr.responseText);
      } else if (this.readyState == 4 && this.status !== 200) {
        reject("error");
      }
    };

    xhr.send();
  });
}

let url = "https://restcountries.eu/rest/v2/all";


//console.log(getData());
getData(url)
  .then((response) => {
    var obj=JSON.parse(response)
   

    console.log(obj)
    
    //console.log(response);
    for(var i=0;i<obj.length;i++){

   var divold=document.createElement("div")
  divold.setAttribute("class","container")
  document.body.appendChild(divold)
   
  
  var divnew=document.createElement("div")
    divnew.setAttribute("class","row")
    divold.appendChild(divnew)

  

    var old1div=document.createElement("div")
    old1div.setAttribute("class","col-lg-4")
    divnew.appendChild(old1div)


    
    

      var div=document.createElement("div")
      div.setAttribute("class","card")
      div.setAttribute("style", "width: 18rem;");
     old1div.appendChild(div)

      var paragraph=document.createElement("p")
      paragraph.setAttribute("class","card-text")
      div.appendChild(paragraph)
      paragraph.innerHTML=obj[i].name
    
    var img=document.createElement("img")
      img.setAttribute("class","card-img-top")
      img.innerHTML = obj[i].flag;  
      img.src=obj[i].flag
      div.appendChild(img)

      
      var div1=document.createElement("div")
      div1.setAttribute("class","card-body")
      div.appendChild(div1)

     

      var div2=document.createElement("h5")
      div2.setAttribute("class","card-title")
      div2.innerHTML=obj[i].capital
      div1.appendChild(div2)


      var div3=document.createElement("p")
      div3.setAttribute("class","card-title")
      div3.innerHTML=obj[i].region
      div1.appendChild(div3)
      

      var div4=document.createElement("p")
      div4.setAttribute("class","card-title")
      div4.innerHTML=obj[i].latlng
      div1.appendChild(div4)

     



      var div5=document.createElement("p")
      div5.setAttribute("class","card-title")
      div5.innerHTML=obj[i].name
      div1.appendChild(div5)

      var div6=document.createElement("p")
      div6.setAttribute("class","card-title")
      div6.innerHTML=obj[i].alpha2Code+","+obj[i].alpha3Code
      div1.appendChild(div6)

      var div7=document.createElement("button")
      div7.setAttribute("type","button")
      div7.setAttribute("class","btn btn-primary")
      div1.appendChild(div7)
      div7.innerHTML="CLICK FOR WEATHER"
     
      div7.setAttribute("onclick",`popupopen('${obj[i].name}')`)

  

    }
   


    
    
    
  
   
  })
  .catch((err) => console.error(err));



  function popupopen(countryName){
  
     // console.log(countryName)
      
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=5419af2550f5eec4fc8eee39304f4f76`)
    .then(response=>(response.json()))

    .then(data=>alert("weather of the country "+data.name+" "+"having weather"+" "+data.weather[0].main))

    
     
   
    .catch(err=>alert("wrong city name"))
   
  }
 
  
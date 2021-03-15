const quotes = () => {
   n= document.getElementById("text");
   m= document.getElementById("author");
   console.log(n);
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    }).then((data)=>{
        x=Math.floor(Math.random()*100);
        console.log(data);
        n.innerHTML=data[x].text;
        m.innerHTML='By:-'+data[x].author;
    }).catch((error)=>{
        console.log(error);
    })
};



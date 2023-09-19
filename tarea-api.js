
const button = document.querySelector('#container button');
const texto_chiste = document.querySelector('#container p');
const lista_comentarios = [];


document.addEventListener('DOMContentLoaded', tirar_chiste);

button.addEventListener('click', tirar_chiste);

async function tirar_chiste(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const jokeObj = await jokeData.json();
    texto_chiste.innerHTML = jokeObj.joke;
}


document.addEventListener('submit', function postear_comentario(){
  event.preventDefault();

  let htmlContentToAppend = "";
  let _datos = {
      comment: "xxx",
      score: "yyy"
    }

  _datos.comment = document.getElementById("comment").value;
  _datos.score = parseInt(document.getElementById("score").value);
  
  fetch('https://jsonplaceholder.typicode.com/users', {
  method: "POST",
  body: JSON.stringify(_datos),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));

if (_datos.comment != "" && _datos.score!=0) {
htmlContentToAppend += `
<div id="comentario">
<p>${showProductRating(_datos.score)}</p>
<p>${_datos.comment}</p>
</div>


    `;
    document.getElementById("container3").innerHTML = htmlContentToAppend;


} else { alert('Debe rellenar todos los campos.')};

});
    
        


function showProductRating(score){
  let htmlContentToAppend = ""
  for (let i=0; i<score; i++) 
      htmlContentToAppend += `<span class="fa fa-star checked"></span>`
  for (let i=0; i<5-score; i++) 
      htmlContentToAppend += `<span class="fa fa-star"></span>`
  return htmlContentToAppend;
} 

/*

htmlContentToAppend += `<p>${_datos.comment}</p>`

document.getElementById("container3").innerHTML = htmlContentToAppend;


fetch('url')
	.then((response) => {
	  if (!response.ok) {
		  throw new Error("Error de red.");
	  }
	  return response.json();
})
	.then(data => {
	//acá va la info que se quiere mostrar
})
	.catch(error => {
	console.error(error);
});

---
  //if (input_description != "" && comment_score!=0) 
      document.getElementById("container3").innerHTML += `
      <div>
      <div id="comentarios" >
      <p> ${showProductRating(comment_score)}</p>
      <p>${input_description}</p>

      </div>
      </div>

          `;
*/
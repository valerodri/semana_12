
const button = document.querySelector('.container button');
const texto_chiste = document.querySelector('.container p');
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
      gusto: "yyy"
    }

  _datos.comment = document.getElementById("comment").value;
  _datos.gusto = document.getElementById("gusto").value;
  
  fetch('https://jsonplaceholder.typicode.com/users', {
  method: "POST",
  body: JSON.stringify(_datos),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));


const node = document.createElement("li");
const textnode = document.createTextNode(_datos.comment);
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

}
);



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
*/
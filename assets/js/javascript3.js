function MiembroSquad(nombre, apellido, edad, hobbies, imagen){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
	this.imagen = imagen
	/*this.mostrar = function(){
		var mostrar = "<p><strong> Nombre: </strong>" + this.nombre + " " + this.apellido + "<br><strong> Edad: </strong>" + this.edad  + "<br><strong> Hobbies: </strong></p><li>" + this.hobbie1 + "</li><li>" + this.hobbie2 + "</li> <li>" + hobbie3 + "</li><br><br></p>";
		return mostrar;
	}*/	
}

function principal(){
	var arregloMiembros = [];

	const MartinaC = new MiembroSquad("Martina", "Cobarrubias", 27, ["Escuchar música", "Gatos", "Bailar"])
	const FaD = new MiembroSquad("Fa", "Díaz", 31, ["Dormir", "Jugar con mi gata", "Caminar"])
	const JoselynG = new MiembroSquad("Joselyn", "Grez", 22, ["Ir al cine", "Jugar videojuegos", "Ir a la playa"])
	const PauliH = new MiembroSquad("Paulina", "Huañaco", 25, ["Escuchar música", "Correr", "Andar en bici"])
	const AleM = new MiembroSquad("Alejandra", "Morales", 27, ["Hacer deporte", "Ver películas", "Cocinar"])
	const PauR = new MiembroSquad("Paulina", "Rojas", 20, ["Leer", "LotR", "Viajar"])
	const ValeR = new MiembroSquad("Vale", "Rodriguez", 25, ["Andar en bici", "Conocer gente", "Comer"])
	const ValeS = new MiembroSquad("Vale", "Spuler", 21, ["Ver películas", "Dormir", "Comer"])

	arregloMiembros.push(MartinaC);  
	arregloMiembros.push(FaD);
	arregloMiembros.push(JoselynG);
	arregloMiembros.push(PauliH);
	arregloMiembros.push(AleM);
	arregloMiembros.push(PauR);
	arregloMiembros.push(ValeR);
	arregloMiembros.push(ValeS);


  	for(var i = 0; i< arregloMiembros.length; i++){
  		var fichaMiembros = document.getElementById("fichaMiembros");
    	fichaMiembros.innerHTML += "<div id='m"+i+"'><b>Nombre: </b>" + arregloMiembros[i].nombre + " " + arregloMiembros[i].apellido + "<br><b>Edad: </b>" + arregloMiembros[i].edad + " años <br>" + "<b>Hobbies: </b><ul><li>" + arregloMiembros[i].hobbies[0] + "</li><li>" + arregloMiembros[i].hobbies[1] + "</li><li>" + arregloMiembros[i].hobbies[2] + "</li></ul><textarea id='comentarios-m"+i+"' row='30' col='10'/> </textarea> <button type = 'button' id='boton-agregar"+i+"' onclick='ComentarioBoton();'> Agregar! </button></div>";
  	}
return arregloMiembros;
}

principal();

function ComentarioBoton(fichaMiembros[i]){
	var comments = []; //array vacío
	var input = document.getElementById("comentarios-m"+i);
	var imprComment = document.getElementById("m"+i);
	var newComm = new Comentarios(id, input.value, 0);
	comments.push(newComm);
	imprComment.innerHTML += "<p>"+newComm.comentario+"</p>"; // imprime en el HTML
  	input.value = ""; //para vaciar 
 	console.log(comments);

}

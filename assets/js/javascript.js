var idCont = 0;

function MiembroSquad(nombre, apellido, edad, hobbies, imagen){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
	this.id = idCont++;
	this.mostrar = function(){
		
		var mostrar = "<div id='m"+idCont+"'><b>Nombre: </b>" + this.nombre + " " + this.apellido + "<br><b>Edad: </b>" + this.edad + " años <br>" + "<b>Hobbies: </b><ul><li>" + this.hobbies[0] + "</li><li>" + this.hobbies[1] + "</li><li>" + this.hobbies[2] + "</li></ul><textarea id='comentarios-m"+this.id+"' row='40' col='20'/> </textarea> 	<button type = 'button' id='boton-agregar' onclick='ComentariosBoton("+this.id+");'> Agregar! </button></div>";
		return mostrar;
	}
}

function Comentarios(id, comentario, likes){
	this.id = "comentarios-m"+id
	this.comentario = comentario
	this.likes = likes
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

	var fichaMiembros = document.getElementById("fichaMiembros")
  	for(var i = 0; i< arregloMiembros.length; i++){
  		  		console.log(arregloMiembros[i]);

  		fichaMiembros.innerHTML += arregloMiembros[i].mostrar();
  	}
return arregloMiembros;
}

principal();


function ComentariosBoton(id){
	var comments = []; //array vacío
	debugger;
	var input = document.getElementById("comentarios-m"+i);
	var imprComment = document.getElementById("m"+i);
	var newComm = new Comentarios(id, input.value, 0);
	comments.push(newComm);
	imprComment.innerHTML += "<p>"+newComm.comentario+"</p>"; // imprime en el HTML
  	input.value = ""; //para vaciar 
 	console.log(comments);	
	console.log(newComm);
}
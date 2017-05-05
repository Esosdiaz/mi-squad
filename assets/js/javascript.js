
function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
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

	/*arregloMiembros.forEach(function (el){
    	var fichaMiembros = document.getElementById("fichaMiembros");
    	fichaMiembros.innerHTML += "<div><b>Nombre: </b>" + el.nombre + " " + el.apellido + "<br><b>Edad: </b>" + el.edad + " años <br>" + "<b>Hobbies: </b><ul><li>" + el.hobbies[0] + "</li><li>" + el.hobbies[1] + "</li><li>" + el.hobbies[2] + "</li></ul></div><br>";
  	});*/
  	for(var i = 0; i< arregloMiembros.length; i++){
  		var fichaMiembros = document.getElementById("fichaMiembros");
    	fichaMiembros.innerHTML += "<div id='m"+i+"'><b>Nombre: </b>" + arregloMiembros[i].nombre + " " + arregloMiembros[i].apellido + "<br><b>Edad: </b>" + arregloMiembros[i].edad + " años <br>" + "<b>Hobbies: </b><ul><li>" + arregloMiembros[i].hobbies[0] + "</li><li>" + arregloMiembros[i].hobbies[1] + "</li><li>" + arregloMiembros[i].hobbies[2] + "</li></ul><textarea id='comentarios-m"+i+"' row='30' col='10'/> </textarea></div>";
  	}
return arregloMiembros;
}

principal();


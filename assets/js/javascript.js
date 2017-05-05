
function MiembroSquad(nombre, apellido, edad, hobbie1, hobbie2, hobbie3){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbie1 = hobbie1
	this.hobbie2 = hobbie2
	this.hobbie3 = hobbie3
	this.mostrar = function(){
		document.write("<p></center><strong> Nombre: </strong>" + this.nombre + " " + this.apellido + "<br><strong> Edad: </strong>" + this.edad  + "<br><strong> Hobbies: </strong></p><li>" + this.hobbie1 + "</li><li>" + this.hobbie2 + "</li> <li>" + hobbie3 + "</li><br><br></center></p>")
	}	
}

const MartinaC = new MiembroSquad("Martina", "Cobarrubias", 27, "Escuchar música", "Gatos", "Bailar")
document.getElementById("martinaC").innerHTML = MartinaC.mostrar(); 

const FaD = new MiembroSquad("Fa", "Díaz", 31, "Dormir", "Jugar con mi gata", "Caminar")
document.getElementById("faD").innerHTML = FaD.mostrar();

const JoselynG = new MiembroSquad("Joselyn", "Grez", 22, "Ir al cine", "Jugar videojuegos", "Ir a la playa")
document.getElementById("joselynG").innerHTML = JoselynG.mostrar();

const PauliH = new MiembroSquad("Paulina", "Huañaco", 25, "Escuchar música", "Correr", "Andar en bici")
document.getElementById("pauliH").innerHTML = PauliH.mostrar();

const AleM = new MiembroSquad("Alejandra", "Morales", 27, "Hacer deporte", "Ver películas", "Cocinar")
document.getElementById("aleM").innerHTML = AleM.mostrar();

const PauR = new MiembroSquad("Paulina", "Rojas", 20, "Leer", "LotR", "Viajar")
document.getElementById("pauR").innerHTML = PauR.mostrar();

const ValeR = new MiembroSquad("Vale", "Rodriguez", 25, "Andar en bici", "Conocer gente", "Comer")
document.getElementById("valeR").innerHTML = ValeR.mostrar();

const ValeS = new MiembroSquad("Vale", "Spuler", 21, "Ver películas", "Dormir", "Comer")
document.getElementById("valeS").innerHTML = ValeS.mostrar();



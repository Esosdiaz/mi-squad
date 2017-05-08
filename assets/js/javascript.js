var idCont = 0; // con esto se van a crear todos los id's, es global por lo tanto.

//Constructor de miembros.
function MiembroSquad(nombre, apellido, edad, hobbies, imagen){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.id = idCont++;
	this.imagen = imagen; 
	this.mostrar = function(){
		var idBotonAgregar = "btn-agregar-"+this.id; // agregará el id a cada boton agregar de cada objeto
    	var idDeComentarios = "comentariosAgregados-"+this.id; // agregará id a los comentarios agregados.
    	var mostrar = "<div id='m"+idCont+"'><img src='"+this.imagen+"' width='100' heigth='100'><br><b>Nombre: </b>" + this.nombre + " " + this.apellido + "<br><b>Edad: </b>" + this.edad + " años <br>" + "<b>Hobbies: </b><ul><li>" + this.hobbies[0] + "</li><li>" + this.hobbies[1] + "</li><li>" + this.hobbies[2] + "<p>Comentarios: </p><div id="+idDeComentarios+"></div></li></ul><textarea id='comentarios-m"+this.id+"' row='40' col='20'/></textarea> 	<button type = 'button' id="+idBotonAgregar+" onclick='ComentariosBoton("+this.id+");'> Agregar!</button>"; //con el div id/ el div id de los comentarios / la caja de texto y el boton se están usando en todos los casos las variables asignadas dentro de esta función que a su vez, están llamando a la variable asignada dentro del constructor del objeto, que a su vez depende del contador que está fuera del contructor, de esta manera todo lo anterior queda con el mismo Id. 
		return mostrar;
	}
}

//Variable para crear ID dinamicos en los comentarios. Esto sirve para relacionar los likes a cada comentario.
var comentarioIdCont = 0;

//Constructor para comentarios.
function Comentarios(id, comentario, likes){
	this.id = comentarioIdCont++
	this.comentario = comentario
	this.likes = likes  
}

    
function principal(){
	var arregloMiembros = [];

	const MartinaC = new MiembroSquad("Martina", "Cobarrubias", 27, ["Escuchar música", "Gatos", "Bailar"], "https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-1/c0.0.642.642/12924468_10208484335962926_4992538527452527607_n.jpg?oh=b5299f3f8e3b4094b3995f37a74a3863&oe=598314AE");
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

	var fichaMiembros = document.getElementById("fichaMiembros") //ciclo para imprimir cada una de las fichas en el html. 
  	for(var i = 0; i< arregloMiembros.length; i++){
  		fichaMiembros.innerHTML += arregloMiembros[i].mostrar();
  	}
return arregloMiembros;
}

principal();

var arrayComentarios = [] // array que recibe los comentarios(objetos)
function ComentariosBoton(id){ //Funcion que crea los comentarios, cada uno con su ID respectivo
	var input = document.getElementById("comentarios-m"+id); // busca la caja de comentarios respectivos con su id
	var imprComment = document.getElementById("comentariosAgregados-"+id); // va al div especificado para esto. 
	var newComm = new Comentarios(id, input.value, 0);  //instancia de creacion de input. 
  	var idComentario = "comentario-id-"+newComm.id; //con esta variable, el comentario tb va a tener un id asociado
	imprComment.innerHTML += "<p>"+newComm.comentario+"</p>" // IMPRIME
    arrayComentarios.push(newComm); // guarda el nuevo comentario en el nuevo array de más arriba
  	input.value = ""; //para vaciar 
    }
  

console.log(newComm);

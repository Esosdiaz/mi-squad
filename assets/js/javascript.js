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

//Variable para crear ID dinamicos en los comentarios. 
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
	const FaD = new MiembroSquad("Fa", "Díaz", 31, ["Dormir", "Jugar con mi gata", "Caminar"], "https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-9/18199346_733503480163467_2593630536836340744_n.jpg?oh=c13f5f30db6bff5ac9ac2af1620d9129&oe=59B1F929")
	const JoselynG = new MiembroSquad("Joselyn", "Grez", 22, ["Ir al cine", "Jugar videojuegos", "Ir a la playa"], "https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-9/15541209_1819455288311183_8614525934443571280_n.jpg?oh=ec4e44ff138bfc2d33f16f44871eb069&oe=59BE89C1")
	const PauliH = new MiembroSquad("Paulina", "Huañaco", 25, ["Escuchar música", "Correr", "Andar en bici"], "https://scontent.fsst1-1.fna.fbcdn.net/v/t31.0-8/p960x960/17097565_270304496715199_554639343061705710_o.jpg?oh=21f018a737b963b706bd397f0108de86&oe=59BEA23C")
	const AleM = new MiembroSquad("Alejandra", "Morales", 27, ["Hacer deporte", "Ver películas", "Cocinar"], "https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-9/11693803_10206575353524460_4986542347816085853_n.jpg?oh=8321c9cfb33776e049af7818e24e8294&oe=597425FE")
	const SuO = new MiembroSquad("Susana", "Opazo", 25, ["Apoyar a la U", "Leer", "Beber té como señora"], "https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-1/13015316_3410315615315_2453493158885669918_n.jpg?oh=5b6dfcf24de00dfd00da9f8bec3b5667&oe=59B7EFEC")
	const PauR = new MiembroSquad("Paulina", "Rojas", 20, ["Leer", "LotR", "Viajar"], "https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-9/18342189_10212590812702786_3405789562533140191_n.jpg?oh=eb2bff8eb8f309166ebab6f3821bd3fc&oe=59760595")
	const ValeR = new MiembroSquad("Vale", "Rodriguez", 25, ["Andar en bici", "Conocer gente", "Comer"], "https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-9/17757205_1385096158214224_1837975401642058947_n.jpg?oh=59c232629c9ae9f9580492e32867afcd&oe=59BF24E9")
	const ValeS = new MiembroSquad("Vale", "Spuler", 21, ["Ver películas", "Dormir", "Comer"], "https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-9/13051754_10209010849890889_4971832699635125059_n.jpg?oh=8f381931fd8730fc62be2eb14db4d1d1&oe=5982673B")



	arregloMiembros.push(MartinaC);  
	arregloMiembros.push(FaD);
	arregloMiembros.push(JoselynG);
	arregloMiembros.push(PauliH);
	arregloMiembros.push(AleM);
	arregloMiembros.push(SuO)
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

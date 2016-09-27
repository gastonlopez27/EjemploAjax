
function MostrarError()
{/*
	var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});
*/
//en .ajax() adentro de los parentesis va json entre {}
$.ajax({url:"nexoNoExiste.php"}).then(function(respuesta){
alert("Primero" + respuesta);
console.info("Primero", respuesta)
},function(respuesta){
alert("Segundo" + respuesta);
console.info("Segundo", respuesta)
}); 
//esta funcion devuelve retornos o callbacks. Este retorno nos puede dar error o correcto. 
//el crrecto nos trae el codigo. 
//then recibe 2 funciones completas por parametro
//ajax sirve para comunicarme con la bbdd o con una API
//dentro del then recibe 2 tipos de callbacks, correcta o error

}
function MostrarSinParametros()
{
	/*
	var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
*/

$.ajax({url:"nexoTexto.php"}).then(
	function(respuesta){
		$("#principal").html(respuesta);
	}
	,
	function(error){
		$("#informe").html(error.responseText);
	}
	);
}

function Mostrar(queMostrar)
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar} //esto es javascript, esta del lado del cliente
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}
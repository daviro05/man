function guardarPuntuacion(){

    console.log("Entra");
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fichero = fso.OpenTextFile("puntuaciones.txt", 8, true);

    var record = getRecord();

    fichero.writeline(record);

    fichero.Close();


	/*console.log('entra');
	//Mediante esta funcion enviamos los datos a la funcion de php de guardar.php
    //var person = prompt("Nombre", "");

		var record = getRecord();
	    $.ajax({
	       url: "guardar.php",
	       type: "post",
	       data: {"puntos" :record},
	       	       success: function(data){
	       }
	    });*/
}

function leerPuntuacion(){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      record = this.responseText;
      document.getElementById("puntuaciones").innerHTML = record;
      
    }
  };
  /* Especificamos la solicitud. Método .open
  * - GET/POST
  * - Archivo: jpg, xml, txt, etc.
  * - Método de envio: true, false. true = metodo asincrono.
  */
  xhr.open("GET","puntuaciones.txt",true);
  // .send: envia solicitud al servidor.
  // Si utilizamos POST debemos pasar los datos por parámetro.
  xhr.send();
}
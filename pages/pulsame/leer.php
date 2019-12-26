<?php
var file_puntos = fopen("puntuaciones.txt", "r") or exit("No se puede abrir el archivo");
//Output a line of the file until the end is reached
while(!feof(file_puntos))
{
	echo fgets(file_puntos);
}
fclose(file_puntos);
?>
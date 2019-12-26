
<?php 
var puntos = $_POST['puntos'];
var file_puntos = fopen("puntuaciones.txt", "w");
fwrite(file_puntos, puntos. PHP_EOL);
fclose(file_puntos);
?>
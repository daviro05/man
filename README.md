# man

Abrir puerto 80

conectarse con

`ssh -i .\jairo.pem ec2-user@ec2-35-180-90-169.eu-west-3.compute.amazonaws.com`

Install git

`sudo yum install git`

Install npm and node

`curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -`

`sudo yum install nodejs`

`mkdir git`

`cd git`

`git clone https://github.com/mlaina/jairo`

`cd jairo`

`npm install`

`npx http-server`

`curl http://localhost`


Para mantener un hilo del servidor corriendo utilizar forever

`sudo ./node_modules/forever/bin/forever start index.js`

(Para que que se pueda servir en el puerto 80 necesitas sudo para hacerlo con permisos)
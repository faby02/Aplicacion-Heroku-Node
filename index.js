const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.send(`
<html>

<head>
<title>Galería de Fotos</title>

<style>

body{
font-family:Arial;
background:#f2f2f2;
text-align:center;
}

h1{
margin-top:20px;
}

.gallery{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:15px;
padding:20px;
}

.gallery img{
width:100%;
cursor:pointer;
border-radius:10px;
transition:0.3s;
}

.gallery img:hover{
transform:scale(1.05);
}

/* ventana modal */

.modal{
display:none;
position:fixed;
z-index:1;
padding-top:60px;
left:0;
top:0;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.9);
}

.modal-content{
margin:auto;
display:block;
width:70%;
max-width:700px;
border-radius:10px;
}

.close{
position:absolute;
top:20px;
right:40px;
color:white;
font-size:40px;
cursor:pointer;
}

</style>

</head>

<body>

<h1>Galería de Fotos</h1>

<div class="gallery">

<img src="https://picsum.photos/400/300?1" onclick="openModal(this)">
<img src="https://picsum.photos/400/300?2" onclick="openModal(this)">
<img src="https://picsum.photos/400/300?3" onclick="openModal(this)">
<img src="https://picsum.photos/400/300?4" onclick="openModal(this)">
<img src="https://picsum.photos/400/300?5" onclick="openModal(this)">
<img src="https://picsum.photos/400/300?6" onclick="openModal(this)">

</div>

<div id="myModal" class="modal">

<span class="close" onclick="closeModal()">&times;</span>

<img class="modal-content" id="imgGrande">

</div>

<script>

function openModal(img){
document.getElementById("myModal").style.display="block";
document.getElementById("imgGrande").src=img.src;
}

function closeModal(){
document.getElementById("myModal").style.display="none";
}

</script>

</body>

</html>
`);
});

app.listen(PORT, () => {
console.log("Servidor funcionando en puerto " + PORT);
});
// Verificación de despliegue en Heroku
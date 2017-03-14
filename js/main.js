
var nombre=document.getElementById('nombre');
var apellido=document.getElementById('apellido');
var edad=document.getElementById('edad');
var genero=document.getElementById('genero');
var ciudad=document.getElementById('ciudad');
var pais=document.getElementById('pais');
var form=document.getElementById('form');
var enviar=document.getElementById('enviarficha');
var arrayObjetos=[];

function enviarFicha(){
  function ficha(nombre, apellido,edad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.imprimir=function(){
  }}
}
enviarFicha.addEventListerner('click', function(e){
  e.preventDefault();

  var persona=new ficha(nombre.value , apellido.value , edad.value ,pais.value);
  arrayObjetos.push(persona);

}

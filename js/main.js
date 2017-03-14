
var nombre=document.getElementById('nombre');
var apellido=document.getElementById('apellido');
var edad=document.getElementById('edad');
var genero=document.getElementById('genero');
var ciudad=document.getElementById('ciudad');
var pais=document.getElementById('pais');
var form=document.getElementById('form');
var arrayObjetos=[];

  function ficha(nombre, apellido,edad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.imprimir=function(){
  var datos="Nombre: "+ this.nombre + this.apellido + "Edad: "+ this.edad + "Pais: "+ this.pais;
return datos;
}
}

document.getElementById('enviarficha').addEventListener('click', function(e){
  e.preventDefault();

  var persona=new ficha(nombre.value , apellido.value , edad.value ,pais.value);
  arrayObjetos.push(persona);
  var div=document.createElement("fieldset");
  div.innerHTML=persona.imprimir();
  form.appendChild(div);
});

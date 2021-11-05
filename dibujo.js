var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var boton_d = document.getElementById("boton_dibujar");
var boton_b = document.getElementById("boton_borrar");

var lienzo = d.getContext("2d");
var ancho = d.width;

boton_d.addEventListener("click",dibujoPorClick);//Agrega el evento Click y ejecuta la función
boton_b.addEventListener("click",borrarLienzo);//Agrega el evento Click y ejecuta la función

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal)
 {
    lienzo.beginPath();  //funcion --> arranca el dibujo
    lienzo.strokeStyle = color; //atributo o propierdad del objeto lienzo y se asigna el color rojo
    lienzo.moveTo(xInicial,yInicial); // muevo la posisición
    lienzo.lineTo(xFinal,yFinal); // cierra en la posicion
    lienzo.stroke();
    lienzo.closePath();  //funcion  ---> termina el dibujo
 }

function borrarLienzo()
{
  d.width=d.width;
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var xi,yi,xf,yf;
  var colorcito = document.getElementById("boton_color").value ; //se llama aqui al valor del color, dentro de la funcion y no antes

    for (var l = 0; l < lineas; l++)  // el for tambien ingresa a la funcion del evento
    //porque la variable el ambito de las variable lineas. Todo debe estar dentro de esta funcion
    {
      yi=espacio*l;
      xf=ancho-espacio*(l+1);
      dibujarLinea(colorcito, ancho, yi, xf, ancho);

      yi=espacio*l;
      xf=espacio*(l+1);
      dibujarLinea(colorcito, 0, yi, xf, ancho);

      yi=ancho-espacio*l;
      xf=espacio*l;
      dibujarLinea(colorcito, 0, yi, xf, 0);

      xi=ancho-espacio*(l+1);
      yf=ancho-espacio*l;
      dibujarLinea(colorcito, xi, 0, ancho, yf);

      yi=(espacio/2)*l;
      xf=(ancho/2)-(espacio/2)*(l+1);
      dibujarLinea(colorcito, (ancho/2), yi, xf, (ancho/2));

      xf=(espacio/2)*l;
      yi=(ancho/2)+(espacio/2)*(l+1)
      dibujarLinea(colorcito, (ancho/2), xf, yi, (ancho/2));

      xi=(ancho/2)+(espacio/2)*(l+1);
      yf=(ancho)-(espacio/2)*l;
      dibujarLinea(colorcito, xi, (ancho/2), (ancho/2), yf);

      xi=(ancho/2)-(espacio/2)*(l+1);
      yf=ancho-(espacio/2)*l;
      dibujarLinea(colorcito, xi, (ancho/2), (ancho/2), yf);
      console.log("Linea " + l);
     }

  dibujarLinea(colorcito,1,1,1,(ancho-1));
  dibujarLinea(colorcito,1,(ancho-1),(ancho-1),(ancho-1));
  dibujarLinea(colorcito,(ancho-1),0,(ancho-1),(ancho-1));
  dibujarLinea(colorcito,0,0,(ancho-1),0);
  dibujarLinea(colorcito,(ancho/2),0,(ancho/2),ancho);
  dibujarLinea(colorcito,0,(ancho/2),ancho,(ancho/2));


}

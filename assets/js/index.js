/*Dirección Parroquia*/
function findMe(){
    document.getElementById('map').innerHTML='<div class="map"><iframe class="church" src="https://maps.app.goo.gl/EvUYcH2RY3kLEgnB7" width="100%" height="410" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>';
}

/*Direcciòn Salon de Evento*/
function searchMe(){
    document.getElementById('maps').innerHTML='<div class="maps"><iframe class="terrace" src="https://maps.app.goo.gl/c9kiqxfG3JGREooD9" width="100%" height="410"  style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>';
}

/*Menú*/
$(".menu").on('click', function(){
  $(".buttons").toggle('slow');
}) 

/*Up Arrow*/
$(document).ready(function(){
  $('.cielo').click(function(){
    $('body, html').animate({
      scrollTop:'0px'
    }, 200);
  });
});

/*Temporizador*/
const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.getElementById('.sms-final');

/*Definimos fecha*/
const countdown = new Date('Oct 07, 2023 15:00:00').getTime();

let interval = setInterval(function(){
  /*Fecha Actual*/
  const now = new Date().getTime();

  /*Obtener distancia entre ambas fechas*/
  let distance = countdown - now;

  /*Calculos a Dìas-Horas-Minutos-Segundos*/
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / (1000));

  /*Mostrar resultados*/
  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $minutes.innerHTML = minutes;
  $seconds.innerHTML = ('0' + seconds).slice(-2);

  /*Cuando llegue a 0*/
  if(distance < 0){
    clearInterval(interval);
  }
}, 1000);

/*Dirección Parroquia*/
function findMe(){
    document.getElementById('map').innerHTML='<div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4091.965869834725!2d-98.97156941007296!3d19.30945089376871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d078375b801%3A0x5de4904faf165d44!2sParroquia%20de%20Santa%20Catarina%20Virgen%20y%20Martir!5e0!3m2!1ses!2smx!4v1695442708369!5m2!1ses!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>';
}

/*Direcciòn Salon de Evento*/
function searchMe(){
    document.getElementById('maps').innerHTML='<div class="maps"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.260027632371!2d-98.96629641910768!3d19.31451971479018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1da7ae98f955%3A0x1954dff388681ff2!2sTlalalcoyococ%2023%2C%20La%20Guadalupe%2C%20Tl%C3%A1huac%2C%2013060%20Santa%20Catarina%20Yecahuitzotl%2C%20CDMX!5e0!3m2!1ses!2smx!4v1695443309896!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>';
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

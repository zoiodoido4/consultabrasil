$(document).ready(function () {
  // Define o tempo em segundos (altere o valor conforme necessÃ¡rio)
  var tempoEmSegundos = 15;

  // Converte o tempo para milissegundos
  var tempoEmMilissegundos = tempoEmSegundos * 1000;

  // Remove a classe "d-none" da div2 apÃ³s o tempo especificado
  $("#rescue")
    .delay(tempoEmMilissegundos)
    .queue(function () {
      $(this).removeClass("d-none");
      $("#query").addClass("d-none");
      $(this).dequeue();
    });
});
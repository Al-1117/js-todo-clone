

$(document).ready(
  function(){


  // appendo il clone alla lista
  // Creo una lista di cose da fare in un array

  var toDoList = [
    'Fare la corsa al mattino',
    'Fare colazione abbondante',
    'Seguire le lezioni boolean',
    'Fare esercitazioni',
    'Preparare la cena',
    'Guardare un film'];

    // Creo un cliclo for con cui appendere gli elementi nella lista

    for (var i = 0; i < toDoList.length; i++) {
      // Creo un clone con cui popolare la lista ToDo
      var liClone = $('.template li').clone();
      var listElement = toDoList[i];
      liClone.text(listElement)
      $('.todo_list ul').append(liClone);

    }



   //
   // var listElement = $('.todo_list ul').append(liClone);
   // $(listElement).text('Fare colazione abbondante');
   // $(listElement).text('Seguire le lezioni boolean');
   // $(listElement).text('Fare esercitazioni');
   // $(listElement).text('Preparare la cena');
   // $(listElement).text('Guardare un film');











  }
)

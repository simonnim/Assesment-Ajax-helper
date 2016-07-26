$(document).ready(function(){

showForm();
addHorses();

})


function showForm() {
 $("#new-horse").on("click", function(event){
  $(this).parent().hide();
  event.preventDefault();

  $.ajax({
    //REMEMBER FUCKING COMMAS
    method: 'GET',
    url: '/horses/new'

 })
.done(function(serverResponse){
  $("#place-for-new-form").append(serverResponse);
  })
 })
}

function addHorses(){
  $("#place-for-new-form").on("submit","#horse-form", function(event){
    event.preventDefault();
    var formData = $('form').serialize();

    $.ajax({
      //REMEMBER FUCKING COMMAS
      method: 'POST',
      url: '/horses/new',
      data: formData
    })
    .done(function(serverResponse){
      console.log(serverResponse)
    $("#horse-list").append(serverResponse)
    $("#horse-form").hide();
    $("#new-horse").parent().show();
    // console.log(blob)
    })

  })
};

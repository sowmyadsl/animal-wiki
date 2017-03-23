$(document).ready(function() {
  $('.animalpanel').hide();
  $('form input').change(function() {
    var animal = $(this).val();
    if (animal === 'tiger') {
      $('#snake, #penguin').hide();
      $('#tiger').show();
    } else if(animal === 'snake') {
      $('#penguin, #tiger').hide();
      $('#snake').show();
    } else {
      $('#snake, #tiger').hide();
      $('#penguin').show();
    }
  });
});

// $(document).ready(function() {
//   $('form input').change(function() {
//     var animal = $(this).val();
//     $('.animalpanel').hide();
//     $('#' + animal).show();
//   });
// });

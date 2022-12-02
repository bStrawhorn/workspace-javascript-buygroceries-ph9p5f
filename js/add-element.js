/*
 * Practice on Elements
 */
// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#one').next().next().text('milk');
$('#two').next().text('milk');
// add a new element by clicking the plus sign
$('#todo').append('<li>candy</li>');
$('#todo').append('<li>bread</li>');
// console.log("right here")

// before and after are for siblings
// append and prepend are for parent

$('#add').click(addElement);

function addElement() {
  // add a new element
  // $('#todo').append('<li></li>');
  // add a input text box
  $('#todo').append('<li> <input type="text" id="input"> </li>')
  // whenever the user are done add the element
  $('#input').blur(function (){
    $(this).parent().addClass('cool');
    var userinput = $(this).val();
    $(this).parent().text(userinput);
  });
}

// bind click with the event handler
@@ -30,6 +41,15 @@ function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } else if($(this).hasClass('complete')) {
    $(this).removeClass('complete');
    $(this).addClass('cool');
  } else if($(this).hasClass('hot')) {
    $(this).removeClass('hot');
    $(this).addClass('complete');
  } else {
    $(this).removeClass('complete');
    $(this).addClass('hot');
  }
}

@@ -38,4 +58,5 @@ document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
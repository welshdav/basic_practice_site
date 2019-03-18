$(document).ready(() =>{
	$('.hint-box').on('click', () => {
    $('.hint').slideToggle(650); 
  }); 
  
  $('.wrong-answer-one').on('click', () => {
    $('wrong-text-one').fadeOut('fast');
    $('.frown').show(); 
  }); 
  
  $('.wrong-answer-tw0').on('click', () => {
    $('wrong-text-two').fadeOut('slow'); 
     $('.frown').show(); 
  }); 
  
  $('.wrong-answer-three').on('click', () => {
    $('wrong-text-three').fadeOut('2000'); 
     $('.frown').show(); 
  }); 
  
  $('.correct-answer').on('click', () => {
     $('.frown').hide(); 
     $('.smiley').show(); 
    $('wrong-text-one').fadeOut('2000'); 
    $('wrong-text-two').fadeOut('2000'); 
    $('wrong-text-three').fadeOut('2000')
  })
});

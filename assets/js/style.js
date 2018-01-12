$(document).ready(function () {
  //Menu
  let a = true;
  $('#btn-click').click(function () {
    if (a == true) {
      $('.menudt1').slideDown();
      a = false;
    }
    else {
      $('.menudt1').slideUp();
      a = true;
    }
  });

  //js cua da dang san pham
  
  $('.trai .dadang').hover(function(){
    $('.sndg').slideDown(100);
  },function(){
    $('.sndg').slideUp(100);
  })


  //

  //
})

//Login
$(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
}); $(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
}); $(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
}); $(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
});
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    }
    else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }
});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});

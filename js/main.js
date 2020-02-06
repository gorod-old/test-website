
setTimeout(function() {
    document.getElementById('object_1').style.display = 'block';
    document.getElementById('object_2').style.display = 'block';
    document.getElementById('object_3').style.display = 'block';
    document.getElementById('object_4').style.display = 'block';
    document.getElementById('object_5').style.display = 'block';
    document.getElementById('object_6').style.display = 'block';
    document.getElementById('object_7').style.display = 'block';
    document.getElementById('object_8').style.display = 'block';
}, 1000);
// loading disable
setTimeout(function() {
    document.getElementById('loading').style.display = 'none';
}, 2000);

// hover in button
$(document).ready(function () {
    $('button.animated' || 'a.animated').hover(
        function () {
            $(this).addClass('pulse'); // Добавляем класс bounce
        },
        function () {
            $(this).removeClass('pulse'); // Убираем класс
        }
    )
});



$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });

  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{enabled:true}
    // other options
  });
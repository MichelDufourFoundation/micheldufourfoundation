//MAKE EACH IMAGE CLICKABLE TO BE SEEN FULL SCREEN
$(window).on('load', function () {


	$('img').addClass('img-enlargeable').click(function() {

	  var src = $(this).attr('src');
	  var alt = $(this).attr('alt');
	  console.log(alt);
	  var modal;

	  function removeModal() {
	    modal.remove();
	    $('body').off('keyup.modal-close');
	  }
	  modal = $('<div>').css({
	    background: 'RGBA(255,255,255,.8) url(' + src + ') no-repeat top',
	    backgroundSize: 'auto calc(100vh - 4em)',
	    width: '100%',
	    height: '100%',
	    position: 'fixed',
	    zIndex: '10000',
	    top: '0',
	    left: '0',
	    cursor: 'zoom-out'
	  }).click(function() {
	    removeModal();
	  }).appendTo('body');
	  $('<div class="image_caption">'+alt+'</div>').appendTo(modal);
	  //handling ESC
	  $('body').on('keyup.modal-close', function(e) {
	    if (e.key === 'Escape') {
	      removeModal();
	    }
	  });
	});

});
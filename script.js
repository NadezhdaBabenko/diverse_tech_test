// focus on product
var details=document.getElementsByClassName('catalog__product__open-details');
for (i=0; i<details.length; i++){
    details[i].addEventListener('mouseover', function(){
        this.style.boxShadow='0px 0px 16px 1px rgba(68,68,68,1)';
        var catalog__product__hidden=this.getElementsByClassName('catalog__product__hidden-part');
        catalog__product__hidden[0].style.display='block';
        var catalog__product__mini=this.getElementsByClassName('catalog__product__mini');
        catalog__product__mini[0].style.visibility='visible';
        var catalog__product__info=this.getElementsByClassName('catalog__product__info');
        catalog__product__info[0].style.visibility='visible';
    });
}
for (i=0; i<details.length; i++){
    details[i].addEventListener('mouseout', function(){
        this.style.boxShadow='none';
        var catalog__product__hidden=this.getElementsByClassName('catalog__product__hidden-part');
        catalog__product__hidden[0].style.display='none';
        var catalog__product__mini=this.getElementsByClassName('catalog__product__mini');
        catalog__product__mini[0].style.visibility='hidden';
        var catalog__product__info=this.getElementsByClassName('catalog__product__info');
        catalog__product__info[0].style.visibility='hidden';
    });
}
// hidden footer
window.onload = function () {
    var footer_title=document.getElementsByClassName('footer-title');
    for (i=0; i < footer_title.length; i++) {
        footer_title[i].addEventListener('click', function() {
            if (window.matchMedia("(max-width: 420px)").matches) {
                var footer__hidden_info=this.parentElement.getElementsByClassName('footer__hidden-info');
                footer__hidden_info[0].classList.toggle('active');
          }
      })
    }
  }
// correct email inputs 
  $('#registration input[type=email]').on('blur', function () {
	let email = $(this).val();
	if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
      document.getElementById("registration__email").style.borderColor="#FF0000"
  } else {
    document.getElementById("registration__email").style.borderColor="#00da1d"
  }
});
$('#sign_in input[type=email]').on('blur', function () {
	let email = $(this).val();
	if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
      document.getElementById("sign_in__email").style.borderColor="#FF0000"
  } else {
    document.getElementById("sign_in__email").style.borderColor="#00da1d"
  }
});








let modal = document.getElementById('mypopup');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function(){
	modal.style.display = 'block';
}

span.onclick = function(){
	modal.style.display = 'none';
}

window.onclick = function(event){
	if(event.target == modal) {
		modal.style.display = 'none';
	}
};

$(function(){
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.nav-menu').slideToggle(400)
	})
});

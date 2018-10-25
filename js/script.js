//event pada saat link di klik
$('.page-scroll').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elementujuan = $(tujuan);
	$('body').scrollTop: elementujuan.offset().top;
	e.preventDefault();
});
$(function() {
var instagridItems='',
		searchString,
		searchUrl;
$('button#button').on('click', function(event) {
	event.preventDefault();
	searchString = $('#search').val().replace(/ /g, '_');
	searchUrl = 'https://api.instagram.com/v1/tags/'+ searchString + '/media/recent?client_id=fbee9f2910474c4e8375508626b6243e'

	if ($('ul li').length == 20){$('.listitem').remove()};
	// clear any old search results
	$('ul.flexcontainer').slideUp('fast');
	$('div.loading').fadeIn('fast');


	$.ajax({
	      method: 'GET',
	      url: searchUrl,
	      dataType: 'jsonp'
	    })
	 .done(function(data) {
	 // for (var i = 0; i < 20; i++)
	 $.each(data.data, function(key, value) {
	              //  instagridItems += '<li>';
	               instagridItems = '<li class="listitem"><div class="flexitem"><img class="mainpicture" src="' + value.images.standard_resolution.url + '">'+'<img class="profile-picture" src="' + value.user.profile_picture + '">' + '<div class="userwrap">' + '<span class="username">' + value.user.username + '</span>' + '<span class="social">' + '<i class="fa fa-comments"></i><p>' + value.comments.count + '&nbsp;&nbsp;&nbsp;</p><i class="fa fa-heart"></i><p>' + value.likes.count  + '</p></span>' +'</div>' + '</div></li>';


	   $('#initialitem').remove();
		 $('.flexcontainer').append(instagridItems);
		 $('div.loading').fadeOut('fast');
		 $('ul.flexcontainer').slideDown('fast');


 });



 });
 });
 });

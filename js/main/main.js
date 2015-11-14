$(function() {

var instagridItems='',
		searchString,
		searchUrl;

$('button#button').on('click', function(event) {
	//Main search function
	event.preventDefault();
	$('ul.flexcontainer').fadeOut('fast');
	$('div.loading').fadeIn('fast');
	//Hides the results, shows loader
	$('div.flexitem').addClass('magic');
	//Add class for formatting purposes
	searchString = $('#search').val().replace(/ /g, '_');
	searchUrl = 'https://api.instagram.com/v1/tags/'+ searchString + '/media/recent?client_id=fbee9f2910474c4e8375508626b6243e'
	//
	if ($('ul li').length >= 20){$('.listitem').remove()};
	// clear any old search results

	$.ajax({
	      method: 'GET',
	      url: searchUrl,
	      dataType: 'jsonp'
	    })
	 .done(function(data) {
		 	   $('#initialitem').remove();

	 $.each(data.data, function(key, value) {
	              var insta_length = value.user.username.length;


	              instagridItems = '<li class="listitem"><div class="flexitem"><img class="mainpicture" src="' + value.images.standard_resolution.url + '">'+'<img class="profile-picture" src="' + value.user.profile_picture + '">' + '<div class="userwrap">' + '<span class="username" id="'+ key + '">' + value.user.username + '</span>' + '<span class="social">' + '<i class="fa fa-comments"></i><p>' + value.comments.count + '&nbsp;&nbsp;&nbsp;</p><i class="fa fa-heart"></i><p>' + value.likes.count  + '</p></span>' +'</div>' + '</div></li>';

		 					 	$('.flexcontainer').append(instagridItems);

								if (insta_length >= 20){$('#'+ key).addClass('xxxl-name')}
								else if (insta_length >= 18 && insta_length < 20) { $('#'+ key).addClass('xxl-name') }
								else if (insta_length >= 13 && insta_length < 18) { $('#'+ key).addClass('xl-name') }
								else if (insta_length >= 10 && insta_length < 13) { $('#'+ key).addClass('lg-name') };



 });



 })
 .fail(function() {
	$('div.flexitem').removeClass('magic');
 	alert( "error" );
});
$('div.loading').fadeOut('fast');
$('ul.flexcontainer').fadeIn('slow');
 });

 });

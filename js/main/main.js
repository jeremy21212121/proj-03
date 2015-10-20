$(function() {
var instagridItems='',
		searchString,
		searchUrl;
$('button#button').on('click', function(event) {
	event.preventDefault();
	searchString = $('#search').val().replace(/ /g, '_');
	searchUrl = 'https://api.instagram.com/v1/tags/'+ searchString + '/media/recent?client_id=fbee9f2910474c4e8375508626b6243e'
$.ajax({
      method: 'GET',
      url: searchUrl,
      dataType: 'jsonp'
    })
 .done(function(data) {
 // for (var i = 0; i < 20; i++)
 $.each(data.data, function(key, value) {
              //  instagridItems += '<li>';
               instagridItems = '<div class="flexitem"><img src="' + value.images.standard_resolution.url + '">'+'<img src='+ value.user.profile_picture + '">' + '<span>' + value.user.username + '</span>' + '<span>' + value.comments.count value.likes.count </span>    '</div>';
              //  instagridItems += '</li>';

   $('#firstitem').remove();
	 $('.flexcontainer').append(instagridItems);
 });

// '<div><img src="'+ data.data[0].images.standard_resolution.url + '">'

 });
 });
 });

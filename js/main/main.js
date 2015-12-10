var instaPage = {};
var moreClicks = {};
moreClicks.count = 0;
var adjustedKey;
//global variables :(
$(function() {
    'use strict';
  	var instagridItems = '',
		searchString,
		searchUrl,
		instaUrl;

	$('button#more').toggle();

	 function keyAdjuster(key){
		    var countCorrector = moreClicks.count * 12;
		    adjustedKey = key + countCorrector;

		//Calculates var adjustedKey to allow use of instagridNameFormatter on 'Load More' results
	}

	function instagridNameFormatter(value, key) {
		    var insta_length = value.user.username.length;
		    keyAdjuster(key);
		    if ( $(window).width() >= 784){insta_length=insta_length*1.4}
		    else if ( $(window).width() <= 752){insta_length=insta_length/1.4;}
		    if (insta_length >= 23){$('#'+ adjustedKey ).addClass('xxxl-name')}
		    else if (insta_length >= 18 && insta_length < 23) { $('#'+ adjustedKey ).addClass('xxl-name')}
		    else if (insta_length >= 13 && insta_length < 18) { $('#'+ adjustedKey ).addClass('xl-name')}
		    else if (insta_length >= 10 && insta_length < 13) { $('#'+ adjustedKey ).addClass('lg-name');}
// complicated algorithm for determining username font size :)
		}


	function getInstagrid(instaUrl) {
		$.ajax({
					method: 'GET',
					url: instaUrl,
					dataType: 'jsonp'
				})
				.done(function(data) {
					instaPage.url = data.pagination.next_url;
							$('#initialitem').remove();
				   $.each(data.data, function(key, value) {
						 				 keyAdjuster(key);

										 instagridItems =
										 '<li class="listitem"><div class="flexitem"> <a href="#" data-featherlight="' + value.images.standard_resolution.url + '"><img class="mainpicture" src="'
										 + value.images.standard_resolution.url + '"></a>'
										 +'<a target="_blank" href="https://www.instagram.com/'+ value.user.username +'">'+'<img class="profile-picture" src="' + value.user.profile_picture + '"></a>'
										 +'<div class="userwrap">'
										 +'<span class="username" id="' + adjustedKey + '">' +'<a target="_blank" href="https://www.instagram.com/'+ value.user.username +'">'+ value.user.username + '</a>' + '</span>'
										 +'<span class="social">' + '<a target="_blank" href="'+ value.link + '">' + '<i class="fa fa-comments"></i>'
										 +'<p>' + value.comments.count + '&nbsp;&nbsp;&nbsp;</p>'
										 +'<i class="fa fa-heart"></i><p>' + value.likes.count  + '</p></a></span>' +'</div>' +'</div></li>';


										 $('.flexcontainer').append(instagridItems);
										 instagridNameFormatter(value, key);
			       });

			})
			.fail(function() {
			 $('div.flexitem').removeClass('magic');
			 alert( "error" );
		 })

		  .always(function(){});
// gets the data from instagram, formats it and spits out the HTML
	}


	$('button#button').on('click', function(event) {
		//Main search function
				event.preventDefault();
				$('ul.flexcontainer').toggle('fast');
				$('div.loading').fadeIn('fast');
				//Hides the results, shows loader

				$('div.flexitem').addClass('magic');
				//Add class for formatting purposes

				searchString = $('#search').val().replace(/ /g, '_');
				searchUrl = 'https://api.instagram.com/v1/tags/'+ searchString + '/media/recent?client_id=fbee9f2910474c4e8375508626b6243e&count=12'
				//
				if ($('ul li').length >= 20){$('.listitem').remove()};
				// clear any old search results
				getInstagrid(searchUrl);


				$('div.loading').fadeOut('fast');


				$('ul.flexcontainer').delay(600).fadeIn('slow');
				$('button#more').delay(800).fadeIn('slow');
	 });



	 $('button#more').on('click', function(event) {
	 	//pagination
	 			event.preventDefault();
				moreClicks.count++;
				$('ul.flexcontainer').fadeOut('fast');



	 			getInstagrid(instaPage.url);

				$('ul.flexcontainer').fadeIn('slow');

	  });


 });

(function ($, Drupal, drupalSettings) {

	'use strict';

	$(document).ready(function () {
		// Default view hide slider and show pig pictures.
		$('.block-views-blockin-picture-in-pictures-slider-style').css('display', 'none');
		$('#in-pictures-list').addClass('active');
		// Listen to click list tab.
		$('#in-pictures-list').on('click', function () {
			$('.block-views-blockin-picture-in-pictures-big-picture-style').css('display', 'block');
			$('.block-views-blockin-picture-in-pictures-slider-style').css('display', 'none');
			$(this).addClass('active');
			$('#in-pictures-slider').removeClass('active');
			return false;
		});
		// Listen to click slider tab.
		$('#in-pictures-slider').on('click', function () {
			$('.block-views-blockin-picture-in-pictures-big-picture-style').css('display', 'none');
			$('.block-views-blockin-picture-in-pictures-slider-style').css('display', 'block');
			$(this).addClass('active');
			$('#in-pictures-list').removeClass('active');
			return false;
		});
	});
})(jQuery, Drupal, drupalSettings);
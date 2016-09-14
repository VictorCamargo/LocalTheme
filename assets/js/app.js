var ltApp = angular.module('ltApp', []);

ltApp.controller('ProjectListCtrl', function($scope, $filter, $timeout) {

	var orderBy = $filter('orderBy');
	$scope.projetos = list;

	$scope.order = function(predicate, reverse) {
		$scope.projetos = orderBy($scope.projetos, predicate, reverse);
	};
	$scope.order('-date_format', false);

	$timeout(function() {
		$('body').fadeIn(300, function() {
			$('#search').focus();
		});

		$(document).keydown(function(e) {

			if (e.keyCode == 27) {
				$scope.search = '';
				$('.list a.active').removeClass('active')
				$('.list a:first-child').removeClass('active');
			} else if (e.keyCode == 13) {
				if ($scope.filteredItems.length = 0) return false;

				if ($('nav a.active')) {
					window.location = $('nav a.active').attr('href');
				} else {
					window.location = $('nav a:visible').eq(0).attr('href');
				}
			}

			if (e.keyCode >= 48 && e.keyCode <= 90) {
				console.log(e);
				if (!$('#search').is(":focus")) {
					$('#search').focus();
				}
			}

			// Setas
			if (e.keyCode == 39) {
				if (!$('.list a.active').is(':last-child')) {
					console.log('this');
					$('.list a.active').removeClass('active').next().addClass('active');
				}
			}
			if (e.keyCode == 37) {
				if (!$('.list a.active').is(':first-child')) {
					$('.list a.active').removeClass('active').prev().addClass('active');
				}
			}

			// Arrow UP
			if (e.keyCode == 38) {
				$index = $('.list a.active').index() - 3;
				if ($index >= 0) {
					$('.list a').removeClass('active').eq($index).addClass('active');
				}
			}

			// Arrow Down
			if (e.keyCode == 40) {
				$index = $('.list a.active').index() + 3;
				if ($index < $scope.filteredItems.length) {
					$('.list a').removeClass('active').eq($index).addClass('active');
				}
			}

		})
	});


});
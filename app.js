var myApp = angular.module("myApp", []);

myApp.controller("HeaderCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.logo = "imgs/coolwebcreations_logo.png";
	$scope.appDetails.title = "Cool Web Creations";
});

myApp.controller("ShowsCtrl", function($scope) {
	$scope.shows = [
		{
			poster: "adultery.jpeg",
			showdate: "08.05.2016",
			director: "George Lucas",
			actors: "Harrison Ford, Emma Thomson",
			country: "USA",
			year: "2016",
			rental: "20th Fox",
			age: "12",
			length: "95",
			movietitle: "Adultery",
			moviecontent: "Lorem ipsum sit amet",
			moviecomment: "Toller Film, muss man sehen",
		},
		{
			poster: "adultery.jpeg",
			showdate: "08.05.2016",
			director: "George Lucas",
			actors: "Harrison Ford, Emma Thomson",
			country: "USA",
			year: "2016",
			rental: "20th Fox",
			age: "12",
			length: "95",
			movietitle: "Adultery",
			moviecontent: "Lorem ipsum sit amet",
			moviecomment: "Toller Film, muss man sehen",
		},
		{
			poster: "adultery.jpeg",
			showdate: "08.05.2016",
			director: "George Lucas",
			actors: "Harrison Ford, Emma Thomson",
			country: "USA",
			year: "2016",
			rental: "20th Fox",
			age: "12",
			length: "95",
			movietitle: "Adultery",
			moviecontent: "Lorem ipsum sit amet",
			moviecomment: "Toller Film, muss man sehen",
		},
		{
			poster: "adultery.jpeg",
			showdate: "08.05.2016",
			director: "George Lucas",
			actors: "Harrison Ford, Emma Thomson",
			country: "USA",
			year: "2016",
			rental: "20th Fox",
			age: "12",
			length: "95",
			movietitle: "Adultery",
			moviecontent: "Lorem ipsum sit amet",
			moviecomment: "Toller Film, muss man sehen",
		},
	];
	
	$scope.addToReservation = function(show) {
		console.log("add to reservation: ", show);
	}
});
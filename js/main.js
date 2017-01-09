var app = angular.module("JuegoWebsite", []);

app.controller('JuegoController', function($scope, $rootScope) {
	$scope.arizona = [
		{leagueName:'Arizona', age:25, abrevation:'AZ'},
		{name:"Arizona Women's Soccer League "},
		{name:"Fair Play USA Soccer League "},
		{name:"Liga Coed de Tucson "},
		{name:"Liga Hispana La Union "},
		{name:"Liga Hispana La Union Infantil"}
    ];
    $scope.arkansas = [
		{leagueName:'arkansas', age:25, abrevation:'AR'},
		{name:"Liga de Fútbol MexArk"}
    ];
    $scope.california = [
		{leagueName:'california', age:25, abrevation:'CA'},
		{name:"American Union Soccer League"},
		{name:"Bakersville Soccer League"},
		{name:"Central Valley Youth Soccer League"},
		{name:"Contra Costa Futsal"},
		{name:"Kickers Indoor Soccer"},
		{name:"McCulloch Stars Soccer League"},
		{name:"Wilmington Interclub"},
		{name:"Winchester Soccer League de San Jose"}
    ];
    $scope.delaware = [
		{leagueName:'delaware', age:25, abrevation:'DE'},
		{name:"AFL"},
		{name:"La Bombonera Soccer League"},
		{name:"Liga Atexcac"},
		{name:"Liga Nueva Acción de Futbol Siete"},
		{name:"Liga Premier Infantil"}
    ];

    
	
	
	
	
	
	
	

});






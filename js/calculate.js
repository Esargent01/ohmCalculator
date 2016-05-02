var calculator = angular.module('calculator', []);

calculator.controller('calcCtrl', function ($scope){
	$scope.colorBands = {
		"color" : [
			{
				"band" : [{
					"name" : "Black",
					"sigFig" : "0",
					"sigFig2" : "0",
					"multiplier": 1,
					"tolerance": "--",
					"background": "black"
				}]
			},
			{
				"band" : [{
					"name" : "Brown",
					"sigFig": "1",
					"sigFig2": "1",
					"multiplier": 10,
					"tolerance": "1%",
					"background": "brown"
				}]
			},
			{
				"band" : [{
					"name" : "Red",
					"sigFig": "2",
					"sigFig2": "2",
					"multiplier": 100,
					"tolerance": "2%",
					"background": "#FF0033"
				}]
			},
			{
				"band" : [{
					"name" : "Orange",
					"sigFig": "3",
					"sigFig2": "3",
					"multiplier": 1000,
					"tolerance": "--",
					"background": "#FF9933"
				}]
			},
			{
				"band" : [{
					"name" : "Yellow",
					"sigFig": "4",
					"sigFig2": "4",
					"multiplier": 10000,
					"tolerance": "--",
					"background": "#FFFF66"
				}]
			},
			{
				"band" : [{
					"name" : "Green",
					"sigFig": "5",
					"sigFig2": "5",
					"multiplier": 100000,
					"tolerance": "0.5%",
					"background": "#33CC66"
				}]
			},
			{
				"band" : [{
					"name" : "Blue",
					"sigFig": "6",
					"sigFig2": "6",
					"multiplier": 1000000,
					"tolerance": "0.25%",
					"background": "#3366FF"
				}]
			},
			{
				"band" : [{
					"name" : "Violet",
					"sigFig": "7",
					"sigFig2": "7",
					"multiplier": 10000000,
					"tolerance": "0.1%",
					"background": "#9933CC"
				}]
			},
			{
				"band" : [{
					"name" : "Gray",
					"sigFig": "8",
					"sigFig2": "8",
					"multiplier": 100000000,
					"tolerance": "0.05%",
					"background": "#606060"
				}]
			},
			{
				"band" : [{
					"name" : "White",
					"sigFig": "9",
					"sigFig2": "9",
					"multiplier": 1000000000,
					"tolerance": "--",
					"background": "#FFFFFF"
				}]
			},
			{
				"band" : [{
					"name" : "Gold",
					"sigFig": "--",
					"sigFig2": "--",
					"multiplier": 0.1,
					"tolerance": "5%",
					"background": "#FFD700"
				}]
			},
			{
				"band" : [{
					"name" : "Silver",
					"sigFig": "--",
					"sigFig2": "--",
					"multiplier": 0.01,
					"tolerance": "10%",
					"background": "#C0C0C0"
				}]
			},
		]
	};

	$scope.bandData = {};
	$scope.ohms = function(){
		return parseInt($scope.bandData.sigFig + $scope.bandData.sigFig2) * $scope.bandData.multiplier;
	}
});
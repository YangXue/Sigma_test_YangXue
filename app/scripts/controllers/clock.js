'use strict';
angular.module('worldClocks').controller('clockCtrl', function($scope,$interval,$filter) {

	$scope.torontoTimeInputPlaceHolder = "16:25:51";
	$scope.londonTimeInputPlaceHolder = "-6";
	$scope.sydneyTimeInputPlaceHolder = "-13";
	$scope.torontoTime;
	$scope.londonTimeDifference = "6";
	$scope.sydneyTimeDifference = "13";
	var count = 0;

	$scope.setTorontoTime = function (){
		$scope.torontoTimeArray = $scope.torontoTime.split(":").map(Number);
		$scope.setSydneyTime();
		$scope.setLondonTime();
		if($scope.torontoTimeArray){
			$scope.torontoTimeString = clock($scope.torontoTimeArray);
		}
		if($scope.londonTimeArray) {
			$scope.londonTimeString = clock($scope.londonTimeArray);
		}
		if($scope.sydneyTimeArray) {
			$scope.sydneyTimeString = clock($scope.sydneyTimeArray);
		}
	};

	$scope.setSydneyTime = function (){
		if($scope.sydneyTimeDifferenceBuffer &&0<=Number($scope.sydneyTimeDifferenceBuffer)<24){
			$scope.sydneyTimeDifference = scope.sydneyTimeDifferenceBuffer;
		};
		if($scope.torontoTimeArray){
			$scope.sydneyTimeArray = $scope.torontoTimeArray.slice();
			$scope.sydneyTimeArray[0] = $scope.sydneyTimeArray[0] + Number($scope.sydneyTimeDifference)
			if($scope.sydneyTimeArray[0]<0){
				$scope.sydneyTimeArray[0] = $scope.sydneyTimeArray[0] +24;
			}
		}
	}

	$scope.setLondonTime = function (){
		if($scope.londonTimeDifferenceBuffer &&0<=Number($scope.londonTimeDifferenceBuffer)<24){
			$scope.londonTimeDifference = scope.londonTimeDifferenceBuffer;
		};
		if($scope.torontoTimeArray){
			$scope.londonTimeArray = $scope.torontoTimeArray.slice();
			$scope.londonTimeArray[0] = $scope.londonTimeArray[0] + Number($scope.londonTimeDifference);
			if($scope.londonTimeArray[0]<0){
				$scope.londonimeArray[0] = $scope.londonTimeArray[0] +24;
			}
		}
	}

	var manageTimeString = function (timeArray) {
		var bufferArray = [];
		for(var index in timeArray){
			if(timeArray[index]<9){
				bufferArray.push("0"+timeArray[index].toString())
			}
			else{
				bufferArray.push(timeArray[index].toString())
			}
		}
		if(bufferArray[0]){
			return bufferArray[0]+':'+bufferArray[1]+':'+bufferArray[2];
		}
		else {
			return "";
		}
	}

	var clock = function(timeArray){
		var buffer;
		if(timeArray[2]<55) {
			timeArray[2] = timeArray[2] + 5;
		}
		else if(timeArray[1]<55){
			timeArray[2] = timeArray[2] - 55;
			timeArray[1] = timeArray[1] + 5;
		}
		else{
			timeArray[2] = timeArray[2] - 55;
			timeArray[1] = timeArray[1] - 55;
			timeArray[0] = timeArray[0] + 1;
		}
		buffer = manageTimeString(timeArray);
	
		return buffer;
	}

	$scope.torontoTimeStringBuffer = $filter('date')(new Date(), 'hh:mm:ss');
	$scope.torontoTimeArray = $scope.torontoTimeStringBuffer.split(":").map(Number);
	$scope.setSydneyTime();
	$scope.setLondonTime();
	if($scope.torontoTimeArray){
		$scope.torontoTimeString = clock($scope.torontoTimeArray);
	}
	if($scope.londonTimeArray) {
		$scope.londonTimeString = clock($scope.londonTimeArray);
	}
	if($scope.sydneyTimeArray) {
		$scope.sydneyTimeString = clock($scope.sydneyTimeArray);
	}



	$interval(function(){
		if($scope.torontoTimeArray){
			$scope.torontoTimeString = clock($scope.torontoTimeArray);
		}
		if($scope.londonTimeArray) {
			$scope.londonTimeString = clock($scope.londonTimeArray);
		}
		if($scope.sydneyTimeArray) {
			$scope.sydneyTimeString = clock($scope.sydneyTimeArray);
		}
	},5000);
});
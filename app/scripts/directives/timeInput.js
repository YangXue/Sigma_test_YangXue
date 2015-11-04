'use strict';

angular.module('worldClocks').directive('timeInput',function(){
	return {
		restrict: 'E',
		templateUrl: 'views/directive_templates/timeInput.html',
		scope: {
			placeHolderText: '=',
			setTime: '=',
			labelText: '=',
			onClickFunction: '=',
		}

	}
});
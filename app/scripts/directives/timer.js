'use strict';

angular.module('worldClocks').directive('timer',function(){
	return {
		restrict: 'E',
		templateUrl: 'views/directive_templates/timer.html',
		scope: {
			time: '=',
			labelText: '=',
			classText: '=',
		},
		link: function(scope){
	
		}

	}
});
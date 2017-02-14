angular.module('minhasDiretivas',[]).
directive('meuPainel',function(){
	var ddo = {};

	ddo.restrict = 'AE';

	ddo.scope = {
		titulo: '@'
	};


	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/minhas-diretivas.html'
		

       return ddo;


});
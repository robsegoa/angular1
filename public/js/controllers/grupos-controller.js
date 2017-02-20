angular.module('alurapic').controller('GruposController', function($scope, $http){
	//caso NÃO queira q a validação 
	//seja disparada automaticamente
	//$scope.formulario.$setPristine();

	$scope.grupos = [];

	$http.get('v1/grupos')
	.success(function(grupos){
		$scope.grupos = grupos;

	})
	.error(function(erro){
		console.log(erro);
	});
});;
 angular.module('alurapic').controller('FotosController', function($scope, /*$http,*/recursoFoto/*, $resource*/) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	//FOI COMENTADO POR ESTAR VINDO DOS MEUS-SERVICOS.JS
    //var recursoFoto = $resource('v1/fotos/:fotoId');


	//esse código faz o get
	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	},function(erro){
		console.log(erro);
	});


	/*$http.get('/v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});*/

	$scope.remover = function(foto){
		//console.log(foto);

		recursoFoto.delete({fotoId: foto._id},function(){

			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto,1); 
			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso';
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;

		});

		/*$http.delete('v1/fotos/'+ foto._id)
		.success(function(){
			
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto,1); 
			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso';

			//console.log('Foto'+ foto.titulo + ' foi removida com sucesso');
		
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;


			//console.log('Não foi possível remover a foto' + foto.titulo);
		});*/
	};

});
angular.module('alurapic').
controller('FotoController',function($scope, /*$http,*/recursoFoto, $routeParams){
	
	$scope.foto = {};
	$scope.mensagem = '';

	
	
	if($routeParams.fotoId){
		
		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
			$scope.foto = foto;
			}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a foto';
			});



		/*$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi Possível obter a foto';
		});*/
	}


	//$scope.exibe= false;

	$scope.submeter= function(){
		if($scope.formulario.$valid){
			if($scope.foto._id){
				recursoFoto.update({fotoId: $scope.foto_id}, $scope.foto, function(){
					$scope.mensagem = 'Foto' + $scope.foto.titulo  + 'Alterada com sucesso';
				}, function (erro){
					console.log(erro);
					$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;

				});
			}else{
				recursoFoto.save($scope.foto, function(){
					$scope.foto={};
					$scope.mensagem = 'Foto incluida com sucesso'

					console.log('foto cadastrada com sucesso');
				},function(erro){
					console.log(erro);
					$scope.mensagem = 'Não foi Possível incluir a foto'
				});
			}

			
		}	

		console.log($scope.foto);

	};

});
/*				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function(){
					$scope.mensagem = 'Foto' + $scope.foto.titulo  + 'Alterada com sucesso';
				})
				.error(function(erro){
					console.log(erro);
					$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
				});
			}else{
				$http.post('v1/fotos',$scope.foto)
				.success(function(){
				$scope.foto={};
				$scope.mensagem = 'Foto incluida com sucesso'

				console.log('foto cadastrada com sucesso');

				})
				.error(function(erro){
				$scope.mensagem = 'Não foi Possível incluir a foto'


				console.log(erro);
				});	
			}

			
		}
		





		console.log($scope.foto);
	};

});*/
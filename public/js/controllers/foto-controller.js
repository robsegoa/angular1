angular.module('alurapic').
controller('FotoController',function($scope, /*$http,*/cadastroDeFotos, recursoFoto, $routeParams){
	
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
			
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) $scope.foto = {};
			})
			.catch(function(dados){
				$scope.mensagem = dados.mensagem;
			});

			
		};	

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
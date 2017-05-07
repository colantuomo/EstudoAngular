angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, operadoras, serialGenerator){
    $scope.app = "Lista telefonica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    $scope.cores = [
        {cor:"yellow"},
        {cor:"blue"},
        {cor:"red"}
    ];
    
    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data){
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        carregarContatos();
        });

    }
    $scope.apagarContatos = function (contatos){
        $scope.contatos = contatos.filter(function (contato){
            if (!contato.selecionado){
              console.log(contato);
              return contato;
            }
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function(campo){
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

});

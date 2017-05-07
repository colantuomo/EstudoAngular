angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, serialGenerator, operadoras, $location){
    $scope.app = "Lista telefonica";
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
        $location.path("/contatos");
        });
    };

});

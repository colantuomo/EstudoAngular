angular.module("listaTelefonica").filter("name", function(){
    return function(input){
        var listaDeNome = input.split(" ");
        var listaDeNomeFormatada = listaDeNome.map(function(nome) {
            return nome.charAt(0).toUpperCase() + nome.subString(1).toLowerCase();
        });
        return listaDeNomeFormatada.join(" ");
    };
});
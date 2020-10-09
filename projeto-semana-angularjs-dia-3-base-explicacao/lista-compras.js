(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);

    angular.module('listaTarefasApp')
    .filter('capitalize', function (){
        return function(input) {return input.charAt(0).toUpperCase() + input.substring(1);}
    })


    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope'];

    function listaTarefasController(root) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        root.listaMensagens = [{ text: 'TESTE MENSAGEM ..teste', tipo: 'success' },];
        vm.teste = 'teste';
    
        /*    { text: 'Mensagem Aqui', tipo: 'info' },
            { text: 'Mensagem Aqui', tipo: 'success' },
            { text: 'Mensagem Aqui', tipo: 'warning' },
        ]; */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.alerta = alerta;

        function alerta(){
            vm.login.username = vm.login.username.toUpperCase();
        }


        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})(angular);
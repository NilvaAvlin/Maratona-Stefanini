(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);


    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope'];

    function listaTarefasController($rootScope) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        $rootScope.listaMensagens = [
            { text: 'Mensagem Aqui', tipo: 'danger' },
            { text: 'Mensagem Aqui', tipo: 'info' },
            { text: 'Mensagem Aqui', tipo: 'success' },
            { text: 'Mensagem Aqui', tipo: 'warning' },
        ]; 

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */


        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})(angular);
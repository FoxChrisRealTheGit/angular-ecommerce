angular.module("ecommerce").component('product', {
    // template:'Hi'
    templateUrl: 'app/components/product/product.html',
    controller: function (cartSrvc) {
      
    },
    controllerAs: 'pd',
    bindings: {
        product: '<',   //< One way binding, does not change parents information, only local scope
                        // = Two way binding
                        // @ String binding
                        // & action binding
        buttonLabel: '@',
        buttonAction: '&',
    }
})
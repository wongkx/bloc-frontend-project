(function() {
    function ModalCtrl($uibModalInstance, Room) {
        var modal = this;
       
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        modal.create = function () {
            Room.create(modal.newRoom);
            $uibModalInstance.close();
        }; 
        
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl',['$uibModalInstance','Room', ModalCtrl])
})();
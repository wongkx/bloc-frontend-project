(function() {
    function ModalCtrl($uibModalInstance, Room, $cookies) {
        var modal = this;
       
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        modal.create = function () {
            Room.create(modal.newRoom);
            $uibModalInstance.close();
        }; 
        
        modal.createUser = function () {
            $cookies.put('blocChatCurrentUser', modal.newUser.username);
            $uibModalInstance.close();     
        }
        
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl',['$uibModalInstance','Room', '$cookies', ModalCtrl])
})();
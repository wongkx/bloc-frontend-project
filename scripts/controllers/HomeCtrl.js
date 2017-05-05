(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        
        home.open = function(){
            var roomModalInstance = $uibModal.open({
                size: 'sm',
                templateUrl: '/pages/modal.html',
                controller: 'ModalCtrl as modal'
            });
            
        }
        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
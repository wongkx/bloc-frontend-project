(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        home.roomName = null;
        home.roomClicked = false; 
        
        home.open = function(){
            var roomModalInstance = $uibModal.open({
                size: 'sm',
                templateUrl: '/pages/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        
        home.getByRoomId = function(roomId) {
            this.messages = [];
            this.roomClicked = true;
            this.messages = Message.getByRoomId(roomId);
            this.roomName = Room.getRoomName(roomId);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
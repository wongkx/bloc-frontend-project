(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var home = this;
        home.rooms = Room.all;
        home.roomName = null;
        home.roomClicked = false; 
        home.hasUser = false;
                
        home.open = function(){
            var roomModalInstance = $uibModal.open({
                size: 'sm',
                templateUrl: '/pages/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        
        home.getUserName = function(){
            console.log('hasuser? '+ home.hasUser);
            if ($cookies.get('blocChatCurrentUser')) {
                this.hasUser = true;
            }
            return $cookies.get('blocChatCurrentUser');
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
        .controller('HomeCtrl', ['Room', 'Message','$uibModal', '$cookies', HomeCtrl]);
})();
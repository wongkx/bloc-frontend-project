(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, $rootScope) {
        var home = this;
        home.rooms = Room.all;
        home.roomName = null;
        home.roomClicked = false; 
        home.hasUser = false;
        home.message = Message;
        var room_Id;
        home.messages;
                
        home.open = function(){
            var roomModalInstance = $uibModal.open({
                size: 'sm',
                templateUrl: '/pages/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        
        home.getUserName = function(){
            if ($cookies.get('blocChatCurrentUser')) {
                this.hasUser = true;
            }
            return $cookies.get('blocChatCurrentUser');
        };
        
        home.getByRoomId = function(roomId) {
            room_Id = roomId;
            this.messages = [];
            this.roomClicked = true;
            this.messages = Message.getByRoomId(roomId);
            this.roomName = Room.getRoomName(roomId);
        };
        
        home.sendMessage = function(content) {
            Message.send(content, room_Id);
            this.messages = Message.getByRoomId(room_Id);
        };
        
        home.removeUser = function() {
            $cookies.remove('blocChatCurrentUser');
            this.hasUser = false;
            $rootScope.openModal();
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal', '$cookies', '$rootScope', HomeCtrl]);
})();
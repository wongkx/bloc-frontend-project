(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref('messages');
        var messages = $firebaseArray(ref);
        
        return {
            all: messages,
            getByRoomId: function(roomId) {
                var Message = [];
                ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                         Message.push(childSnapshot.val());
                    });
                });
                return Message;
            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
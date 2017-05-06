(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref('messages');
        var messages = $firebaseArray(ref);
        
        return {
            all: messages,
            getByRoomId: function(roomId) {
                var Messag = [];
                ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                         Messag.push(childSnapshot.val());
                    });
                });
                return Messag;
            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
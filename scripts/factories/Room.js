(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        
        return {
            all: rooms,
            getRoomName: function(roomId) {
                var roomName;
                ref.orderByKey().equalTo(roomId).on('value', function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        roomName = childSnapshot.child('name').val();
                    });
                });
                return roomName;
            },
            create: function(room) {
                rooms.$add(room);
            }
        }
    }
    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray',Room])
})();
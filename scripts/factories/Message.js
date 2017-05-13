(function() {
    function Message($firebaseArray, $cookies) {
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
            },
            send: function(content, room_Id){
                var currentUser = $cookies.get('blocChatCurrentUser');
                var date = new Date();
                var dateStr = date.getMonth()+1 + '-' + date.getDate() + '-' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                messages.$add(messageInfo);
                
                var messageInfo = {
                    userName: currentUser,
                    roomId: room_Id,
                    sentAt: dateStr,
                    content: content
                };
                ref.push(messageInfo);
            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
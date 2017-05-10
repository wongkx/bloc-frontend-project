(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
  
    if (!this.currentUser || this.currentUser === '') {
        var userModal = $uibModal.open({
          size: 'sm',
          templateUrl: '/pages/createUser.html',
          controller: 'ModalCtrl as modal',
            backdrop: 'static',
            keyboard: false
      });
        
    } 
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
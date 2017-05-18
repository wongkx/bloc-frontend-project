(function() {
  function BlocChatCookies($cookies, $uibModal, $rootScope) {
    
    
    $rootScope.openModal = function(){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var userModal = $uibModal.open({
              size: 'sm',
              templateUrl: '/pages/createUser.html',
              controller: 'ModalCtrl as modal',
                backdrop: 'static',
                keyboard: false
          });

        }
    }
    $rootScope.openModal();
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope', BlocChatCookies]);
})();
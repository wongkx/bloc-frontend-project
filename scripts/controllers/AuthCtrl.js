(function() {
    function AuthCtrl($scope, $firebaseAuth, $uibModalInstance, $uibModal, $cookies) {
        var auth = this;
        $scope.authObj = $firebaseAuth();
        var firebaseUser = $scope.authObj.$getAuth();
        var _error;
        auth.hasError = false;

        /**
         * @function createUser
         * @desc if createUser fails, shows the reason why
         */
        auth.createUser = function () {
            this.hasError = false;
            $scope.authObj.$createUserWithEmailAndPassword(auth.user.email, auth.user.password).then(function(firebaseUser) {
                console.log("user created: "+firebaseUser.uid);
                $cookies.put('blocChatCurrentUser', firebaseUser.email);
                $uibModalInstance.close();
            }).catch(function(error) {
                auth._error = error;
            })
            console.log("Can't create user: "+ auth._error);
            this.hasError = true;
        };
        /**
         * @function login
         * @desc if login fails, shows the reason why
         */
        auth.login = function() {
            this.hasError = false;
            $scope.authObj.$signInWithEmailAndPassword(auth.user.email, auth.user.password).then(function(firebaseUser) {
                $cookies.put('blocChatCurrentUser', firebaseUser.email);
                $uibModalInstance.close();
            }).catch(function(error) {
                auth._error = error;
            });
            console.log("Auth failed: "+ auth._error);
            this.hasError = true;
        };
        /**
         * @function createUserModal
         * @desc close the login modal and open the createUser modal. Without this, it doesn't know how to change from the 'home' state to the 'auth' state
         */
        auth.createUserModal = function() {
            $uibModalInstance.close();
            $uibModal.open({
                size: 'sm',
                templateUrl: '/pages/createUser.html',
                controller: 'AuthCtrl as auth',
                backdrop: 'static',
                keyboard: false
            });
        };
        /**
         * @function loginModal
         * @desc close the login modal and open the login modal. Without this, it doesn't know how to change from the 'home' state to the 'auth' state
         */
        auth.loginModal = function(){
            $uibModalInstance.close();
            $uibModal.open({
              size: 'sm',
              templateUrl: '/pages/login.html',
              controller: 'AuthCtrl as auth',
                backdrop: 'static',
                keyboard: false
          });

        }
    }
    angular
        .module('blocChat')
        .controller('AuthCtrl',['$scope', '$firebaseAuth', '$uibModalInstance', '$uibModal', '$cookies', AuthCtrl])
})();
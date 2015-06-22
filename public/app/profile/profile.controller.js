(function() {
    'use strict';

    angular
        .module('entic')
        .controller('ProfileCtrl', ProfileCtrl);

    /** @ngInject */
    function ProfileCtrl($mdToast, ProfileService) {
        var that = this;
        activate();

        function activate() {
            ProfileService.get().$promise.then(function(user) {
                that.user = user;
            });
        }

        /**
         * Update user's profile information.
         */
        this.updateProfile = function() {
            this.user.$update()
                .then(function() {
                    showDefaultToast('Profile has been updated');
                })
                .catch(function(response) {
                    showDefaultToast(response.data.message);
                });
        };

        function showDefaultToast(message) {
            $mdToast.show(
                $mdToast.simple()
                    .content(message)
                    .position('bottom right')
                    .hideDelay(3000)
            );
        }

    }
})();
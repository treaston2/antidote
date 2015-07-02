(function() {
    'use strict';

    angular
        .module('antidote')
        .controller('ProfileCtrl', ProfileCtrl);

    /** @ngInject */
    function ProfileCtrl($mdToast, ProfileService) {
        var self = this;
        activate();

        function activate() {
            ProfileService.get().$promise.then(function(user) {
                self.user = user;
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
                    .position('top right')
                    .hideDelay(3000)
            );
        }

    }
})();

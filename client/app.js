angular.module("app", ["ngMeteor"])

Meteor.startup(function() {
  angular.bootstrap(document, ['app']);
});

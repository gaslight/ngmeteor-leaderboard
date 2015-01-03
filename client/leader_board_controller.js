angular.module("app").controller("LeaderBoardController", ["$scope", "$collection",  function($scope, $collection) {

  $scope.selected = {};

  $collection(Players).bind($scope, 'players');

  $scope.isSelected = function(player) {
    return this.selected.player == player;
  };

  $scope.selectPlayer = function(player) {
    this.selected.player = player;
  };

  $scope.awardPoints = function() {
    this.selected.player.score = this.selected.player.score + 5;
    this.players.save(this.selected.player);
  }
}]);

angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $ionicModal) {
  $scope.tasks = [];

  // Task Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $ionicModal.fromTemplateUrl('score-modal.html', function(modal) {
    $scope.scoreModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title,
      done:false
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  $scope.count = 0;
  $scope.remove = function(task) {
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index, 1);
    $scope.count = $scope.count + 1;
  };

  $scope.seeScore = function(){
    $scope.scoreModal.show();
  };

  $scope.closeScore = function(){
    $scope.scoreModal.hide();
  };
});

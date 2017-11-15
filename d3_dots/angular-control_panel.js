controlPanel = angular
.module("control_panel", [])

.controller(
"control_panel_controller",
function($scope) {

	$scope.parameters = parameters

	$scope.$watch (
	"parameters",
	() =>
	documentAllLoaded && loop(),
	true
	)
})

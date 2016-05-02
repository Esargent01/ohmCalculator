describe('ohm Calculator', function() {

beforeEach(module(app));

var calcCtrl,
scope;

beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
calcCtrl = $controller('calcCtrl', {
$scope: scope
});
}));
it('calculates the ohm resistance', function () {
expect(scope.ohms).not.toBeUndefined();
});

});
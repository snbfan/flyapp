import flyapp from './app';

describe('flyapp', () => {

  let scope, element1, element2;

  beforeEach(() => {
    angular.mock.module(flyapp);
    angular.mock.inject(($rootScope, $compile) => {
      scope = $rootScope.$new();

      element1 = angular.element('<fly-gallery></fly-gallery>');
      element1 = $compile(element1)(scope);

      element2 = angular.element('<fly-gallery-js></fly-gallery-js>');
      element2 = $compile(element2)(scope);

      scope.$apply();
    });
  });

  describe('fly-gallery component', () => {
    it('component should not be falsy', () => {
      expect(element1.find('picture')).toBeTruthy();
    });
  });

  describe('fly-gallery-js component', () => {
    it('component should not be falsy', () => {
      expect(element2.find('img')).toBeTruthy();
    });
  });

});
import flyapp from '../app';
import { HttpMock, ElementMock } from '../mocks/serviceMocks';
import dataMock from '../mocks/data';

describe('flyapp', () => {

  let ctrl;

  beforeEach(() => {
    angular.mock.module(flyapp);
    angular.mock.inject(($controller) => {

      ctrl = $controller('GalleryController', {
        '$element': ElementMock(),
        '$http':HttpMock(dataMock)
      });

    });
  });

  describe('gallery controller', () => {
    it('component should not be falsy', () => {
      expect(ctrl).toBeTruthy();
    });

    it('should contain the initial data set', () => {
      expect(ctrl.model).toEqual({});
    });

    it('should make a call to getImagesData', () => {
      ctrl.$onInit();
      expect(ctrl.model.images.length).toEqual(4);
    });
  });
});


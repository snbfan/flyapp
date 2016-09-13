const MODULE_NAME = 'flyapp';

// styles
import '../static/style/common.css';
import '../static/style/gallery.component.css';
import '../static/style/galleryjs.component.css';

// angular
import angular from 'angular';
// mocking module to fake the backend response
import ngMockE2E from 'angular-mocks/angular-mocks';
// the mock
import ImagesDataMock from './mocks/data.js';
// controller
import GalleryController from './controllers/gallery.ctrl.js';


// component without js support
import flyGalleryComponent from './components/gallery/gallery.component';
// component with js support
import flyGalleryJsComponent from './components/galleryjs/galleryjs.component';


export default angular.module(MODULE_NAME, [ 'ngMockE2E' ])
  .controller('GalleryController',
    ['$element', '$http', GalleryController])

  .component('flyGallery', flyGalleryComponent)
  .component('flyGalleryJs', flyGalleryJsComponent)

  .run(($httpBackend) => {
    // configure response mocking
    $httpBackend.whenGET(/images$/).respond(ImagesDataMock);
    $httpBackend.whenGET(/.*/).passThrough();
  })
  .name;



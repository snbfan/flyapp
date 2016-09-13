/**
 * @ngdoc controller
 * @name GalleryController
 *
 * @description
 * Controller for fly-gallery components
 *
 * @param {Object} $element Component element
 * @param {Object} $http Angular's HTTP service
 *
 * @return {Object}
 */
export default function GalleryController($element, $http) {

  /**
   * Initial data object
   */
  const model = {};

  /**
   * @name getImagesData
   * @description
   * Makes a call to data "endpoint"
   */
  function getImagesData() {
    $http({ method: 'GET', url: '/images' })
      .success((data) => {
        processResponse(data.images);
      })
      .error(() => {
        console.log(data && data.message || 'Server error');
      });
  }

  /**
   * @name processResponse
   * @description
   * Processes response from the endpoint
   *
   * @param {Object} response Response from "endpoint"
   */
  function processResponse(response) {
    model.images = response;
    initImage();
  }


  /**
   * @name showSlide
   * @description
   * Shows slide by number
   *
   * @param {String} num NUmber of slide to show
   */
  function showSlide(num) {
    initImage(num);
    $element.find('input')[num].click();
  }

  /**
   * @name initImage
   * @description
   * Loads image by number, shows image
   * Timeout is added for demonstration purposes
   *
   * @param {String} num Number of the image to be inited
   */
  function initImage(num = 0) {
    setTimeout(() => {
      let images = document.querySelectorAll('img.lazy');
      if (images.length) {
        images[num].onload = () => {
          images[num].style.opacity = '100';
        }

        if (!images[num].getAttribute('src')) {
          images[num].src = images[num].getAttribute('data-img');
        }
      }
    }, 700);
  }

  // exposed
  return {
    model,
    showSlide,
    $onInit: getImagesData
  }
}

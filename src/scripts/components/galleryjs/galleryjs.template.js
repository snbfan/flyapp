const flyGalleryJsTemplate = `
<div class="flygalleryjs">
  <input ng-repeat="image in $ctrl.model.images"
  class="flygalleryjs-open" type="radio" id="flygalleryjs-{{$index}}"
  name="flygalleryjs" aria-hidden="true" hidden="" ng-checked="$first ? 'checked' : ''">

  <div class="flygalleryjs-inner">
    <div ng-repeat="image in $ctrl.model.images">
      <div class="flygalleryjs-label" id="flygalleryjs-label-{{$index}}">{{image.textjs}}</div>
      <div class="flygalleryjs-item" id="flygalleryjs-item-{{$index}}">
        <img data-img="../../img/bigjs-{{image.src}}.jpeg"
             class="lazy" src=""
             alt="One more nice picture here">
      </div>
      <label ng-if="!$first" ng-click="$ctrl.showSlide($index-1)"
      class="flygalleryjs-arrow prev arrow-{{$index}}">&#10094;</label>
      <label ng-if="!$last" ng-click="$ctrl.showSlide($index+1)"
      class="flygalleryjs-arrow next arrow-{{$index}}">&#10095;</label>
    </div>
  </div>

  <ol class="flygalleryjs-bullets">
    <li ng-repeat="image in $ctrl.model.images">
      <label ng-click="$ctrl.showSlide($index)" class="flygalleryjs-bullet">&#8226;</label>
    </li>
  </ol>
</div>`;

export default flyGalleryJsTemplate;
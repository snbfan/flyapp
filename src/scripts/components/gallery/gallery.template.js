const flyGalleryTemplate = `
<div class="flygallery">
  <input ng-repeat="image in $ctrl.model.images"
  class="flygallery-open" type="radio" id="flygallery-{{$index}}"
  name="flygallery" aria-hidden="true" hidden="" ng-checked="$first ? 'checked' : ''">

  <div class="flygallery-inner">
    <div ng-repeat="image in $ctrl.model.images">
      <div class="flygallery-label" id="flygallery-label-{{$index}}">{{image.text}}</div>
      <div class="flygallery-item" id="flygallery-item-{{$index}}">
        <picture>
          <source ng-srcset="../../img/small-{{image.src}}.jpeg" media="(max-width: 414px)">
          <source ng-srcset="../../img/big-{{image.src}}.jpeg">
          <img ng-srcset="../../img/big-{{image.src}}.jpeg"
               alt="One more nice picture here">
        </picture>
      </div>
      <label ng-if="!$first" for="flygallery-{{$index-1}}"
      class="flygallery-arrow prev arrow-{{$index}}">&#10094;</label>
      <label ng-if="!$last" for="flygallery-{{$index+1}}"
      class="flygallery-arrow next arrow-{{$index}}">&#10095;</label>
    </div>
  </div>

  <ol class="flygallery-bullets">
    <li ng-repeat="image in $ctrl.model.images">
      <label for="flygallery-{{$index}}" class="flygallery-bullet">&#8226;</label>
    </li>
  </ol>
</div>`;

export default flyGalleryTemplate;

define(['exports', './badge/badge', './box/box', './breadcrumbs/breadcrumbs', './breadcrumbs/instructionFilter', './button/button', './card/card', './carousel/carousel-item', './carousel/carousel', './char-counter/char-counter', './checkbox/checkbox', './chip/chip', './chip/chips', './collapsible/collapsible', './collection/collection-header', './collection/collection-item', './collection/collection', './collection/md-collection-selector', './colors/colorValueConverters', './common/attributeManager', './common/attributes', './common/constants', './common/events', './datepicker/datepicker.default-parser', './datepicker/datepicker', './dropdown/dropdown-element', './dropdown/dropdown', './fab/fab', './file/file', './footer/footer', './input/input-prefix', './input/input-update-service', './input/input', './modal/modal-trigger', './navbar/navbar', './pagination/pagination', './parallax/parallax', './progress/progress', './pushpin/pushpin', './radio/radio', './range/range', './scrollfire/scrollfire-patch', './scrollfire/scrollfire-target', './scrollfire/scrollfire', './scrollspy/scrollspy', './select/select', './sidenav/sidenav-collapse', './sidenav/sidenav', './slider/slider', './switch/switch', './tabs/tabs', './toast/toastService', './tooltip/tooltip', './transitions/fadein-image', './transitions/staggered-list', './waves/waves', './config-builder'], function (exports, _badge, _box, _breadcrumbs, _instructionFilter, _button, _card, _carouselItem, _carousel, _charCounter, _checkbox, _chip, _chips, _collapsible, _collectionHeader, _collectionItem, _collection, _mdCollectionSelector, _colorValueConverters, _attributeManager, _attributes, _constants, _events, _datepicker, _datepicker2, _dropdownElement, _dropdown, _fab, _file, _footer, _inputPrefix, _inputUpdateService, _input, _modalTrigger, _navbar, _pagination, _parallax, _progress, _pushpin, _radio, _range, _scrollfirePatch, _scrollfireTarget, _scrollfire, _scrollspy, _select, _sidenavCollapse, _sidenav, _slider, _switch, _tabs, _toastService, _tooltip, _fadeinImage, _staggeredList, _waves, _configBuilder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  Object.keys(_badge).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _badge[key];
      }
    });
  });
  Object.keys(_box).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _box[key];
      }
    });
  });
  Object.keys(_breadcrumbs).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _breadcrumbs[key];
      }
    });
  });
  Object.keys(_instructionFilter).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _instructionFilter[key];
      }
    });
  });
  Object.keys(_button).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _button[key];
      }
    });
  });
  Object.keys(_card).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _card[key];
      }
    });
  });
  Object.keys(_carouselItem).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _carouselItem[key];
      }
    });
  });
  Object.keys(_carousel).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _carousel[key];
      }
    });
  });
  Object.keys(_charCounter).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _charCounter[key];
      }
    });
  });
  Object.keys(_checkbox).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _checkbox[key];
      }
    });
  });
  Object.keys(_chip).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chip[key];
      }
    });
  });
  Object.keys(_chips).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chips[key];
      }
    });
  });
  Object.keys(_collapsible).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collapsible[key];
      }
    });
  });
  Object.keys(_collectionHeader).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collectionHeader[key];
      }
    });
  });
  Object.keys(_collectionItem).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collectionItem[key];
      }
    });
  });
  Object.keys(_collection).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collection[key];
      }
    });
  });
  Object.keys(_mdCollectionSelector).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _mdCollectionSelector[key];
      }
    });
  });
  Object.keys(_colorValueConverters).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _colorValueConverters[key];
      }
    });
  });
  Object.keys(_attributeManager).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _attributeManager[key];
      }
    });
  });
  Object.keys(_attributes).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _attributes[key];
      }
    });
  });
  Object.keys(_constants).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _constants[key];
      }
    });
  });
  Object.keys(_events).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _events[key];
      }
    });
  });
  Object.keys(_datepicker).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _datepicker[key];
      }
    });
  });
  Object.keys(_datepicker2).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _datepicker2[key];
      }
    });
  });
  Object.keys(_dropdownElement).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _dropdownElement[key];
      }
    });
  });
  Object.keys(_dropdown).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _dropdown[key];
      }
    });
  });
  Object.keys(_fab).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _fab[key];
      }
    });
  });
  Object.keys(_file).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _file[key];
      }
    });
  });
  Object.keys(_footer).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _footer[key];
      }
    });
  });
  Object.keys(_inputPrefix).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _inputPrefix[key];
      }
    });
  });
  Object.keys(_inputUpdateService).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _inputUpdateService[key];
      }
    });
  });
  Object.keys(_input).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _input[key];
      }
    });
  });
  Object.keys(_modalTrigger).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _modalTrigger[key];
      }
    });
  });
  Object.keys(_navbar).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _navbar[key];
      }
    });
  });
  Object.keys(_pagination).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pagination[key];
      }
    });
  });
  Object.keys(_parallax).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _parallax[key];
      }
    });
  });
  Object.keys(_progress).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _progress[key];
      }
    });
  });
  Object.keys(_pushpin).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pushpin[key];
      }
    });
  });
  Object.keys(_radio).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _radio[key];
      }
    });
  });
  Object.keys(_range).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _range[key];
      }
    });
  });
  Object.keys(_scrollfirePatch).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollfirePatch[key];
      }
    });
  });
  Object.keys(_scrollfireTarget).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollfireTarget[key];
      }
    });
  });
  Object.keys(_scrollfire).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollfire[key];
      }
    });
  });
  Object.keys(_scrollspy).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollspy[key];
      }
    });
  });
  Object.keys(_select).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _select[key];
      }
    });
  });
  Object.keys(_sidenavCollapse).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _sidenavCollapse[key];
      }
    });
  });
  Object.keys(_sidenav).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _sidenav[key];
      }
    });
  });
  Object.keys(_slider).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _slider[key];
      }
    });
  });
  Object.keys(_switch).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _switch[key];
      }
    });
  });
  Object.keys(_tabs).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tabs[key];
      }
    });
  });
  Object.keys(_toastService).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _toastService[key];
      }
    });
  });
  Object.keys(_tooltip).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tooltip[key];
      }
    });
  });
  Object.keys(_fadeinImage).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _fadeinImage[key];
      }
    });
  });
  Object.keys(_staggeredList).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _staggeredList[key];
      }
    });
  });
  Object.keys(_waves).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _waves[key];
      }
    });
  });
  function configure(aurelia, configCallback) {
    var builder = new _configBuilder.ConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.useGlobalResources) {
      aurelia.globalResources(builder.globalResources);
    }
    if (builder.useScrollfirePatch) {
      new _scrollfirePatch.ScrollfirePatch().patch();
    }
  }
});
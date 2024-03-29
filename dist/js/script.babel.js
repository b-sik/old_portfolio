"use strict";

// parascroll.js
document.addEventListener('DOMContentLoaded', function () {
  var CLASS_NAME = '.parallax-bg';
  var ATTR_NAME = 'data-bgurl';
  var SCROLL_SPEED;

  if (screen.width < 500) {
    SCROLL_SPEED = 0.1;
  } else {
    SCROLL_SPEED = 0.5;
  }

  var elements = document.querySelectorAll(CLASS_NAME);
  var targets = [];

  for (var i = 0; i < elements.length; i++) {
    var elem = elements[i];
    var url = elem.getAttribute(ATTR_NAME);

    if (url) {
      elem.style.backgroundImage = "url('" + url + "')";

      if (screen.width < 500) {
        elem.style.backgroundAttachment = 'scroll';
      } else {
        elem.style.backgroundAttachment = 'fixed';
      }

      elem.style.backgroundSize = 'cover';
      targets.push(elem);
    }
  }

  var callback = function callback() {
    for (var i = 0; i < targets.length; i++) {
      var rekt = targets[i].getBoundingClientRect();
      targets[i].style.backgroundPosition = '50%' + rekt.top * SCROLL_SPEED + 'px';
    }
  };

  window.onscroll = callback;
  callback();
}); //***********************/
// Keep/remove :hover styling on certificate labels when viewing certificates

var certLabels = document.querySelectorAll('.certificate__label');
certLabels.forEach(function (label) {
  label.addEventListener('click', function () {
    // determine which label is clicked
    var checkboxId = label.attributes["for"].value; // select associated checkbox input

    var checkbox = document.getElementById(checkboxId); // grab min || max icon

    var icon = document.getElementById("icon-".concat(checkboxId)); // checks if drawer is open or not

    if (checkbox.checked == false) {
      label.style.backgroundPosition = '100%';
      label.style.color = '#fff';
      icon.className = 'fas fa-window-minimize';
      icon.style.color = '#fff';
    } else if (checkbox.checked == true) {
      label.style.removeProperty('background-position');
      label.style.removeProperty('color');
      icon.className = 'far fa-window-maximize';
      icon.style.removeProperty('color');
    }
  });
}); //***********************/
// Keeps form labels visible after first focusing then unfocusing

var fields = document.querySelectorAll('.form__field');
fields.forEach(function (field) {
  field.addEventListener('focusin', function () {
    var label = field.getElementsByTagName('label');

    if (label[0] !== undefined) {
      label[0].style.opacity = 1;
      label[0].style.transform = 'translateY(0)';
    }
  });
}); //***********************/
// Make sidebar visible beyond header section

if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].boundingClientRect.y < 0) {
      document.getElementById('side-nav').classList.add('visible');
    } else {
      document.getElementById('side-nav').classList.remove('visible');
    }
  });
  observer.observe(document.querySelector('#sidebar-observer-pixel'));
} //***********************/
// Modal functionality


var modalBtn = document.getElementById('modal-btn');
var modalClose = document.getElementById('modal-close');
var modal = document.getElementById('modal');
modalBtn.addEventListener('click', function () {
  modal.style.transform = 'translateX(0)';
  modal.style.opacity = '1';
});
modalClose.addEventListener('click', function () {
  modal.style.transform = 'translateX(200%)';
  modal.style.opacity = '0';
});
modal.addEventListener('click', function (e) {
  if (e.target.id == 'modal') {
    modal.style.transform = 'translateX(200%)';
    modal.style.opacity = '0';
  }
});

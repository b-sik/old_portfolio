// parascroll.js
document.addEventListener('DOMContentLoaded', function () {
  var CLASS_NAME = '.parallax-bg';
  var ATTR_NAME = 'data-bgurl';
  var SCROLL_SPEED = 0.6;

  var elements = document.querySelectorAll(CLASS_NAME);
  var targets = [];
  for (var i = 0; i < elements.length; i++) {
    var elem = elements[i];
    var url = elem.getAttribute(ATTR_NAME);
    if (url) {
      elem.style.backgroundImage = "url('" + url + "')";
      elem.style.backgroundAttachment = 'fixed';
      elem.style.backgroundSize = 'cover';
      targets.push(elem);
    }
  }
  var callback = function () {
    for (var i = 0; i < targets.length; i++) {
      var rekt = targets[i].getBoundingClientRect();
      targets[i].style.backgroundPosition =
        '50%' + rekt.top * SCROLL_SPEED + 'px';
    }
  };
  window.onscroll = callback;
  callback();
});

//***********************/
// Keep/remove :hover styling on certificate labels when viewing certificates
const certLabels = document.querySelectorAll('.certificate__label');

certLabels.forEach((label) => {
  label.addEventListener('click', () => {
    // determine which label is clicked
    let checkboxId = label.attributes.for.value;
    // select associated checkbox input
    let checkbox = document.getElementById(checkboxId);
    // grab min || max icon
    let icon = document.getElementById(`icon-${checkboxId}`);
    // checks if drawer is open or not
    if (checkbox.checked == false) {
      label.style.backgroundPosition = '100%';
      label.style.color = '#fff';
      icon.className = 'fas fa-window-minimize';
    } else if (checkbox.checked == true) {
      label.style.removeProperty('background-position');
      label.style.removeProperty('color');
      icon.className = 'far fa-window-maximize';
    }
  });
});

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
});

//***********************/
// Keeps form labels visible after first focusing then unfocusing
let fields = document.querySelectorAll('.form__field');

fields.forEach((field) => {
  field.addEventListener('click', () => {
    let label = field.getElementsByTagName('label');
    if (label[0] !== undefined) {
      label[0].style.opacity = 1;
      label[0].style.transform = 'translateY(0)';
    }
  });
});

//***********************/
// Make sidebar visible beyond header - avoids seeing sidenav labels if hovered
if (
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].boundingClientRect.y < 0) {
      document.getElementById('side-nav').classList.add('visible');
    } else {
      document.getElementById('side-nav').classList.remove('visible');
    }
  });
  observer.observe(document.querySelector('#sidebar-observer-pixel'));
}

//***********************/
// Make modal visible

const modalBtn = document.getElementById('modal-btn');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('modal');

modalBtn.addEventListener('click', () => {
  modal.style.transform = 'translateX(0)';
  modal.style.opacity = '1';
});

modalClose.addEventListener('click', () => {
  modal.style.transform = 'translateX(200%)';
  modal.style.opacity = '0';
});

modal.addEventListener('click', (e) => {
  if (e.target.id == 'modal') {
    modal.style.transform = 'translateX(200%)';
    modal.style.opacity = '0';
  }
});

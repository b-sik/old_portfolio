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

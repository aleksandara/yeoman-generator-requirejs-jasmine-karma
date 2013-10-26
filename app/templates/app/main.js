define(["lodash"], function(_) {
  var info = document.createElement("span");
  info.textContent = 'lodash ' + _.VERSION + ' loaded!';

  document.body.appendChild(info);
});

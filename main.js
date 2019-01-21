window.onload = function() {
  var panel = document.createElement('div');
  panel.setAttribute('id', 'env_alert');
  panel.setAttribute('class', 'env_alert_right');
  panel.onmouseover = toggleEnvAlertPanel;

  var message = document.createElement('p');
  message.innerText = '本番環境です！';
  panel.appendChild(message);
  document.body.append(panel);
};

function toggleEnvAlertPanel() {
  var panel = document.getElementById('env_alert');
  if (panel.getAttribute('class') == 'env_alert_right') {
    panel.setAttribute('class', 'env_alert_left');
  } else {
    panel.setAttribute('class', 'env_alert_right');
  }
}


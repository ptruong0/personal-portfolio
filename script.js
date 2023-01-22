function copyToClipboard(text) {
  navigator.clipboard.writeText(text);

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-secondary alert-dismissible" role="alert">`,
    `   <div>Copied email address to clipboard</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
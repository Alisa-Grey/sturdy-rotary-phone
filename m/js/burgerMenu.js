document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.add('is-active')
  })

  document.querySelector('#menu-close-btn').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.remove('is-active')
  })
})
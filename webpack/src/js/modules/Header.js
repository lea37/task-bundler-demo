import '../../scss/header.scss'

class Header {
  constructor() {
    document.querySelector('.js-header').innerHTML = 'Hello world !'
  }
}

export default Header;
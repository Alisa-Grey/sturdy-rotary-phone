class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
      <header class="header">
      <div class="header__wrap">
      <a
        class="header__logo link-reset"
        href="https://darkestafk.com/"
        aria-label="Darkest AFK"
      >
        <img src="./images/logo.png"/>
      </a>
      <div class='burger-container'>
      <input
        type='checkbox'
        class='toggle-menu'
        id='toggle-menu'
      />
      <div
        class='hamburger-lines'
      >
        <span class='line line1'></span>
        <span class='line line2'></span>
        <span class='line line3'></span>
      </div>
    </div>
      <nav id="burger-menu" class="nav">
        <ul class="nav-list list-reset">
          <li class="nav-list__item">
            <a class="nav-list__link link-reset" href="index.html"> HOME </a>
          </li>
          <li class="nav-list__item">
            <a
              class="nav-list__link link-reset"
              href="news.html"
            >
              NEWS
            </a>
          </li>
          <li class="nav-list__item">
            <!-- change href to anchor? -->
            <a
              class="nav-list__link link-reset"
              href="community.html"
            >
              COMMUNITY
            </a>
          </li>
          <li class="nav-list__item">
            <a
              class="nav-list__link link-reset"
              href="https://darkestafk.zendesk.com"
              target="_blank"
            >
              FAQ
            </a>
          </li>
          <li class="nav-list__item">
            <!-- new page to anchor? -->
            <a
              class="nav-list__link link-reset"
              href="media-page.html"
            >
              MEDIA
            </a>
          </li>
        </ul>
      </nav>
      <a
        class="play-link link-reset"
        href="https://darkestafk.onelink.me/yDmA/610af968"
      >
      <img src="./images/playnow.png"/>
      </a>
      </div>
    </header>
    `;
	}
}

customElements.define('header-component', Header);

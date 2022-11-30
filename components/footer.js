class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<footer class="footer">
		<div class="content-wrap">
				<ul class="footer-links list-reset">
					<li class="footer-links__item">
						<a
							href="https://discord.gg/zDdRMRdh7c"
							target="_blank"
							aria-label="discord link"
							class="footer-links__link discord link-reset"
							tabindex="0"
						></a>
					</li>
					<li class="footer-links__item">
						<a
							href="https://www.instagram.com/darkestafk/"
							target="_blank"
							aria-label="instagram link"
							class="footer-links__link instagram link-reset"
							tabindex="0"
						></a>
					</li>
					<li class="footer-links__item">
						<a
							href="https://www.facebook.com/darkestafk"
							target="_blank"
							aria-label="facebook link"
							class="footer-links__link facebook link-reset"
							tabindex="0"
						></a>
					</li>
					<li class="footer-links__item">
						<a
							href="https://www.reddit.com/r/DarkestAFK/"
							class="footer-links__link reddit link-reset"
							tabindex="0"
							target="_blank"
						></a>
					</li>

					<li class="footer-links__item">
						<a
							href="https://vk.com/darkestafk_official"
							target="_blank"
							aria-label="vk link"
							class="footer-links__link vk link-reset"
							tabindex="0"
						></a>
					</li>
					<li class="footer-links__item">
						<a
							href="https://www.youtube.com/channel/UCv9qBYP4oYJqpyqT0rAgAOA"
							target="_blank"
							aria-label="youtube link"
							class="footer-links__link youtube link-reset"
							tabindex="0"
						></a>
					</li>
				</ul>

				<div class="footer__bottom">
					<p class="footer__copywrite">
						©&nbsp;2022, Alice Games FZE - ALL RIGHTS RESERVED
					</p>
					<ul class="policy-links list-reset">
						<li class="policy-links__item">
							<a href="./policy.html" class="policy-links__link link-reset"
								>Privacy policy</a
							>
						</li>
						<li class="policy-links__item">
							<a href="./terms.html" class="policy-links__link link-reset"
								>Terms and conditions</a
							>
						</li>
					</ul>
				</div>
				</div>
			</footer>
    `;
	}
}

customElements.define('footer-component', Footer);

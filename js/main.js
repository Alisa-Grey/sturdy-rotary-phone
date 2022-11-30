document.addEventListener('DOMContentLoaded', () => {
	// menu
	document.querySelector('#toggle-menu').addEventListener('click', function () {
		document.querySelector('.hamburger-lines').classList.toggle('is-active');
		document.querySelector('.nav').classList.toggle('is-active');
	});
});

// Highlight active button
const toggleActiveClass = (elSelector, activeClass) => {
	const elements = document.querySelectorAll(elSelector);
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', function () {
			const current = document.getElementsByClassName(activeClass);
			current[0].className = current[0].className.replace(
				` ${activeClass}`,
				''
			);
			this.className += ` ${activeClass}`;
		});
	}
};

// Show filtered elements
const addClass = (element, name) => {
	let elementsArr = element.className.split(' ');
	let namesArr = name.split(' ');
	namesArr.forEach((name) => {
		if (elementsArr.indexOf(name) == -1) {
			element.className += ' ' + name;
		}
	});
};
// Hide elements not included in category
const removeClass = (element, name) => {
	let elementsArr = element.className.split(' ');
	let namesArr = name.split(' ');
	namesArr.forEach((name) => {
		while (elementsArr.indexOf(name) > -1) {
			elementsArr.splice(elementsArr.indexOf(name), 1);
		}
	});
	element.className = elementsArr.join(' ');
};

const filterByCategory = (category, selector, parentSelector) => {
	const items = document.querySelectorAll(selector);
	if (category === 'all') {
		category = '';
	}

	items.forEach((item) => {
		removeClass(item, 'shown');
		addClass(item, 'invisible');
		if (item.className.indexOf(category) > -1) {
			addClass(item, 'shown');
			removeClass(item, 'invisible');
		}
	});

	// if category is empty show placeholder
	const hasVisibleChildren = document.querySelectorAll('.shown').length > 0;
	const noItemsElement = document.querySelector('.no-children-container');
	if (!hasVisibleChildren && !noItemsElement) {
		const container = document.createElement('div');
		const text = document.createElement('p');
		text.innerText = 'No items in this category yet';
		text.classList.add('news-item__text');
		container.classList.add('no-children-container');
		container.append(text);
		document.querySelector(parentSelector).append(container);
	} else if (hasVisibleChildren && noItemsElement) {
		noItemsElement.remove();
	}
};

// promo video
const modal = document.querySelector('#promo-video');
if (modal) {
	document.querySelector('#promo-playbtn').addEventListener('click', () => {
		modal.classList.remove('hidden');
		document.querySelector('.modal__video').innerHTML =
			'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NiBVzLJINGk?autoplay=1&mute=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal__video-iframe"></iframe>';
		let videoFrame = document.querySelector('.modal__video-iframe');
		document.querySelector('.modal__close-btn ').style.marginLeft = `${
			videoFrame.offsetWidth - 50
		}px`;
	});

	document.querySelector('.modal__close-btn ').addEventListener('click', () => {
		document.querySelector('.modal__video').innerHTML = '';
		modal.classList.add('hidden');
	});
}

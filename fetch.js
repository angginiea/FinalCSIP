let AccessoriesLink = document.querySelector('#accessories-link');
let ApprelLink = document.querySelector('#apparel-link');
let ShoesLink = document.querySelector('#shoeslink');
let SaleLink = document.querySelector('#sale-link');
let homeLink = document.querySelector('#home-link');

let linkArray = [AccessoriesLink, ApprelLink, ShoesLink, SaleLink, homeLink];

linkArray.forEach((eachLink) => {
	eachLink.addEventListener('click', (e) => {
		switch (eachLink) {
			case collectionsLink:
				fetchPage(eachLink, 'collections.html');
				break;

			case ApprelLink:
				fetchPage(eachLink, 'Apparel.html');
				break;

			case SaleLink:
				fetchPage(eachLink, 'Sale.html');
				break;

			case AccessoriesLink:
				fetchPage(eachLink, 'Accessories.html');
				break;

			case homeLink(eachLink, 'Home.html')
				break;
		}
	})
})

function fetchPage(link, page) {
	let baseURL = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.port) {
		baseURL += `:${window.location.port}`;
	}

	fetch(`${baseURL}/${page}`)
		.then(function(response) {
			return response.text()
		})
		.then(function(html) {
			let doc = new DOMParser().parseFromString(html, "text/html");

			anime({
				targets: '.text-section h1, .text-section p, .text-section div',
				translateX: 700,
				opacity: 0,
				easing: 'easeInExpo',
				duration: 700,
				complete: (anim) => {
					document.querySelector('.column-wrapper').remove();
				}
			})

			setTimeout(function () {
				document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));

				anime({
					targets: '.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div',
					translateX: [-600, 0],
					delay: (el, i) => 100 * i,
					opacity: [0, 1],
					easing: 'easeOutExpo',
				})
			}, 700);
		})
}

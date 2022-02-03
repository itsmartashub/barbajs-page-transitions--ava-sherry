import barba from '@barba/core';
import barbaCss from '@barba/css';
// import 'regenerator-runtime';

const bodyTag = document.querySelector('body');

// tell Barba to use the css plugin
barba.use(barbaCss);

// console.log(barba);
// console.log(barbaCss);

// init Barba
barba.init({
	// sync: true,
	transitions: [
		{
			name: 'fade',
			// ! morala sam dodati ove dve fje inace ne radi barba
			leave() {},
			enter() {},

			once() {},
			beforeEnter({ current, next, trigger }) {
				const headerLinks = document.querySelectorAll('header a');
				const href = next.url.path;

				headerLinks.forEach(link => {
					if (link.getAttribute('href') === href) {
						link.classList.add('selected');
						return;
					}
					link.classList.remove('selected');
				});

				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			},
		},
	],

	//! ono gore ne mari gde se odigrava transition, on ce se svugde odraditi, a views koristimo kada hocemo specijalno da transitujemo specificnu zonu, neki deo, kao sto je ovde feed page
	views: [
		{
			namespace: 'feed', //! a kako barba da zna koji je feed, pa idemo u feed.html i u section dodamo data-barba-namespace="feed"
			beforeEnter() {
				bodyTag.classList.add('feed');
			},
			beforeLeave() {
				bodyTag.classList.remove('feed');
			},
		},
	],
});

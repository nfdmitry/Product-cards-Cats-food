const sectionCard = document.querySelector('.card-section');
const cardCats = document.querySelectorAll('.card-cats');

//Function change border card:
function changeColorBorder(event) {
	const target = event.target.closest('.card-cats');

	if (target === null) {
		return;
	}

	if (event.target.closest('.card-cats__txt')) {
		return;
	}

	target.classList.toggle('data-color-default');
	target.classList.toggle('data-color-active');
	target
		.querySelector('.card-cats__head')
		.classList.toggle('data-text-default');
	target.querySelector('.card-cats__head').classList.toggle('data-text-active');

	if (target.querySelector('.data-text-default')) {
		target.querySelector('.card-cats__slogan > span').innerText =
			'Сказочное заморское яство';
		target
			.querySelector('.card-cats__slogan > span')
			.classList.remove('color-pink');
	}
}

//Function to move the cursor from the card & change top text card:
function changeTopTextCard(event) {
	const target = event.target.closest('.card-cats');

	if (target === null) {
		return;
	}

	if (target.querySelector('.data-text-active')) {
		target.querySelector('.card-cats__slogan > span').innerText =
			'Котэ не одобряет?';
		target
			.querySelector('.card-cats__slogan > span')
			.classList.add('color-pink');
	}
}

//Function change bottom text card:
function changeBottomTextCard(event) {
	const target = event.target.closest('.card-cats');

	if (target === null) {
		return;
	}

	if (event.target.closest('.card-cats__txt')) {
		return;
	}

	const textCard = target.querySelector('.card-cats__bottom > .card-cats__txt');

	if (
		target.querySelector('.data-foiegras') &&
		textCard.innerText === 'Чего сидишь? порадуй котэ,'
	) {
		textCard.innerText = 'Печень утки разварная с артишоками.';
		target.querySelector('.card-cats__bottom-btn').classList.toggle('no-show');
	} else if (
		target.querySelector('.data-foiegras') &&
		textCard.innerText === 'Печень утки разварная с артишоками.'
	) {
		textCard.innerText = 'Чего сидишь? порадуй котэ,';
		target.querySelector('.card-cats__bottom-btn').classList.toggle('no-show');
	}

	if (
		target.querySelector('.data-fish') &&
		textCard.innerText === 'Чего сидишь? порадуй котэ,'
	) {
		textCard.innerText = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
		target.querySelector('.card-cats__bottom-btn').classList.toggle('no-show');
	} else if (
		target.querySelector('.data-fish') &&
		textCard.innerText === 'Головы щучьи с чесноком да свежайшая сёмгушка.'
	) {
		textCard.innerText = 'Чего сидишь? порадуй котэ,';
		target.querySelector('.card-cats__bottom-btn').classList.toggle('no-show');
	}

	if (
		target.querySelector('.data-chicken') &&
		textCard.innerText === 'Чего сидишь? порадуй котэ,'
	) {
		textCard.innerText = 'Филе из цыплят с трюфелями в бульоне.';
		target.querySelector('.card-cats__bottom-btn').classList.toggle('no-show');
	} else if (
		target.querySelector('.data-chicken') &&
		textCard.innerText === 'Филе из цыплят с трюфелями в бульоне.'
	) {
		textCard.innerText = 'Чего сидишь? порадуй котэ,';
		target.querySelector('.card-cats__bottom-btn').classList.toggle('no-show');
	}
}

//Function disabled card:
function disabledCard(event) {
	const target = event.target.closest('.card-cats');

	if (target === null) {
		return;
	}

	const textCard = target.querySelector('.card-cats__bottom > .card-cats__txt');

	if (target.querySelector('.data-chicken')) {
		target.closest('.card-cats').classList.add('disabled');
		textCard.innerText = 'Печалька, c курой закончился.';
		target.querySelector('.card-cats__bottom-btn').classList.add('no-show');
		target.classList.remove('data-color-default');
		target.classList.remove('data-color-active');
		target
			.querySelector('.card-cats__head')
			.classList.remove('data-text-default');
		target
			.querySelector('.card-cats__head')
			.classList.remove('data-text-active');
	}
}

sectionCard.addEventListener('click', changeColorBorder);
sectionCard.addEventListener('click', changeBottomTextCard);
cardCats.forEach(el => el.addEventListener('mouseleave', changeTopTextCard));
sectionCard.addEventListener('click', disabledCard);

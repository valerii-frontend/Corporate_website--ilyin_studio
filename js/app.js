// language toggle
let currentLanguage = document.querySelector(".lang__current");
let languageList = document.querySelector(".lang__list");
let languageItems = document.querySelectorAll(".lang__item");
let languagelistHeight = 0;
// получение высоты по количеству языков
function langHeight() {
	if (languageItems) {
		for (let index = 0; index < languageItems.length; index++) {
			let languageItem = languageItems[index];
			languagelistHeight += languageItem.offsetHeight;
			languageList.style.height = `${languagelistHeight}px`;
		}
	}
}
// выбоб и замена сокращения языка в списке на текущий
function langChoose() {
	if (languageItems) {
		for (let index = 0; index < languageItems.length; index++) {
			languageItems[index].addEventListener("click", function (e) {
				let currentLanguageText = currentLanguage.textContent;
				currentLanguage.textContent = languageItems[index].textContent;
				languageItems[index].textContent = currentLanguageText;
				currentLanguage.classList.remove("_active");
				languageList.classList.remove("_active");
			});
		}
	}
}
langHeight();
langChoose();
currentLanguage.addEventListener("click", function (e) {
	currentLanguage.classList.toggle("_active");
	languageList.classList.toggle("_active");
});

// menu icon and items
let body = document.querySelector("body");
let menuIcon = document.querySelector(".header__icon");
let menu = document.querySelector(".header__menu");
let headerCenter = document.querySelector(".header__center");
let headerLinks = document.querySelectorAll(".header__link");
menuIcon.addEventListener("click", function (e) {
	menuIcon.classList.toggle("_active");
	menu.classList.toggle("_active");
	headerCenter.classList.toggle("_active");
	body.classList.toggle("_lock");
});
document.addEventListener("click", function (e) {
	if (
		(menu.classList.contains("_active") && e.target.classList.contains("header__link")) ||
		e.target.classList.contains("social__link")
	) {
		menuIcon.classList.remove("_active");
		menu.classList.remove("_active");
		headerCenter.classList.remove("_active");
		body.classList.remove("_lock");
	}
});

// video

let videoButton = document.querySelector(".home__play");
if (videoButton) {
	let videoMainScreen = document.querySelector(".home__player");
	let videoPopupBody = document.querySelector(".popup-home");
	let popupPlayer = document.querySelector(".popup-home__player");
	let videoPopupContent = document.querySelector(".popup-home__video");
	let videoSrc = videoMainScreen.getAttribute("src");
	let videoSource = videoPopupContent.setAttribute("src", videoSrc);
	videoButton.addEventListener("click", function (e) {
		videoPopupBody.classList.add("_active");
		videoPopupContent.play();
	});
	let closePopup = document.querySelector(".popup-home__close");
	if (videoPopupBody) {
		videoPopupBody.addEventListener("click", function (e) {
			if (e.target !== videoPopupContent) {
				videoPopupBody.classList.remove("_active");
				videoPopupContent.pause();
			}
		});
	}
}

// slider
let mySwiper = new Swiper(".works__slider", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".works__pagination",
		type: "bullets",
		clickable: true,
		dynamicBullets: true,
	},
	slideToClickedSlide: true,
	breakpoints: {
		650: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
	},
});

let footerNames = document.querySelectorAll(".footer__name");
for (let i = 0; i < footerNames.length; i++) {
	const footerName = footerNames[i];
	footerName.addEventListener("click", function (e) {
		footerName.classList.toggle("_active");
		_slideToggle(footerName.nextElementSibling);
	});
}

// footer spoilers

let footerColumnTitles = document.querySelectorAll(".item-footer__title");

for (let index = 0; index < footerColumnTitles.length; index++) {
	const footerColumnTitle = footerColumnTitles[index];
	if (footerColumnTitles.length > 0) {
		footerColumnTitle.addEventListener("click", function (e) {
			footerColumnTitle.classList.toggle("_active");
			footerColumnTitle.nextElementSibling.classList.toggle("_active");
		});
	}
}

// SCROLL ANIMATION
let scrollBlocks = document.querySelectorAll("._anim");
for (let index = 0; index < scrollBlocks.length; index++) {
	const scrollBlock = scrollBlocks[index];
	const scrollBlockTop = scrollBlock.getBoundingClientRect().top;
	if (scrollBlocks.length > 0) {
		window.addEventListener("scroll", function (e) {
			if (scrollBlock.getBoundingClientRect().top < 600) {
				scrollBlock.classList.remove("_scroll");
			} else {
				scrollBlock.classList.add("_scroll");
			}
		});
	}
}

// tabs

let processSteps = document.querySelectorAll(".process__step");
let processTabs = document.querySelectorAll(".process__tab");
for (let index = 0; index < processSteps.length; index++) {
	const processStep = processSteps[index];
	processStep.addEventListener("click", function (e) {
		stepAnimation(index);
		processLine(index);
		tabs(index);
		processStep.classList.add("_current");
	});
}
function stepAnimation(clickedStep) {
	for (let index = 0; index < processSteps.length; index++) {
		const processStepTarget = clickedStep;
		const processStep = processSteps[index];
		if (index < processStepTarget) {
			processStep.classList.add("_active");
			processStep.classList.remove("_current");
		} else {
			processStep.classList.remove("_active");
			processStep.classList.remove("_current");
		}
	}
}
function tabs(index) {
	for (let tabsIndex = 0; tabsIndex < processTabs.length; tabsIndex++) {
		const processTab = processTabs[tabsIndex];
		if (tabsIndex == index) {
			processTab.classList.add("_active");
		} else {
			processTab.classList.remove("_active");
		}
	}
}
function processLine(clickedStep) {
	let processLine = document.querySelector(".process__line");
	let processLineProcent = (clickedStep / (processSteps.length - 1)) * 100;
	processLine.style.width = `${processLineProcent}%`;
}

let faqLink = document.querySelector(".faq__link");
let question = document.querySelector(".question");
if (faqLink) {
	faqLink.addEventListener("click", function (e) {
		question.classList.add("_active");
	});
}
let closeQuestionPopup = document.querySelector(".question__close");
let closeQuestionForm = document.querySelector(".question__form");
if (question) {
	closeQuestionPopup.addEventListener("click", function (e) {
		question.classList.remove("_active");
	});
}

// ADD FILE SCRIPT

let briefFile = document.querySelector("#brief-file");
if (briefFile) {
	let briefFileName = document.querySelector(".brief__add-file");
	briefFile.addEventListener("change", function (e) {
		if (briefFile.value) {
			let value = briefFile.value.replace("C:\\fakepath\\", "");
			if (value.length > 25) {
				value = value.substring(0, 24) + "...";
				briefFileName.innerHTML = value;
			} else {
				briefFileName.innerHTML = value;
			}
		}
	});
}
let aboutSlider = new Swiper(".about__slider", {
	direction: "horizontal",
	loop: true,
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 30,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
});

let blogItems = document.querySelectorAll(".blog__column");
if (blogItems.length > 0) {
	let blogFilters = document.querySelectorAll(".blog__link");
	if (blogFilters.length > 0) {
		for (let index = 0; index < blogFilters.length; index++) {
			const blogFilter = blogFilters[index];
			blogFilter.addEventListener("click", function (e) {
				e.preventDefault();
				const blogFilterValue = blogFilter.dataset.filter;
				const blogFilterActive = document.querySelector(".blog__link._active");
				blogFilterActive.classList.remove("_active");
				blogFilter.classList.add("_active");
				showBlogItems(blogFilterValue);
			});
		}
		function showBlogItems(filter) {
			for (let index = 0; index < blogItems.length; index++) {
				const blogItem = blogItems[index];
				if (filter === "all" || !filter) {
					blogItem.classList.remove("_hide");
				} else {
					blogItem.classList.add("_hide");
					if (blogItem.classList.contains("blog__column_" + filter)) {
						blogItem.classList.remove("_hide");
					}
				}
			}
		}
	}
}
;
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("_webp");
	} else {
		document.querySelector("body").classList.add("_no-webp");
	}
});
;
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi),type (min, max)"
// e.x. data-da="item,767,last,max"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

class DynamicAdapt {
	// массив объектов
	elementsArray = [];
	daClassname = '_dynamic_adapt_';

	constructor(type) {
		this.type = type;
	}

	init() {
		// массив DOM-элементов
		this.elements = [...document.querySelectorAll('[data-da]')];

		// наполнение elementsArray объктами
		this.elements.forEach((element) => {
			const data = element.dataset.da.trim();
			if (data !== '') {
				const dataArray = data.split(',');

				const oElement = {};
				oElement.element = element;
				oElement.parent = element.parentNode;
				oElement.destination = document.querySelector(`.${dataArray[0].trim()}`);
				oElement.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
				oElement.place = dataArray[2] ? dataArray[2].trim() : 'last';

				oElement.index = this.indexInParent(
					oElement.parent, oElement.element,
				);

				this.elementsArray.push(oElement);
			}
		});

		this.arraySort(this.elementsArray);

		// массив уникальных медиа-запросов
		this.mediaArray = this.elementsArray
			.map(({ breakpoint }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
			.filter((item, index, self) => self.indexOf(item) === index);

		// навешивание слушателя на медиа-запрос
		// и вызов обработчика при первом запуске
		this.mediaArray.forEach((media) => {
			const mediaSplit = media.split(',');
			const mediaQuerie = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			// массив объектов с подходящим брейкпоинтом
			const elementsFilter = this.elementsArray.filter(
				({ breakpoint }) => breakpoint === mediaBreakpoint
			);
			mediaQuerie.addEventListener('change', () => {
				this.mediaHandler(mediaQuerie, elementsFilter);
			});
			this.mediaHandler(mediaQuerie, elementsFilter);
		});
	}

	// Основная функция
	mediaHandler(mediaQuerie, elementsFilter) {
		if (mediaQuerie.matches) {
			elementsFilter.forEach((oElement) => {
				// получение индекса внутри родителя
				oElement.index = this.indexInParent(
					oElement.parent, oElement.element,
				);
				this.moveTo(oElement.place, oElement.element, oElement.destination);
			});
		} else {
			elementsFilter.forEach(({ parent, element, index }) => {
				if (element.classList.contains(this.daClassname)) {
					this.moveBack(parent, element, index);
				}
			});
		}
	}

	// Функция перемещения
	moveTo(place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.append(element);
			return;
		}
		if (place === 'first') {
			destination.prepend(element);
			return;
		}
		destination.children[place].before(element);
	}

	// Функция возврата
	moveBack(parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].before(element);
		} else {
			parent.append(element);
		}
	}

	// Функция получения индекса внутри родителя
	indexInParent(parent, element) {
		return [...parent.children].indexOf(element);
	}

	// Функция сортировки массива по breakpoint и place 
	// по возрастанию для this.type = min
	// по убыванию для this.type = max
	arraySort(arr) {
		if (this.type === 'min') {
			arr.sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}
					if (a.place === 'first' || b.place === 'last') {
						return -1;
					}
					if (a.place === 'last' || b.place === 'first') {
						return 1;
					}
					return a.place - b.place;
				}
				return a.breakpoint - b.breakpoint;
			});
		} else {
			arr.sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}
					if (a.place === 'first' || b.place === 'last') {
						return 1;
					}
					if (a.place === 'last' || b.place === 'first') {
						return -1;
					}
					return b.place - a.place;
				}
				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	}
}

const da = new DynamicAdapt('max');
da.init();;

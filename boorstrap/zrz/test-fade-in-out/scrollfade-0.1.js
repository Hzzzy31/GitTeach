// ScrollFade 0.1

var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height / 4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height / 2);

		if (rect.top <= fadeInPoint) { 				/* 如果到顶部的距离少了就出现 */
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else { 									/* 如果到顶部的距离多了就消失 */
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
		// 控制已经出现的元素如果脱离视图时的消失
		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function () {
	scrollFade();
});
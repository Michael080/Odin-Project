// --- Adding inline style ---

const div = document.querySelector('div');

// Add several 'lines' of css-styles:
div.style.cssText = 'background-color: gray; border: 3px solid lightblue';
// OR Also:
div.setAttribute('syle', 'color: pink; text-align: center');
// setAttribute() - can be used to 'set' any/? HTML attribute

const headline = document.querySelector('h1');
console.log(headline);
headline.setAttribute("id", "headline");
console.log(headline);

headline.setAttribute("style", "color: blue; background: gray");
// OR
headline.style.cssText = 'color: yellow; background: purple';

// via domenlightenment.com:
const headlineStyle = headline.style;

headlineStyle.border = '5px solid blue';
headlineStyle.width = '500px';
headlineStyle.textAlign = 'center';

// get attributes
console.log('style:', headline.getAttribute('style'));
console.log('id:', headline.getAttribute('id'));
console.log('aria-label:', headline.getAttribute('aria-label'));

// get computed style
// getComputedStyle() returns a read-only object
console.log('background-color:', window.getComputedStyle(headline).backgroundColor);
console.log('border:', window.getComputedStyle(headline).border);
console.log('width:', window.getComputedStyle(headline).width);





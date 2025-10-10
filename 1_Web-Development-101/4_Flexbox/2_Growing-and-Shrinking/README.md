# Growing and Shrinking
## [Basic Values of `flex`](https://www.w3.org/TR/css-flexbox-1/#flex-common)

## [Assignments  |  Flex: Growing and Shrinking](https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#assignment)
1. Read [W3C’s flex section](https://www.w3.org/TR/css-flexbox-1/#flex-common) to understand the basic values of common flex shorthand values.

2. [MDN’s documentation on flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) summarizes the entire flex shorthand values, as well as introduces some new syntax that hasn’t been covered in the previous article.

## [Add'l resources](https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#additional-resources)
- [*Video*: How Flexbox works and why | *Kevin Powell*](https://www.youtube.com/watch?v=u044iM9xsWU&t=1s)
- [*Scrimba*: Scrim on flex shorthand](https://scrimba.com/learn/flexbox/the-flex-property-flexbox-tutorial-cGNKJTv)

### *Add'l* Add'l Resources
- [Equal Columns W/ Flexbox - Kevin Powell](https://css-tricks.com/equal-columns-with-flexbox-its-more-complicated-than-you-might-think/)
    - demonstration of how `grid` is the better solution to the problem than flexbox

**Kevin Powell's suggested resources:**
- [Game - Flexbox Zombies](https://mastery.games/flexboxzombies/)
- [Game - Flexbox Froggies](https://click.convertkit-mail.com/v8up6z99plimummdnwtghv2xemlls9hxg5z/kkhmh6h8m685gwbk/aHR0cHM6Ly9mbGV4Ym94ZnJvZ2d5LmNvbS8=)
- [Video Series - Flexbox](https://click.convertkit-mail.com/v8up6z99plimummdnwtghv2xemlls9hxg5z/58hvh7h57k5np2s7/aHR0cHM6Ly95b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PVBMNC1JSzBBVmhWak1TYjljMDZBalJsVHB2eEwzb3RwVWQ=)

## Highlight/s / New
### `flex` shorthand
```css
.flex-container {
	display: flex;
}

/**NOTE: default grow,shrink,basis - `flex: 0 1 auto` **/
.flex-container div {
	background: peachpuff;
	border: 4px solid brown;
	height: 100px;
	width: 390px;
	/** example 0 -- flex shorthand **/
	/** === *-grow: 1, *-shrink: 1, *-basis: 0 **/
	flex: 1;
	/**example 1 -- flex-grow **/
	flex: 1 1 0%;
	/** grow | shrink | basis **/
	/** ------ **/
	/**example 2 -- flex-shrink **/
	flex: 1 1 auto;
	/** OR (*equivalently*): ** **/
	flex: auto;
	/**example 3 -- flex-basis **/
}
```
### `space-evenly` *what `space-around` should've been*
```css
justify-content: space-evenly;
```

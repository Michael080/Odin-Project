# Selectors
>[!abstract] Most of this stuff is very basic. Noted here are only for new concepts, forgotten syntax, etc,.

## Chaining Selectors
- no spaces
- 2+ 
- works for chaining any combination of selectors, except for more than one **type selector**

### Examples
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```

**Class and Id Chains**
```css
/* applied to div */
.subsection.header {
  color: red;
}
/* applied to paragraph */
.subsection#preview {
  color: blue;
}
```

**Type and Class/Id Chains**
```css
/*type and class*/
div.subsection {
	font-weight: bold;
}

/*type and id*/
p#preview {
  text-decoration: underline;
}
```

# [CSS Foundations - #4 The Box Model -- Knowledge Check](https://www.theodinproject.com/lessons/foundations-the-box-model)
**1. From inside to outside, what is the order of box-model properties?**
- content *inside* (not really a property, at least a css property)
    - width
    - height
- padding *inside*
- border *perimiter?* (...ish)
- margin *outside*

>[!info] The linked "answer" doesn't mention *content*, or *width/height* but they seem applicable **UPDATE:** I was correct, other articles/videos linked do explicitly state these to be part of the *box-model*

> [This MDN article](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) DOES actually aknowledge the "content box" as containing content and is sized via properties: `width` and `height`.

---

**2. What does the box-sizing CSS property do?**
Sets parent-child inheritance & or default *content box-model* behavior vs *alternative box-model*
- `content-box`: *default* - `width` and `height` properties includes **ONLY the content** 
- `border-box`: `width` and `height` includes **ALL** properties **excluding `margin`**

---

**3. Would you use margin or padding to create more space between 2 elements?**
`margin`

---

**4. Would you use margin or padding to create more space between the contents of an element and its border?**
`padding`

---

**5. Would you use margin or padding if you wanted two elements to overlap each other?**
`margin` *via negative-margins*

---

**6. How do you set the alternative box model for all of your elements?
By using *universal* css selector @ top of stylesheet: `* { box-sizing: border-box; }`

---

**7. How do you center an element horizontally?**
`margin: <top/bottom> auto /*SYNTAX*/`
`margin: 1rem auto /*EXAMPLE*/`

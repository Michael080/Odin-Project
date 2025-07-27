# Lists - Knowledge Check
1. What HTML element is used to create an unordered list?
ul *unordered list* tag: `<ul></ul>`

2. What HTML element is used to create an ordered list?
ol *ordered list*: `<ol></ol>`

3. What HTML element is used to create list items within both unordered and ordered lists?
li *list* tag: `<li></li>`

4. What security considerations must be taken if you wish to use the target attribute to open links in a new tab/window?
Use `rel` attribute w/ value of `noreferrer` to prevent JavaScript interaction w/ the original page. 
`rel="noreferrer"` provides the following:
  - Prevents the newly opened page from knowing where the user came from by *hiding the referrer*.
  - Includes the behavior of `rel="noopener"`, which prevents JS interaction.

>[!example] `noreferer` in use
> `<a href="fake-ass-site.com" rel="noreferrer">Click Here for Muh' Fake Site</a>`

5. What is the difference between an absolute and relative link?

| type | scheme | domain | description |
| ---- | ------ | ------ | ----------- |
| absolute link | true | true | Links to pages on the web |
| relative link | false | false | Links to pages/resourses w/in current website |

6. Which element is used to display an image?
img element: <img>

7. What two attributes do images always need to have?
- `src`
- `alt`

8. How do you access a parent directory in a filepath?
`../`
 
 9. What are the four main image formats that you can use for images on the web?
 - jpg
 - png
 - gif
 - svg

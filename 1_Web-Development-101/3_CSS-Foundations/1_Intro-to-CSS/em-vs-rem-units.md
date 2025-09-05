# [Values & Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
>[!abstract] The above linked article is worth reading for review. Only that which methinks needs reinforcement is noted below.

## Relative Units `em` vs `rem`
>[!note] One day I will not forget the difference.

| unit | description |
| ---- | ----------- |
| `em` | *Originally based on the width of the letter 'M' of a given typeface of a given size.* The `em` unit is *relative to the font size of the element's parent.* |
| `rem` | Unit is *relative to the font size of the root element*. |

- `rem` is ideal for global values like font sizes, margin, and padding, where consistent spacing and layout is crucial, it is *particularly effective for responsive and accessible designs, as changes to the root font size cascades uniformly across the entire page*.

# [Conventional Commits](https://www.youtube.com/watch?v=OJqUWvmf4gg)

>[!abstract] Conventional Commits Spec
> This video is derived from [this spec](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## 5 Parts of a Commit Message
>[!example]
> ```
> <type[optional scope]:<description>
> [optional body]
> # blank line
> [optional footer(s)]
> ```

### Type
#### Recommended Types
##### Most Common
- **`fix`:** MUST be used when a commit represents a bug fix for your application
- **`feat`:** MUST be used when a commit adds a new feature to your application or library.

##### Add'l
`build`, `chore`, `ci`, `docs`, `style`, `refactor`, `test`

#### Scope *Optional*
- any add'l info
- must be a noun
- w/in parenthesis
- add `!` before colon if commit

### Description *Optional*
- short description
- written in the imperative

### Body *Optional*
- free form
- explain what changes your commit
  - *not all commits are complex/involved enough to require a **body***

### Footer(s) *Optional*
- often used for tracking/id numbers
- follows `body` and preceded by a blank line
- MUST use a *word token* followed by `:` or `#`

>[!example]
> ```
> Resolves #10
> Development-Method: Pair Programming
> With: Bob
> ```
> *Note the use of `:` and `#` separators*

## Auto-changelog
- skipped this section which *starts @3:05*ish

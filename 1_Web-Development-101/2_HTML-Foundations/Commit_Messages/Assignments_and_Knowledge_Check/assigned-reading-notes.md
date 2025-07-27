# [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
Outlines how to write commit messages primarily focused on *multi-line commits*.

**Why it matters**
How commit messages are written affects readability of the messages themselves but also the output of various other git tools such as `git log`.

>[!tips]
> ### Command
> Before reading this article I thought `...commit -m` was **the way** but not so:
>```bash
> # quick one-liner (still useful for self-explanatory changes)
> git commit -m
> 
> # multi-line commit *opens default editory*
> # **Note:** this will open w/ a bunch of default text comments that won't be included in the commit
> git commit
>```

### List Commits
`git log`

>[!example] Example output
> ```bash
> git log # =>
> commit 243c2cf1c2cdbd95dc3a32c69ab398e93f5ffe4a (HEAD -> master, origin/master, origin/HEAD)
> Author: Michael080 <mrollin23@protonmail.me>
> Date:   Sat Jul 26 19:51:54 2025 -0600
>
>    Complete "Knowledge Check" questions
>    - Unit "Html Foundations: Links & Images"

> commit d3d8134c8992463adf80e24a730ad3538a651abb
> Author: Michael080 <mrollin23@protonmail.me>
> Date:   Tue Jun 3 21:10:08 2025 -0600
>
>    Add example of href to local file via relative path
>```

## Establishing a Convention
A *commit message convention* should define the following:
- **Style** everything from markup syntax to punctuation should be addressed for the sake of consistency
- **Content** what info is included/excluded
- **Metadata** specify how *issue tracking IDs*, *pr request numbers*, etc,. should be referenced

## The 7 Rules
1. Separate subject from body with a blank line
  - improves readability of `git log` output
  - enables add'l utility of `git log --oneline`
    - prints just the subject line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
  - *this must be done manually (not via nvim config'd wrap)*
7. Use the body to explain what and why vs. how

>[!example] Example Commit Message
> ```bash
> Summarize changes in around 50 characters or less
>
> More detailed explanatory text, if necessary. Wrap it to about 72
> characters or so. In some contexts, the first line is treated as the
> subject of the commit and the rest of the text as the body. The
> blank line separating the summary from the body is critical (unless
> you omit the body entirely); various tools like `log`, `shortlog`
> and `rebase` can get confused if you run the two together.
> 
> Explain the problem that this commit is solving. Focus on why you
> are making this change as opposed to how (the code explains that).
> Are there side effects or other unintuitive consequences of this
> change? Here's the place to explain them.
> 
> Further paragraphs come after blank lines.
> 
>  - Bullet points are okay, too
> 
>  - Typically a hyphen or asterisk is used for the bullet, preceded
>    by a single space, with blank lines in between, but conventions
>    vary here
> 
> If you use an issue tracker, put references to them at the bottom,
> like this:
> 
> Resolves: #123
> See also: #456, #789
> ```

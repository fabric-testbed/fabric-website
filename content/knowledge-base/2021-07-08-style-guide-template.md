---
title: Style Guide / Template   (INPROGRESS)
slug: style-guide-template
date: "2021-07-08"
date_modified: "2021-07-14"
author: Jack Locke
status: draft
wp_id: 103
views: 24
---

Table of Contents

-   [Intro / Abstract](#htoc-i)
-   [First Section (H2)](#htoc-f)
-   [Second Section (H2)](#htoc-s)
-   [Third Section (H2)](#htoc-t)
-   [Links and Additional Information](#htoc-i1)

#### Intro / Abstract

This article is a style guide for internal FABRIC use when publishing new articles (Luckily it seems as if WordPress is going to handle the majority of the style for us) This should be considered as a general guideline to keep articles as consistent as possible for users, but as always form should follow function.

Articles should include a short summary of their purpose, and scope, and depending on the intent, include up to 3 links for similar content incase this is not the page the user intended.

[Link 1 - Similar Article](https://learn.fabric-testbed.net/?ht_kb=designing-a-node-test)

[Link 2 - Name of Website to the right if external link](http://www.google.com) (www.google.com)

for any article containing 3 or more headings, include a Table of Contents for easy navigation through the article.

## First Section (H2)

This is an example heading for the first topic.

**Bold title for block of code** (if needed, The point of this is specifically to NOT generate an additional heading in the table of contents)

```python
def cool_code_block(self):
    print('This is the best code block ever!')
    print('If code is long and would potentially run off the'
          'edge, use multiple lines or manually wrap code to avoid' 
          'generating a scrollbar')
#  Note: Code naturally wraps in the editor, but will scroll in the
#        the actual article if not returned to the next line. you
```

in the Block options, choose the appropriate code language and use 'GH Colors (Light)' Theme (THIS THEME CHOICE IS A PLACEHOLDER AND CAN BE DEBATED)

## Second Section (H2)

Tables are fun and make your content more accessable

| TITLE FOR TABLE (Bold) | Column 1 | Column 2 | | --- | --- | --- | | Jack's content | 3 | snorkle | | Paul's Content | 7 | apricot | | Nanna's Content | 65 | hogwarts | \*Captions help with understanding and orientation. Use them!\*

## Third Section (H2)

TODO: Come up with conventions for widgets

put a separator at end of article before links

* * *

## Links and Additional Information

Always include links to similar information

[Link 1 - THIS IS A LINK!](https://learn.fabric-testbed.net/?ht_kb=designing-a-node-test#htoc-l)

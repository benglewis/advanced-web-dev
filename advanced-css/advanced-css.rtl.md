---
lang: he
dir: rtl
title: CSS מתקדמת
to: revealjs
slide-level: 2
number-sections: true
output:
  html_document:
    template: ../reveal-template.html
css: ../fix-rtl.css
fragmentInURL: true
history: true
slideNumber: \'c/t\'
...

# סיפור של NASA

- מה הקשר בין אמירקאיים, אורופאיים ופיצוץ של לווין מיועד לעיקפת מאדים?
- טעויות ביחידות
- חברת Lockheed Martin החזירה לקרקע lbs במקום Ns
- מסר הסיפור: יחידות חשובות!
- קישור להמשיך קריאה: [קישור לסיפור המלא](https://everydayastronaut.com/mars-climate-orbiter/)

# יחידות מיוחדות

ישנם כמו יחידות מיוחדות ב-CSS

## אחוזים

- התנגות של `%` שונה תלוי באיפה שימוש
- בד"כ ביחס ל-element האב
- עבור margin ו-padding מדובר באחוז של הרוחב של element האב

# יחידות fontים יחסים

- `em`{.css}: הכפלה של גודל ה-font של ה-element
- `rem`{.css}: הכפלה של גודל ה-font של `<html></html>`{dir=ltr .html}

# יחידות מבוססות גודל החלון הצפייה

- `vh`{.css}: אחוז של גודל הגובה של החלון
- `vw`{.css}: אחוז של גודל הרוחב של החלון
- `vmin`{.css}: אחוז של גודל של הקטן מבין `vh` ו-`vw`
- `vmax`{.css}: אחוז של גודל של הגדול מבין `vh` ו-`vw`

# מתקמטיקה בCSS

- הפונקציה `calc()`{dir=ltr .css} היא הפונקציה היחידה הקיימת ב-CSS
- היא מאפשרת חישובים של property values כולל כמה יחידות שונות
- `height: calc()`{dir=ltr .css}

# הדגמת viewport units

- ![](https://i1.wp.com/css-tricks.com/wp-content/uploads/2017/04/pure-responsive.gif?resize=1024%2C442&ssl=1)
- יש כמה דוגמאות מגניבות ב[כתבה](https://css-tricks.com/fun-viewport-units/)

# box-sizing

- מגדיר האם `padding`{.css} הוא נוסף אל ה-`width`{.css} או ה-`height`{.css} של ה-element או כלול
- `box-sizing: content-box`{dir=ltr .css} מגדיר כי ה`padding`{.css} _לא כלול_
- `box-sizing: border-box`{dir=ltr .css} מגדיר כי ה`padding`{.css} **כלול**

# שיטות הצגה

- יש טיפוסי display שונות כגון flexbox ו-grid
- השיטות אלו משפיעות על ה-layout של כל ה-elements

# `display: flexbox`{dir=ltr .css}

- מונחים:
- ![](https://www.freecodecamp.org/news/content/images/2019/10/image-32.png)

## flexbox container properties

```css
display: flexbox | inline-flex;
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
justify-content: flex-start | flex-end | center | space-between | space-around;
align-items: flex-start | flex-end | center | baseline | stretch;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

## flexbox items/elements properties

```css
order: <integer>;
flex-grow: <number>; /* default 0 */
flex-shrink: <number>; /* default 1 */
flex-basis: <length> | auto; /* default auto; default size of element before remaining space distributed */
flex: none | [ < "flex-grow" > < "flex-shrink" >? || <
  "flex-basis" > ];
```

## flex-direction

![](https://cdn-media-1.freecodecamp.org/images/wEg7wdKEfv9-bqaiB-t9hzOapBPiqZVYNFIh)

## flex-direction - reverse

![](https://cdn-media-1.freecodecamp.org/images/zYdQGSmhtMyqcAbEUDoEehohC8E-gtgvQx6b)

## justify-context

![](https://cdn-media-1.freecodecamp.org/images/OBGVr-DdHiQ2y9VOWuhXqXeGnFnyDSBTx7hv)

## align-items

![](https://cdn-media-1.freecodecamp.org/images/UgsULw0Kk49l-l1wSzeurYNJKCmcA-01oE8a)

## align-content

מגדיר את הרווח בין שורות

## align-self

![](https://cdn-media-1.freecodecamp.org/images/HbnMZT330ylw5idocqrjOfp9DrlZt9JrJm9o)

## סיכום alignment

![](http://i.stack.imgur.com/uu2tP.png)

## flex-grow

![](https://poiemaweb.com/img/flexbox-flex-grow-2.jpg)

## flex-shrink

![](https://webdesign-trends.net/wp/wp-content/uploads/2019/01/flex-shrink-1024x301.png)

## flex-basis

![](https://poiemaweb.com/img/flexbox-flex-basis.jpg)

## תרגיל

- הכנסו ל-[Flexbox Defense](http://www.flexboxdefense.com) ותעשו כמה שיותר מהתרגילים
- נדרש למקם את המגדלים כך שיש סיכוי יותר גבוהה לירות באויבים
- השתעממת? יש עוד תרגיל [Flexbox Froggy](https://flexboxfroggy.com)

## `display: grid`{dir=ltr .css}

- סטרון מבוא ל-`grid`{dir=ltr .css} [CSS Grid in 100 seconds](https://www.youtube.com/watch?v=uuOXPWCh-6o)
- נעבר יחד על האתר [Learn CSS Grid](https://learncssgrid.com/#implicit-grid)
- סרטון מסכם [The Joy of CSS Grid](https://www.youtube.com/watch?v=705XCEruZFs)

## תרגיל

- הכנסו ל-[Grid Garden](https://cssgridgarden.com) ותעשו כמה שיותר מהתרגילים

# משחקים להפסקה

הכנסו ל-[Pure CSS Games](https://speckyboy.com/pure-css-games/) ותהנו!

# טרנספורמציות

- מוגדרים ע"י ה-property `transform` עם פרמטרים כמו `perspective`, `scale`, `skew`, `translate`, `rotate` ו-`matrix`
- אפשר להשתמש בכמה טרנספורמציות ביוחד ב-property אחד
- אפשר גם לבצע טרנספורמציה מ-origin שונה ע"י `transform-origin`

<aside class="notes">
  Perspective is essentially like the distance from the 3D viewport to present.
  Scale, translate and rotate can be called with variants for X, Y & Z (scaleZ for example) and skew with X & Y variants (skewX for example)
</aside>

## טרנספורמציות תלת-ממדיות

- יש גם גרסאות תלת-ממדיות כגון `translate3d`, `scale3d`, `rotate3d` ו-`matrix3d`
- חשוב להשתמש ב-`transform-style: preserve-3d`{dir=ltr .css} במידה ויש element תלת ממדי כילד של עוד element תלת ממדי

## דוגמאות של טרנספורמציות

- [CSS Transform](https://css-transform.moro.es)
- [דוגמא בסיסית](https://codepen.io/rlacorne/pen/eKfkh)
- דוגמא של מה שאפשר לעשות [CSS bar animation](https://css-tricks.com/how-i-live-coded-my-most-hearted-codepen-demo/)

# אנימציות

- מוגדרים ע"י ה-property `animation`{.css} ו-`@keyframes`{dir=ltr .css}
- האנימציה יש לו שם שמפנה ל`@keyframes`{dir=ltr .css}, זמן האנימציה, שיטת אנימציה בזמן, השהייה, ספרית איטרציות, כיוון, באיזה מצב לסיים אנימציה ומצג ניגון
- [MDN CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Animista](https://animista.net/play/basic)

## מעברים

- אפשר להגדיר מעבר בין שני ערכי properties בCSS ע"י ה-property `transition`{.css}
- זה מתנהג כמו animation אבל מגדירים איזה properties לבצע אנימציה עבורם, זמן המעבר, שיטת אנימציה בזמן וזמן השהייה

- דוגמא עם כמה מעברים [Using Multi-Step Animations and Transitions](https://css-tricks.com/using-multi-step-animations-transitions/)

# Media Queries

- אפשר לבדוק מצב הדפדפן ע"י `@media check`{dir=ltr .css}
- בד"כ משתמשים בזה לבדוק גודל החלון ולהגביל חוקי CSS אל גדלי מסך ע"י <br/> `@media (min-width: 700px)`{dir=ltr .css} למשל
- אפשר גם לבדוק מה הmedia type, כלומר האם מדובר בהדפסה או מכשיר קריאה ו[פרמטרי מכשיר](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- אפשר לחבר בין media query אופרטורים ע"י `not`, `and` ו-`only`

# ייבוא

- אפשר לייבא עוד קובץ CSS מקובץ מסויים ע"י `@import`{dir=ltr .css}
- אפשר להוסיף פרמטר שני שהוא media query לבדוק האם לייבא את הקובץ

# פונטים

- אפשר להשתמש ב-fontים לא סטנדרטים דרך @font-face שמאפשר טעינת fontים מהרשת לשימוש ב-CSS
- ```css
  @font-face {
    font-family: "MyWebFont";
    src: url("myfont.woff2") format("woff2");
  }
  ```
- אפשר להשתמש ב-`@import`{dir=ltr .css}

# תפתח CSS עם קוד

- אפשר להשתמש בפונקציות, משתנים ולולאות ב-CSS עם משתמשים ב-pre-processor, [Sass](https://sass-lang.com) הכי נפוץ היום
- היום כבר עדיף להשתמש ב-PostCSS שבעצם בסיס ל-[plugins](https://www.postcss.parts) ויכול לעשות הרבה יותר מאשר Sass איתם והרבה פחות, תלוי בצרכים והוא הוא [מאוד מהיר](https://github.com/postcss/benchmark)
- [מעבר מ-Sass ל-PostCSS](https://simonecorsi.medium.com/moving-from-sass-to-postcss-why-what-and-how-f68b1bc760dc)

# קישורים

:::{dir=ltr}

- [CSS Only](https://www.youtube.com/watch?v=CG__N4SS1Fc)
- [Advanced CSS exercises](https://draftin.com/documents/499936?token=fgK6zU_Ojo65goYklgWfn2_V9v2lKSJD64_8ta2tSzjqnBp16_kEUfsFP8OBWGZCsZUtzCMbo3M5HGWeIMO7lO0)
- [3D CSS - lighting, animations, and more!](https://www.youtube.com/watch?v=NdftnCDwKaU)
- [Sass with auto-refresh (and more) made easy](https://www.youtube.com/watch?v=wYWf2m_yzBQ)
- [Initial doesn't do what you think it does](https://www.youtube.com/watch?v=6UwISwr_yUo)

:::

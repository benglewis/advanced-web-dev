---
lang: he
dir: rtl
title: פיתוח נכון ב-web
to: revealjs
number-sections: true
output:
  html_document:
    template: ../reveal-template.html
css: ../fix-rtl.css
fragmentInURL: true
history: true
slideNumber: \'c/t\'
...

# Repository templates

- אפשר ליצור repository ב-Git שהוא template לפרויקטים
- ב-Vite ממליצים על זה
- אפשר להשתמש בכלי בשם [degit](https://github.com/Rich-Harris/degit)

#

![](https://s-media-cache-ak0.pinimg.com/736x/17/57/e6/1757e69fe79e220b9cdd0775231894a8.jpg){height=475px}

# Abstract Syntax Tree

- [WTF is an Abstract Syntax Tree?](https://www.youtube.com/watch?v=mi6DoxNEN6w)
- ב-JS משתמשים ב-AST הרבה כדאי לבצע המרות שונות, איזה?
- עבור בדיקת linting ו-formatting ע"י Prettier
- [JS AST Visualizer](https://resources.jointjs.com/demos/javascript-ast)
- [AST Explorer](https://astexplorer.net)

## Linting

- מונע באגים, בעיות אבטחה ו-code debt
- משתמשים ב-ESLint
- ניתן לקנפג אותו ומומלץ לבחור חוקים במיוחד, למשל `no-eval` הוא חוק חשוב
- אפשר להתבסס על על config של חברה אחרת למשל [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules)
- יכולת של תיקון אוטומטי מבוסס על AST כדי לא להכניס באגים
- נשתמש גם כן ב-[SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)

##

![](https://cbsnews3.cbsistatic.com/hub/i/r/2015/06/11/d36658bd-3547-4254-8e03-7ef21e45d456/thumbnail/1200x630/edb694e5131b2460bee6ef6badbf8e84/alexa-meade.jpg)

## Formatting

- חשוב שהקוד יראה כמו דבר אחד
- היו אופציות מבוססות על חוקי שינוי, אבל הם היו עלולים לשבור קוד
- כאשר משתמשים ב-Prettier ה-AST דואג לכך שאין שינוי במשמעות הקוד
- [ב-linters הבדלים ב-code-style יוצרים שגיאה פתירה, ב-prettier הם נפתרים אוטומטית](https://prettier.io/docs/en/comparison.html)
- אפשר לקנפג אותה ע"י `.prettierc`{dir=ltr}

## Codemod

- מאפשר שינוי אוטומטי של פרקי קוד
- משתמש ב-AST
- אפשר להריץ אותם ע"י [JS Code Shift](https://github.com/facebook/jscodeshift#transform-module)

## Git Hooks

- דרך Git Hooks אפשר להריץ תהליכים אוטומטית ברגע שבו פועלות Git בוצעו
- למשל אפשר לבצע פועלה לפני כל `commit`, ב-`stage` או אחרי `push` אוטומטית
- ב-JS אפשר להוסיף Git Hooks בקלות עם [Husky](https://github.com/typicode/husky)
- ואפילו אפשר להריץ תהליכי lint לפני קומיט עוד יותר בקלו עם [lint-staged](https://github.com/okonet/lint-staged)
- [אפשר גם להוסיף Jest כדי להריץ גם בדיקות](https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/)

## editorconfig

- לא בהכרח כולם יאבהו VSCode
- הקובץ editorconfig ו-plugins שלו לאפליקציות שונות מסנכרנים קונפיגורציה
- רווח נדרש, סיומות שורות, charset, ו-root פרויקט מסונכרן
- לשאר ההגדרות יש ל-VSCode יכולת שמירת Workspace Settings לכל פרויקט

## תרגיל

- [דוגמאת plugin ל-ESLint](https://gist.github.com/bjrnt/2bd3fecd7c842f5813a2#file-no-full-fp-lib-js)
- [תרגיל](https://github.com/kentcdodds/asts-workshop/#setup)
- רק לעשות את 0, 1 ו-2
- שאר התרגילים נעבור עליהם זריז
- [לשימוש עתידי ליצור plugin ל-ESLint](https://medium.com/@bjrnt/creating-an-eslint-plugin-87f1cb42767f)

# כלי פיתוח ל-Web

- מה אמרתי לגבי VSCode... כולם אוהבים VSCode 😂

## פיצ'ורים שאולי לא הכרתם:

- Ctrl / ⌘ +P ו-`>` ו-`@`
- Alt + לחציה
- Alt + חצים

## [Insomnia](https://insomnia.rest)

- בדיקת API
- כמו Postman אבל יותר חזק

## VSCode extensions

- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex)
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode&ref=hackernoon.com)

# פיתוח מובטח

## וקטורי תקיפה

- תקיפות באמצע ערוץ התקשורת
- תקיפת רכיבים פנימים כגון בסיס נתונים דרך ממשק חוץ
- תקיפת גישה לאזורים שאינם אמורים להיות פתוחים למשתמש זה
- תקיפה מאתרים אחרים אל האתר שלך
- תקיפה דרך ניגון חזור
- תקיפות דרך חולשות מוכרות

## MITM

- [Man in the Middle](https://www.hacksplaining.com/exercises/unencrypted-communication)
- חשוב להשתמש ב-HTTPS עם TLS כדי למנוע תקיפות בצד ג' באמצע

## Injection

- שימוש ב-`eval` כלשהו בקוד עלול לתת למשתמשים באתר גישה לכל השרת!
- ה-Docker שלנו והרשאות מוגבלות ברמת כל שירות מגבילות את התקיפה הזאת
- ו-linting יכול לתפוס טעויות כאלו, אבל חשוב מאוד לבצע sanitization לכל קלט שמגיע מהמשתמש
- כלומר, לסנן שרק טקסט/מספר/פרמטרים ולידיים התקבלו

## DB Injection

- חשוב גם להבין את התקיפות האפשריות ב-DB, למשל [SQL injection](https://www.hacksplaining.com/exercises/sql-injection) או MongoDB injection
- חשוב לא להשתמש ב-`where`, `mapReduce` או `group` עם נתונים המגיעים מהמשתמש כי כולם כברירת מחדל מקבלים JS להריץ!
- גם קבצי JSON עלולים להיות מקור ל-injection

## הרשאות והזדהות

- חשוב לבדוק מי מהמשתמש ע"י שם משתמש וסיסמא ולשמור את הזהות ב-cookie
- חשוב לא לתת למשתמשים לא מורשים לגעת במשאבים שאין להם גישה אליו
- אפשר להשתמש ב-[OpenID Connect](https://connect2id.com/learn/openid-connect) להתחברות ואימות

## XSS

- [XSS: Cross Site Scripting example](https://www.hacksplaining.com/exercises/xss-stored)
- אפשר להגן מזה עם sanitization, אבל אפשר גם לא לאפשר הרצת JS מ-domain אחר ע"י CSP
- ב-CSP: Content Security Policy אפשר להגדיר מאיזו מקורות לאפשר הרצת JS באתר שלך
  - `Content-Security-Policy: default-src 'self' trusted.com *.trusted.com`

## CSRF

- [CSRF: Cross Site Request Forgery example](https://www.hacksplaining.com/exercises/csrf)
- לא משתמשים ב-POST כדי לשנות מידע
- שימוש ב-token שנגיש אל JS שרץ על האתר בלבד והעברתו ל-header כך שאין להאקר דרך לקרוא ולהעביר אותו
- SOP: Same Origin Policy מונעת תקיפות ושימוש באתר ב-JS
- CORS: Cross Site Origin Resource Sharing מאפשר שימוש מוגדר של האתר באתרים אחרים

## תקיפות ניגון חוזר

- התוקף "מנגן" חזרה את הבקשה האחרונה
- אפשר למנוע ע"י שימוש ב-token זמני לכל פועלה

## חולשות מוכרות

- חשוב לסרוק את כל הרכיבים וספריות לחושלות מוכרות
- אפשר לסרוק NPM packages ב-[Snyk Advisor](https://snyk.io/advisor/)
- אפשר לסרוק Docker images ע"י [`docker scan my-image-name`](https://snyk.io/learn/docker-security-scanning/) או ע"י [Clair](https://www.redhat.com/en/topics/containers/what-is-clair) של RedHat דרך Quay
- אם יש פחות תלויות יותר קל לדעת שהן לא נגועות

---
lang: he
dir: rtl
title: "יום רביעי: תרגיל JS ו-Cesium"
to: revealjs
number-sections: true
output:
  html_document:
    template: ../reveal-template.html
css: ../fix-rtl.css
fragmentInURL: true
history: true
toc-title: "סקר היום"
slideNumber: \'c/t\'
...

# תרגיל JS

[Clone GitHub: https://github.com/benglewis/advanced-js-exercise](https://github.com/benglewis/advanced-js-exercise)
Use [Stackblitz](https://stackblitz.com/fork/node) if you don't have Node.JS and can't install it locally

# Internationalization

- יש תמיכה בשפות שונות ב-ES6
- [אפשר להשוות ולסדר מחרוזת עם אותיות מקומים](http://es6-features.org/#Collation)
- [אפשר להציג מספרים לפי שיטה מקומית](http://es6-features.org/#NumberFormatting)
- [אפשר להציג מטבעות לפי שיטה מקומית](http://es6-features.org/#CurrencyFormatting)
- [אפשר להציג תאריכים לפי שיטה מקומית](http://es6-features.org/#DateTimeFormatting)

# Cesium

- סיפרית JS שמאפשרת הצגת מפות מקוייקות ואיכותיות באתר אינטרנט
- מבוססת על טכנולוגית web בשם WebGL
- ממשק WebGL מאפשר לה להאיץ את הרצה בדפדפן ע"י כרטיס הגרפי של המחשב
- לסזיום יש יכולות מאוד מתקדמות
- יש גם אופציה לאינטרקטיביות של הישויות שהוצגו ע"ג המפה
- יש לה יכולת לעבור בין תצוגת תלת-ממד לדו-וחצי -דו-ממד בזמן ריצה ע"י widget

## יכולות של Cesium

- הצגת מפות תצ"א
- הצגת מפותגובה
- הצגת צורות
- כותרות
- מודלים תלת-ממדים סטטים ואלו שזזים לאורך זמן

# למה להשתמש ב-Cesium?

- בערך הספריה היחידה שמסוגלת להציג תצוגת כדור הארץ בתלת-ממד בדפדפן שהיא Open Source
- מתחרים אחרים כמו MapBox אומנם יותר יפים, אבל אין להם את היכולות המתקדמות כגון מפות תלת-ממדיות

# מושגים של Cesium

- מצלמה, ה-camera אחריאת על נוקדת מבט של ה-view בדפדפן של כדור הארץ
- ה-viewer אחריאת על render של כל המפות ב-Cesium אבל אפשר לנהל מתי היא מרנדרת

## Entities

- ישות high-level משאגד כל מיני ישויות גרפיות שמוצגות ב-Cesium
- יכול להכיל כל סוג של גרפיקה בין אם זה קופסה, אליפסה או אליפסויד, מודלים תלת-ממדים בסטנדרט glTF שמותאם ל-OpenGL ו-WebGL או נקודות או צורות למשל
- ה-Entity בעל מיקום ואורינטציה
- [הדגמות](https://cesium.com/learn/cesiumjs-learn/cesiumjs-creating-entities/#picking)

## Imagery

- ב-Cesium אפשר להציג תצ"א ומפות רגילות ולשלב בניהם עם מפות גובה
- ב-Cesium קוראים למפות אלו שכבות Imagery
- אפשר לראות [דוגמאות](https://cesium.com/learn/cesiumjs-learn/cesiumjs-imagery/#imagery-providers-vs-layers) בהן משתמשים ב-API חיצוני עם המון אריכים בגדלים שונים ש-Cesium פונה אליהם ליצור תמונה איכותית וגם דוגמא עם תמונה אחת פשוט עבור כל כדור הארץ
- אפשר גם להשתמש [בתיקייה](https://cesium.com/learn/cesiumjs/ref-doc/global.html?classFilter=build#buildModuleUrl) ב-`./public` בתור שירות
- אפשר להציג מפות גובה ע"י [`terrainProvider`](https://cesium.com/learn/cesiumjs-learn/cesiumjs-terrain/)

## GeoJSON

- סטנדרט לאובייקטים/צורות גיומרטים
- אפשר להשתמש בו ב-Cesium
- לא מגדיר את עיצובם של הישויות
- אין תמיכה בישויות מורכבות כגון מודלים תלת-ממדים
- [דוגמא](https://sandcastle.cesium.com/index.html?src=GeoJSON%2520simplestyle.html)

## TopoJSON

- מוסיף יכולת topography אל GeoJSON מורכב מ-arcs של ישויות גיוגרפיות
- מאפשר דחיסת צורות מורכבת לעומת GeoJSON
- [דוגמא](https://sandcastle.cesium.com/index.html?src=GeoJSON%2520and%2520TopoJSON.html)

## ביצועים

- יש כלי בשם `frameRateMonitor` שמאפשר לך לקבל events במקרה ו-Cesium לא מצליחה לרנדר בFPS שדרשת
- אפשר לנהל מתי Cesium מרנדר מחדש דרך `requestRenderMode: false` וקריאות ל`view.scene.requestRender()` ואפשר להגדיר אחרי כמה זמן בסימולציה הוא מרנדר עם `maximumRenderTimeChange: timeInSeconds`
- נראה את זה ביחד: [https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)

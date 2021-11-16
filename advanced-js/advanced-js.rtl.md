---
lang: he
dir: rtl
title: "יום שלישי: JS מתקדם"
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

# לו"ז בוקר

| שעה                                                 | נושא        |
| --------------------------------------------------- | ----------- |
| התכנסות                                             | 9:00-9:15   |
| [מנוע של JS](#מנוע-של-js)                           | 9:15-9:45   |
| [לולאות `for`{.js}](#נושא-שולי-לולאות-for)          | 10:00-10:15 |
| [תכנות פונקציונאלי](#תכנות-פונקציונאלי)             | 10:30-11:00 |
| [שיטות immutable על מערך](#שיטות-immutable-על-מערך) | 11:15-11:30 |
| הפקסת צהריים                                        | 11:30-13:00 |

# לו"ז צהריים

| שעה                                                                    | נושא        |
| ---------------------------------------------------------------------- | ----------- |
| [בחינת ביצועים, שיפורם ודיבוג ב-JS](#בחינת-ביצועים-שיפורם-ודיבוג-ב-js) | 13:00-13:30 |
| [The Event Loop](#the-event-loop)                                      | 13:45-14:15 |
| [תכולות מתקדמות](#תכולות-מתקדמות)                                      | 14:30-15:15 |
| [איטרציה](#איטרציה)                                                    | 15:30-16:00 |
| [שגיאות](#שגיאות-אופרטיביות-לעומת-תיכנותיות)                           | 16:15-16:30 |
| [Progressive Web Applications](#progressive-web-apps---pwas)           | 16:30-17:00 |

# מנוע של JS

- שפת JS מומש ע"י מנועים שונות
- פעם הסטנדרט לא היה מומש באותה צורה
- היום יש רק 3 מנועים נפוצים: V8, JavaScriptCore, SpiderMonkey

## V8 {.v8-slide}

![](https://v8.dev/_img/v8-outline.svg){height=150px}

::: {.v8} :::

- מנוע של Chrome
- גם מנוע של Node.JS, Deno ושל Electron
- רשמית רץ על x64, IA-32 ו-ARM
- יש לו interpreter נקרא Ignition
- יש לו JIT compiler בשם TurboFan
- יש לו Garbage Collector
  :::

## Just In Time Compilation (JIT) {dir=ltr}

::: {dir=rtl} :::

- מקמפל בזמן ריצה
- משפר ביצועים לעומת interpreter בלבד
  :::

<aside class="notes">
    פולי קפה + מים + סוכר + חלק = כוס קפה מוכנה
    מכונת קפה = Interpretation
    קפסולות = Compiled
    קנקן קפה = JIT
    פעם V8 היה משתמש בכמה JITים שונים וב-interpreter יותר verbose אבל החליטו כי הזיכרון שהוא תפס היה יותר מדי ותהליך ה-JIT היה איטי יותר עקב צורך בפרסור הקוד פעמיים
</slide>

## Ignition {.hide-title}

![](https://v8.dev/_img/v8-ignition-outline.svg){height=150px}

## Garbage Collector (GC) {dir=ltr}

::: {dir=rtl} :::

- ניהול זיכרון אוטומטית
- אוסף ומשמיד "זבל"
  :::

<aside class="notes">
    זבל = משנתים/זיכרון לא בשימוש
</aside>

# נושא שולי:<br/> לולאות `for`{.js}

- יש 4 דרכים שונות לעבור על רשימה ב-JS בעלי המילה for
- `for`{.js} רגיל, `for _ in _`{.js}, `for _ of _`{.js}, `_.forEach(fn)`{.js dir=ltr}

## `for`{.js} רגיל

- מבוסס על אורך הרשימה
- ```js
  for (let i; i <= list.length; i++) {
    let item = list[i];
  }
  ```

<aside class="notes">
    כלומר החייל שלא יכול להגדיל ראש ומבקש הוראות מפורשות
</aside>

## `for _ in _`{.js dir=ltr}

- מבוסס על keys של object (ומערך הוא object)
- ```js
  for (let i in list) {
    let item = list[i];
  }
  ```

<aside class="notes">
    תחשבו על זה שאתה מפרק את הobject ועובר על חלקיו
    לא עובר על מפתחות שהן Symbols
</aside>

## `for _ of _`{.js dir=ltr}

- מבוסס על iteration
- ```js
  for (let item of list) {
    ...
  }
  ```

<aside class="notes">
    כלומר האינויטיבי
</aside>

## `_.forEach(fn)`{.js dir=ltr}

- מבוסס על iteration ו-callbacks
- ```js
  list.forEach((item) => ___);
  ```

<aside class="notes">
    כלומר הוראות לפני, רשימה אחרי
</aside>

# תכנות פונקציונאלי

- תפיסת תכנות שונה מאוד מאשר OOP מבוססת פונקציות
- פונקיות מקבלות פוקניות כפרמטרים כדי לעשות specialization של התהגותו
- אפשר לשמור פונקציה במשתנה ולהעביר ולחזיר פונקציות מפונקציות אחרות

<aside class="notes">
    איך היית ממדל מפעל הכי טוב בתכנות?
    יש לו קלט ופלט על קו הייצור
    טבח = פונקציה החיצונית (המקבל הוראות מפורשות)
    מתכנון = פונקציה הפנימית (ההוראות המפורשות)
</aside>

## פונקציות טהורות (Pure fns) {.pure-slide}

![](<https://fthmb.tqn.com/hu9DwN15l4ci0hZDqEoJBp61R0A=/6044x4244/filters:fill(auto,1)/night-diamond-102635591-58a8f02a5f9b58a3c950a6a5.jpg>){height=75px .borderless}

- פונקציה שפלטיה לא תלויים בשום דבר חוץ מקלטיה ואינה נוגעת במשאבים מחוץ לסקופ אחריותיה
- כלומר, פונקיצה שאינה "מזוהמת" משאר הקוד/מידע/נתונים בעולם
- והפונקציה אינה גורמת להשפעות צד (כלומר side-effects)
- בהגדרה אין לגישה לזיכרון הוגדר מחוץ לפונקציה או קריאות ל-I/O מכל סוג שהוא

<aside class="notes">
  מה הן דוגמאות של פונקציות שהן לא pure?
</aside>

## Immutability

לא משתנה בזמן, כלומר אחרי הגדרה קבועה לאורך הרצת האפליקציה

<aside class="notes">
  משתנים קבועים (לא רק const שזה רק מצביע קבוע, אלא משתנים שהם immutable) הם יותר קלים לדבג
  זה כי אפשר לדעת מאוד בקלות איפה בעיות בזה שמשתנה היא שם לאזור מסויים בקוד ולנתונים קבועים מסויימים
  נתונים הקבועים האלו יכולים להיות שונים תלוי בקלט הניתן לאפליקציה
</aside>

## Currying

- ![](https://i1.wp.com/cooktogether.com/pinpics/uploads/2018/10/homemade-curry-powder.jpg?ssl=1){height=200px .borderless}
- פונקציה שמחזירה פונקציה
- מאפשר ספציאליזציה של פונקציות
- ```js
  const createLog = (level) => (msg) => console.log(`[${level}] msg`);
  const logInfo = createLog("INFO");
  logInfo("test"); // Logs "[INFO] test"
  ```

<aside class="notes">
  - Called this way because "ingredients" are mixed in, one-by-one
  - You can use this technique to perform pre-processing steps on pairs on ingredients to improve performance
</aside>

# שיטות immutable על מערך

## `myArray.filter(fn)`{dir=ltr}

- ![](https://tse1.mm.bing.net/th?id=OIP.Bc9LaitgvOdyrLxOAzSCXQHaHa&pid=Api){height=125px .borderless}
- ```js
  list.filter((item) => Boolean);
  ```
- דוגמא עבור סינון (והסרת) מספרים אי זוגיים
- ```js
  const number = [1, 2, 3, 4];
  numbers.filter((n) => n % 2 === 0); // [2, 4]
  ```

<aside class="notes">
  Allows items that return true for the filter function to pass
</aside>

## `myArray.map(fn)`{dir=ltr}

- ![](https://atendesigngroup.com/sites/default/files/array-map.png){height=200px .borderless}
- ```js
  list.map((item) => ___);
  ```

<aside class="notes">
  "Maps" items from one type to another
  Or better thought of as "transforms" items from some input to an output for each item
</aside>

## `myArray.reduce(fn)`{dir=ltr}

- ![](https://atendesigngroup.com/sites/default/files/array-reduce.png){height=200px .borderless}
- ```js
  list.reduce((item, acc) => ___, initialAcc);
  ```

<aside class="notes">
  יצירת משתנה ע"י "צבירה"/העברה של ערכים במערך. בכל "סיבוב", acc הופך להיות הערך הוחזר מהפונקציה
</aside>

## `Array.from(init, initFn)`{dir=ltr}

- ```js
  Array.from({ length: n }, (_, i) => i);
  ```

<aside class="notes">
  אפשר לייצר מערך בגודל מסויים ע"י קריאה ל-Array.from ואפשר לאתחל את הערכים ע"י פונקציה
</aside>

## פונקציות נוספות על מערכים

| פונקציה                        | שימוש                                |
| ------------------------------ | ------------------------------------ |
| `Array.some(fn)`{dir=ltr}      | מבצע boolean OR על כל המערך          |
| `Array.every(fn)`{dir=ltr}     | מבצע boolean AND על כל המערך         |
| `Array.every(i1, i2)`{dir=ltr} | מחזיר מערך מורכב מאיברים בין i1 ו-i2 |

# בחינת ביצועים, שיפורם ודיבוג ב-JS

- ![](https://javascript.info/article/debugging-chrome/chrome-sources-debugger-trace-1.png){height=200px .borderlesss}
- נעבור רגע על ה-debugger של Chrome
- נעבור רגע על ה-profiler של Chrome

<aside class="notes">
  משמעות של debugger = כלי למציאת באגים שמאשר עצירה בשורות הרצה ובדיקת משתנים/ביטויים
  להריץ אפליקציה לדוגמא: cd ~/Programming/GlobusHakton-Frontend/globus-hackathon && node --version && npm start
</aside>

# The Event Loop {dir=ltr}

::: {dir=rtl} :::

- ברירת מחדל asynchronous
- ![](https://javascript.info/article/event-loop/eventLoop.svg){height=250px}
- כלומר, הרצה היא non-blocking לרוב הפועלות
  :::

## Web Workers {dir=ltr}

::: {dir=rtl} :::

- דרך להריץ קוד "ברקע"
- אפשר לתקשר עם the event loop דרך הודעות שמכילות תכון שהוא serializable
- אי אפשר לגעת ב-DOM ב-Web Worker
- יוצרים ע"י קריאה <br/> ל-`const worker = new Worker(filename)` עם קובץ JS
- אפשר לשלוח הודעות דרך `postMessage` ולקבל הודעות דרך `onmessage`
- נראה דוגמא ביחד: [MDN Fibonacci worker](https://github.com/mdn/fibonacci-worker)
  :::

## Worker threads {dir=ltr}

::: {dir=rtl} :::

- מקביל ל-Web Workers ב-Node.JS
- עדיף לא להשתמש בהם עבור פועלות I/O
- ![](https://miro.medium.com/max/1320/1*x7z8fnI3PKau1o_2u31U3g.jpeg){height=300px}
  :::

## דוגמאות של Worker threads

- שינוי גודל של תמונה: [Worker thread](https://gist.githubusercontent.com/sandeep-cs-dev/9dfcbb54df3d8b384d98011fabd885e4/raw/13e26ae43968f7574c2c3d94350f60e353413c95/ImageResizeWorker.js), [Main thread](https://gist.githubusercontent.com/sandeep-cs-dev/5e914b9679b37e777624d98805a80352/raw/d4ebea79ddb663159dbc149fede2920bb2b2abfd/ImageResizeMainThread.js)
- חישוב של מספרים ראשונים: [Worker](https://gist.githubusercontent.com/sandeep-cs-dev/a2eb9848a422b3ae48cf40eeb0be1428/raw/36372719b27d21777783a58d86feca7268ee4ea5/calculate-primes-worker-threads.js), [Main](https://gist.githubusercontent.com/sandeep-cs-dev/a2eb9848a422b3ae48cf40eeb0be1428/raw/36372719b27d21777783a58d86feca7268ee4ea5/test-worker.js)
- ![](https://miro.medium.com/max/1120/1*KLq2IEq9e3BlTSAJ4lkGuw.png){height=250px .borderless}
- הצפנת קובץ: [Worker](https://gist.githubusercontent.com/sandeep-cs-dev/f4db0b3708d9eec6ff98f2f4b320e848/raw/226366e4de99abfc3f086de18b109204c0461a0f/encrpt-file-worker.js), [Main](https://gist.githubusercontent.com/sandeep-cs-dev/f4db0b3708d9eec6ff98f2f4b320e848/raw/226366e4de99abfc3f086de18b109204c0461a0f/encrpt-file-worker-test.js)
  (הודות ל[Sandeep Patel](https://medium.com/nodejsmadeeasy/workers-threads-in-node-js-part2-ec45ac084963))

# תכולות מתקדמות

## Symbols

- מאפשרות מפתחות איחודיות ומוסתרות גם משימוש חיצוני (ללא הכרה ב-Symbol) וגם מ-`for __ in __`{.js}
- בדומה ל-Map, Symbolים לא מופיעים בJSON
- קריאה ל-`Symbol("something")`{dir=ltr .js} יוצרת symbol חדש עבור כל מחרוזת (כלומר זה רק תיעוד)
- דרך `Symbol.for("somestring")`{dir=ltr .js} מקבלים symbol שהוא גלובאלי לכל האפליקציה
- אפשר לקבל את המחרוזת דרך `Symbol.keyFor(sym)`{dir=ltr .js}

## Template literals

- יש שני סוגים: tagged ו-untagged
- סוג ה-untagged מאפשר הכנסת משתנים במחרוזות והכנסת שבירות שורה במחרוזת
- סוג ה-tagged קוראים לפונקציה עם מחרוזת הטקסט ומשתנים בתור קלטים נוספים
- לכן tagged template literals מאפשרות Domain Specific Languages (DSLs)

## Untagged template literals

- ```js
  `Recipe for magic sauce:
      ${x}g of ${name} chilli`;
  ```

## Tagged template literals

- ```js
  const benlang = (strings, count) => {
    if (strings[1].endsWith(" times")) {
      Array.from({ length: count }).forEach(() => {
        console.log(strings[0].split("Write ")[1]);
      });
    }
  };
  const n = 5;
  benlang`Write chocolate is tasty ${n} times`;
  ```

## דוגמא של Tagged template literal עם Jest

- ```js
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `("returns $expected for $a + $b", ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
  ```

## Map

- מאפשרת key, value כאשר keys הן לא רק מחרוזות או Symbols
- ב-Map סדר המפתחות מובטח
- יוצרים ע"י קריאה ל-`new Map(args)`{dir=ltr .js}
- קוראים ממנו עם `map.get(key)`{dir=ltr .js}
- אפשר גם להגדיר keys דינמית ע"י `map.set(key, value)`{dir=ltr .js} ולמחוק עם `map.delete(key)`{dir=ltr .js}
- דורשת פועלות נוספות כדי לאפשר serialization

<aside class="notes">
- Similar to HashMap in Java or Dictionary in C# or Python
- `args`{.js} can be key-value pairs
</aside>

## Proxies

- יוצר אובייקט עוטף target
- מתנהג כמו target חוץ ממלכודות (traps)
- `const proxy = new Proxy(target, handler)`{.js}
- אפשר לשנות התנגנות של מלא פועלות, לא רק `get`{.js} ו-`set`{.js}, [הנה](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions) רשימה שלמה של traps אפשריים
- אפשר להשתמש בזה כדי לבצע ולידציה, להוסיף ברירת מחדל לערכים או כדי ליצור caching

<aside class="notes">
  Handler is an object which contains traps
</aside>

## Typed arrays

- אובייקט דומה למערך מיועד לעריכת דאטה בבינארי
- גודל בבתים קבוע
- יש הפרדה בין `ArrayBuffer`{.js} שמחזיק בתים של דאטה ו-views מטיפוסים שונים
  - דוגמאות: `Int8Array`{.js}, `Uint8Array`{.js}, `Int16Array`{.js}, `Uint16Array`{.js}, `Int32Array`{.js}, `Uint32Array`{.js}, `Float32Array`{.js}, `Float64Array`{.js}, `BigInt64Array`{.js}, `BigUint64Array`{.js}
- יש `DataView` כדי לשנות בתים ב-Buffer כאשר סוג המספרים שונים וכאשר נדרש ייחוס ל-Endianness

# איטרציה

- לא תמיד לטעון את הכל לזיכרון

## פונקציאת Iterator

- מגדיר אובייקט שמכיל סדר של ערכים ואז פוטנציאלית ערך הוחזר
- כלומר שיש לו `next()`{dir=ltr .js} שמחזיר `value`{.js} ו-`done`{.js}

<aside class="notes">
  `done` הוא בעצם boolean של האם כל הערכים כבר הוגשו
  שימו לב כי אפשר לקרוא ל-`next`{.js} אינסוף פעמים, פשוט אותו ערך הוחזר ו-`done===true`{.js}
</aside>

## פונקציאת Generator

- פונקציה נורצה ע"י `function*`{dir=ltr .js}
- מקרה של פונקציה שיוצרת iterator אבל קלה יותר להבין
- קריאה ראשוני מחזירה iterator
- הפונקציה הורצה עד למילת מפתח `yield`{.js} עבור כל קריאה ל-`next`{.js}
- מילה המפתח `yield`{.js} [יכול להחזיר ערך](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#advanced_generators) במקרה ו-`next` נקרא עם ערך
- אפשר להשתמש ב-`yield*`{dir=ltr .js} כדי להעביר ל-generator אחר, כלומר, composition

## Iterables

- אובייקט שאפשר "לעבור" עליו
- `Array` ו-`Map` הם iterables
- כדי שאובייקט יהיה iterable הוא צריך לממש את השיטה `@@iterator`{dir=ltr .js}/`Symbol.iterator`{.js}
- פונקציות generator מגדירים את `Symbol.iterator` של ה-iterator שלהם לעצמם כך אשפר לעבור עליהם פעם אחת בלבד
- לעומת זאת אפשר לעבור על אובייקטים שיוצר generator עבור `Symbol.iterator` אינסוף פעמים

## דוגמא של generators

```js
// Create a fibonacci generator function
function* fibonacci() {
  let [prev, next] = [0, 1];

  yield prev;
  yield next;

  // Add previous and next values and yield them forever
  while (true) {
    const newVal = next + prev;

    yield newVal;

    prev = next;
    next = newVal;
  }
}
```

קוד מ-[כתבה](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript)

# שגיאות אופרטיביות לעומת תיכנותיות

- בתיכנות יש שתי סוגי שגיאות:
  - אופרטיביות: משהו בתהליך נכשל
  - תיכנותיות: המתכנת פספס מקרה
- עדיף לא להשתמש ב-Error או Exception עבור שגיאות אופרטיביות
- עדיף לטפל בשגיאות אופרטיביות

<aside class="notes">
  - If you know the error in advance, it is an operational one
  - Operational errors expected by user interaction should not throw Errors, but rather the data structure should consider then
  - Operational errors should never crash the application, depending on the error, either the application should log the error and continue or automatically retry or return a response to the user or a combination of these
  - Programming errors will inevitable lead to application crash in some circumstances, and it is usually better to perform a restart in all cases
</aside>

# Progressive Web Apps - PWAs

- שם קוד לאפליקציות הממשות תכולות מתקדמות של דפדפנים
- עיקר הוא 2 תכולות מיוחדות שיוצר אפליקציות מאתרי web

## Service Worker

- רכיב היושב בין דפדפן לשרת הרחוק המאפשרת פעילות הדף ללא חיבור רשתי
- כתוב ב-JS וסוג של Web Worker
- נשמר ע"י קריאה ל-`ServiceWorker.register()`{dir=ltr .js}
- בקריאות הבאות לאתר, הדפדפן מבקש מה-Service Worker את הדף
- שימוש בה דורשת HTTPS

<aside class="notes">
  - See https://developers.google.com/web/fundamentals/codelabs/offline/ for a guided tutorial example
</aside>

## Web app manifest

- קובץ JSON
- מגדיר את האתר שלך בתור אפליקציה ולכן מאפשר שמריתה לתפריט אפליקציות במכשיר
- נותן לאפליקציה שם, שם מפתח, גרסה, לוגו ותיאור
- מאפשר הגדרת ברירת מחדל של אורינטציה של אפליקציה ודף הביתה שלה
- לא נתמך ב-Firefox ו-Safari במחשבים אלא רק בטלפונים

# IndexedDB

- ממשק low-level עבור שמירת כמויות של structured data
- בסיס נתונים לדפדפן
- מבוסס על JSON
- יש לו גרסאות ל-DB
- יש לו transactions

## ממשק ל-IndexedDB עם Dexie.js

- ```js
  const db = new Dexie("FriendDatabase");
  db.version(1).stores({ friends: "++id,name,age" });

  db.transaction("rw", db.friends, async () => {
    if ((await db.friends.where({ name: "Josephine" }).count()) === 0) {
      const id = await db.friends.add({ name: "Josephine", age: 21 });
      console.log(`Addded friend with id ${id}`);
    }
    const youngFriends = await db.friends.where("age").below(25).toArray();
    console.log("My young friends: " + JSON.stringify(youngFriends));
  }).catch((e) => {
    console.error(e.stack || e);
  });
  ```

# נושאים אחרים מעניינים

- [Web Sockets](https://javascript.info/websocket)
- [Fetch download progress](https://javascript.info/fetch-progress), [abortable fetch](https://javascript.info/fetch-abort) & [resumable upload progress](https://javascript.info/resume-upload)
- Web Components: [Custom elements](https://javascript.info/custom-elements) & [Shadow DOM](https://javascript.info/shadow-dom)
- [Synchronize MongoDB with local copy using IndexedDB](https://www.npmjs.com/package/minimongo)

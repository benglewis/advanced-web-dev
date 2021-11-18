---
lang: he
dir: rtl
title: React מתקדמת
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

#

![](https://image.slidesharecdn.com/15-kick-ass-bruce-lee-quotes-120622054321-phpapp01/95/slide-6-1024.jpg){.borderless}

# למה React?

- ב-React רק מתעסקים ב-render
- אין שום תלות בשיטת בקמות קבצים/סטנדרט תיקיות או metadata
- כיוון אחד למידע, למעלה כלפי מטה דרך props, state או context
- JSX

## JSX

![](https://blog.bravado.co/content/images/2021/09/image-4.png){height=450px}

## למה JSX?

- יש חיבור בין לוגיקה לבין UI, אם לא היה, הלוגיקה לא היה עושה כלום
- ב-JSX אפשר להשתמש בכל היכולות של JS ב-UI
- אין צורך ללמוד שפת templating, הכל JS + קומפוננטות/אלמנטים

# Modules, bundlers & code splitting

- מה הם modules?
- מה זה Bundler?
- מה זה Webpack?
- איך יוצרים יותר מ-bundle אחד

## JS Modules

- שפת JavaScript היא סטנדרט ולא מימוש
- פעם כל JS היה יכול לגשת לכל דבר ולא היה namespacing
- נוצר כמה שיטות שונות להפריד קוד לקבצים שונות ב-namespace שונה

## CommonJS Modules

- אפליקציית Node.JS פותח עם תמיכה ב-modules שנקראים CommonJS, לדוגמא:
- ```js
  const fs = require("fs")
  const users = JSON.parse(
    fs.readFileSync(
      `${__dirname}/_data/users.json`,
      "utf-8"
    )
  )
  module.exports = users
  ```

## ES Modules

- כאשר ES6 יצא ב2015, נוצר ES modules, לדוגמא:
- ```js
  import * as fs from "fs"
  export const users = JSON.parse(
    fs.readFileSync(
      `${__dirname}/_data/users.json`,
      "utf-8"
    )
  )
  ```
- בהגדרה, ES modules רצים ב-strict mode
- ב-Node.JS מוסיפים `"type": "module"` ל-`package.json` כדי להשתמש בזה

# Bundler

- Bundler הוא רכיב שממרג' את כל הקוד שלך מכל המודולים אל תוך קובץ אחד
- למה צריך אותו?
- כדי להריץ מודלים בדפדפן
- Angular ו-CRA משתמשים ב-Webpack
- איך דואגים לכך שלא צריך להוריד את כל האפליקציה כדי להריץ?
- משתמשים ב-code splitting

##

![](https://i.redd.it/tev7uxr70fm41.jpg)

## Hot Module Replacement

- רק הקומפוננטות שהושתנו הוחלפו
- עדכונים לקוד שנוצג בדפדפן בלי לרסט את ה-state
- משפר זמן פיתוח

##

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2_Mishloach_Manot.jpg/1200px-2_Mishloach_Manot.jpg)

## Webpack

- ה-bundler של Angular ו-create-react-app
- יוצר קובץ **אחד** _minified_ עבור דפדפנים
- מיושן אבל מאוד פופולרי

##

![](./bundler-trends.png){.borderless}

## Vite

- אחד מתוך הרבה כלים חדשים אבל
- פיתוח עם ES modules ללא bundling ומקמפל NPM מודלים ל-ES modules ע"י כלי בשם `esbuild`
- בניית קוד מאוד מהיר
- גודל פרויקט לא משפיע על זמן בנייה לפיתוח
- יותר מתאים ל-caching
- בונה קוד ל-production אל תוך bundle אחד ע"י rollup כך שיש רק bundle אחד לכל entrypoint

# Code splitting

- כדי לפצל את האפליקציה לכמה bundleים אפשר להשתמש ב-code splitting
- אפשר להשתמש בפיצ'ור של JS עבור splitting שנקרא `import()`{dir=ltr .js} _דינמי_
- הוא בעצם מתנהג כמו `import`{.js} רגיל אבל מחזיר את ה-`import`{.js} ב-Promise

## import רגיל:

```js
import { add } from "./math"
console.log(add(16, 26))
```

## import דינמי:

```js
import("./math").then((math) => {
  console.log(math.add(16, 26))
})
```

##

![](https://tse4.mm.bing.net/th?id=OIP.e3EweegchekLs4wlGZNUjQHaHa&pid=Api){.borderless}

## React lazy

- אין דרך לבצע `await`{.js} בקומפוננטה ב-React
- נדרש שיטה אחרת לעשות לייבא קומפוננטה
- אפשר להשתמש ב-`lazy()`{dir=ltr .js} של React כדי להשתמש בקומפוננטה שנטענת דרך import דינמי
- ```js
  const MyComponent = lazy(() => import("./MyComponent"))
  ```
- שימו לב כי הקובץ חייב לחשוף קומפוננטה ב-default export
- אבל מה מוצג עד שזה נטען?

##

![](http://i.qkme.me/3rb70y.jpg){.borderless}

## React Suspense

- קומפוננטה שמרונדרת כאשר `lazy()`{dir=ltr .js} מחכה לתגובה
- ```js
  const MyComponent = lazy(() => import("./MyComponent"))

  return (
    <Suspense fallback={<p>Loading calculator...</p>}>
      <MyComponent />
    </Suspense>
  )
  ```

## תרגיל 1

- התקינו Vite ע"י
- ```sh
  npm init vite react-vite -- --template react
  ```
- תצרו component בשם Calculator:
  - היא מקבלת שני קלטים ואופרטור אחד
  - היא צריכה לחשב ולהציג את התוצאה
- תצרו כפתור שטוען את מחשבון דינמית אחרי delay של שנייה ובעת טעינה להציג הודעה
- שימו לב: קובץ של ה-Calculator רק נטען אחרי לחצית הכפתור ושנייה ונטען בנפרד לשאר האתר

#

![](https://ik.imagekit.io/pimberly/5a573819182f915efb7bd083/9067446a/5c1791f0caefae0023000054.jpg){height=500px .borderless}

# Context

- עם `Context`{.js} תוכל להעביר props לקומפוננטות שהן עמוקות בעץ בלי להעביר דרך קומפוננטות באמצע
- ![](https://res.cloudinary.com/practicaldev/image/fetch/s--dJrcxIv8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rm7466b0tmda8xsym24h.png)

##

![](https://www.kolhair.co.il/wp-content/uploads/2017/07/מוניות-שירות-צילום-אביעד-הרמן-768x512.jpg){.borderless}

##

```jsx
const ThemeContext = React.createContext("light")

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
)

const Toolbar = () => (
  <div>
    <ThemedButton />
    <button>Another button</button>
  </div>
)

const ThemedButton = () => {
  const context = useContext(ThemeContext)
  return <Button theme={context} />
}
```

## תרגיל 2

- תוסיפו Context שמנהלת theme של האפליקציה
- תוסיפו dropdown שייתן לך לשנות בין light ו-dark
- תשנו את צבע הרקע ל-black אם ה-theme הוא dark ו-white אם ה-theme הוא light וצבע הטקסט לצבע ההפוך
- תעבירו את ה-context לקומפוננטת המחשבון ותבצעו את טקסט בה blue אם ה-theme הוא light ו-yellow אם ה-theme הוא dark
- שימו לב: חשוב לדאוג לזה שמחשבון שלך לא ייובא מחדש ולא תהיה שהייה על כל שינוי ב-theme

# Error Boundaries

- מאפשרות תפיסת שגיאות בקומפוננטות בעץ הילדים, ניטורם והצגת fallback
- הן לא תופסות event handlers, קוד אסנכרוני, רנדור בצד שרת ושגיאות בboundary עצמו

## דוגמאת error boundary (מחלקה)

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
```

## דוגמאת react-error-boundary

```jsx
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )
}

const ui = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <ComponentThatMayError />
  </ErrorBoundary>
)
```

## תרגיל 3

- התקינו `react-error-boundary` (`npm i react-error-boundary`)
- תצרו error boundary עם כפתור reset על המחשבון שלך ותדאג לכך שכל חילוק באפס זורק שגיאה

# העמקה ב-hooks

- מי שקרא על React כנראה מכיר כי יש class-based ו-functional קומפוננטות
- דרך hooks אפשר לעשות כל מה שאפשר ב-class-based קומפוננטות ב-functional
- פונקציות יותר קריאות מאשר מחלקות, יש להם קלטות ופלטות מאוד ברורות ואין שדות/שיטות
- ה-hooks הם מאפשרים שיתוף לוגיקה ושימוש חוזר בקוד
- ה-hooks הם עוטפים פועלות שהן לא pure במסגרת ברורה כולל setup ו-teardown

## useEffect

- מאפשר ביצוע פועלה לאחר רנדור של הקומפוננטה, כלומר side-effects
- יש שני יכולות נוספות: clean-up ורשימת פרמטרים רק עבור שינוי בהם לבצע את ה-effect
- אם עושים שינוי ב-effect שנוגע ב-DOM עדיף להשתמש ב-`useLayoutEffect` שזה ל-`useEffect` חוץ מזה שזה נקרא לפני צביע השינוי ב-DOM לעומת אחרי ולכן מונע קפיצות

## דוגמאת useEffect

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`
}, [count]) // Only re-run the effect if count changes
```

## דוגמאת useEffect 2

```jsx
useEffect(() => {
  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline)
  }

  subscribeToFriendStatus(
    props.friend.id,
    handleStatusChange
  )
  return () => {
    unsubscribeFromFriendStatus(
      props.friend.id,
      handleStatusChange
    )
  }
}, [props.friend.id]) // Only re-subscribe if props.friend.id changes
```

## useCallback

- מאפשר יצירת פונקציות שהן רק תלויות בפרמטרים במערך
- שימושי כדי למנוע יצירת פונקציות מחדש על כל רנדר כאשר הם לא תלויים בפרמטרים אלו

## דוגמאת useCallback

```jsx
import { useState, useCallback } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [isActive, setActive] = useState(false)

  const increment = useCallback(
    () => setCount(count + 1),
    [count]
  )
  const toggleCounterVisibility = useCallback(
    () => setActive(!isActive),
    [isActive]
  )

  return (
    <div className="App">
      {isActive && (
        <div>
          <h1>{count}</h1>
          <button onClick={increment}>Increment</button>
        </div>
      )}
      <button onClick={toggleCounterVisibility}>
        {isActive ? "Hide Counter" : "Show Counter"}
      </button>
    </div>
  )
}
```

## useRef

- מאשפרת יצירת reference שהוא mutable וקריא בשדה `.current`
- הערך שהועבר אליו הוא הערך ההתחלתי
- ביחד עם הישות `ref` על elements ב-HTML מאפשר גישה ישירה ל-element ב-DOM

## דוגמאת useRef

```jsx
const TextInputWithFocusButton = () => {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </>
  )
}
```

## דוגמאת useRef 2

```jsx
const Timer = () => {
  const intervalRef = useRef()

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Hello future!")
    }, 10_000)
    intervalRef.current = id
    return () => {
      clearInterval(intervalRef.current)
    }
  })
  const handleCancelClick = () => {
    clearInterval(intervalRef.current)
  }

  return (
    <button onClick={handleCancelClick}>
      Stop the future!
    </button>
  )
}
```

## תרגיל 4

- תוסיפו שינוי לכותרת הדף עם התוצאה של החישוב
- תוסיפו תוצאה האחרונה (זה יידרוש שימוש יצירתי ב-useEffect ו-useRef יחד)
- לחיצה על תוצאה האחרונה אמורה להחזיר את הערכים הקודמים שהיו (אל תשכחו למנוע רנדורים מיותר)

# כלי פיתוח - React DevTools

- [React DevTools on GitHub](https://github.com/facebook/react/tree/main/packages/react-devtools-extensions)
- [הסבר](https://www.kapil.io/blog/react-devtools/)

# Forwarding refs

- ברירת המחדל של React היא שאין `ref` על קומפוננטות
- אפשר להעביר את ה-`ref` ל-elementים ב-DOM
- זה שימושי בקומפוננטות שהן "בסיסיות" כגון כפתור/Input

## דוגמאת forwarding ref

```jsx
import { forwardRef } from "react"

const FancyButton = forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

// You can now get a ref directly to the DOM button:
const ref = createRef()
<FancyButton ref={ref}>Click me!</FancyButton>
```

## `useImperativeHandle`{.jsx}

- דרך `useImperativeHandle`{.jsx} אפשר לבחור איזה חלקי ה`ref` לחשוף החוצה ולשנות התנגותה
- הכי קל לראות את זה בדוגמא

## דוגמאת `useImperativeHandle`{.jsx}

```jsx
import {
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react"

export const ImperativeChildExampleComponent = (
  props,
  ref
) => {
  // we need to create a new ref for the input to be able to focus on the element
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      sendEvent()

      // focus on the input after we send the event
      inputRef.current.focus()
    },
  }))

  return <input {...props} ref={inputRef} />
}

const ImperativeChildExample = forwardRef(
  ImperativeChildExampleComponent
)

export default function ImperativeParentExample() {
  const ref = useRef(null)
  return (
    <div>
      <ImperativeChildExample ref={ref} />
      <button onClick={() => ref?.current?.focus()}>
        Focus!
      </button>
    </div>
  )
}
```

# controlled v. uncontrolled קומפוננטות

- יש שני שיטות לעבוד מול inputים, controlled ו-uncontrolled
- ברירת המחדל אמור להיות controlled, כאשר כל שינוי נשמר ל-state וערך ה-input מוגדר ע"י state

## uncontrolled קומפוננטות

- קוראים ערכי ה-input בזמן הנדרש מה-DOM ע"י `ref`
- אפשר להשתמש ב-uncontrolled קומפוננטות ליצור פונקציונליות יותר מהיר ואז להשתמש ב-`onSubmit` למשל אבל מומלץ לא להשתמש ב-uncontrolled קומפוננטות בכללי
- כאשר משתמשים ב-uncontrolled קומפוננטות אפשר להשתמש ב-`defaultValue` כדי להגדיר ערך התחלתי

## דוגמאת uncontrolled קומפוננטות

```jsx
const NameForm = () => {
  const input = useRef()

  const handleSubmit = (event) => {
    alert("A name was submitted: " + input.current.value)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
```

# ביצועים

- אפשר למדוד ולשפר ביצועים של אפליקציות React ע"י שיטות מוכרות
- חשוב להגדיר `key` עבור כל קומפוננטה מערך כדי ש-React יכול לעקוב אחרי שינויים לכל קומפוננטה במקום לרנדר את הרשימה מחדש
- כדאי לא לרנדר קומפוננטות כבדות במקום להגדיר אותם כ-`display: none` כדי להוריד עומס על ה-DOM

## Profiler

- ל-React יש קומפוננטה בשם profiler
- ```jsx
  const App = () => (
    <>
      <Profiler id="Navigation" onRender={callback}>
        {" "}
        <Navigation {...props} />{" "}
      </Profiler>{" "}
      <Main {...props} />
    </>
  )
  ```

## Profiler 2

- כאשר `onRender`{.jsx} נקרא עם:
- ```jsx
  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    // Aggregate or log render timings...
  }
  ```

## וירטואליזציה

- אפשר להשתמש בספריות כגון `react-virtual` כדי ליצור אזורים וירטואלים בהם רק תוכן שמוצג למשתמש מרונדר ב-DOM ושאר התוכן רק הוחזק בזיכרון
- שימוש בכלים אלו יכול לשפר ביצועים מהותית כאשר נדרש להציג רשימות גדולות/תכנים רבים
- אפשר לראות דוגמאות ב[אתר](https://react-virtual.tanstack.com)

# קישורים להמשיך למידה

- [usehooks.com](https://usehooks.com)

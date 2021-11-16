---
lang: he
dir: rtl
title: "יום ראשון: MongoDB"
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

[//]: # (התכנסות וסקר יום: רבע שעה)

# בסיסי נתונים

## מה זה בסיס נתונים?
(5 דקות)

::: incremental :::
- מקום לשמור נתוני האפליקציה
- לא באחריותך
- מאפשר סידור של הנתונים
- לכל סביבה יש:
  - מנוע (שרת) שאיתו נגישים לנתונים
  - לפחות בסיס הנתונים אחד (כלומר מארז הנתונים)
- דואג לביצועים ע"י מתמטיקה מתקדמת
- לא ממש "דבר" אחד אלא קטגוריה
:::

## למה להשתמש בבסיס נתונים?
(5 דקות)

::: incremental :::
- להוציא אחריות על נתונים מאפליקציות
- להפריד בין נתונים לבין פונקציונליות אפליקטיבית
- לשפר ביצועים של אפליקציות
:::

# SQL ו-NoSQL

## מה זה SQL?
(5 דקות)

::: incremental :::
- Structured Query Language
- שפה בה נגישים לבסיס נתונים רלציוני (טבלאי-מקושרת)
- Declarative
- טבלאות מקושרות
- הרחבות לפי בסיס נתונים ספציפי
- אפשר להשתמש בעמוד NoSQL בבסיס נתונים SQL
:::

## מה זה NoSQL?
(5 דקות)

::: incremental :::
- Non-Structured Query Language
- כלומר כל בסיס נתונים שלא מדבר SQL
- דוגמאות:
  - Document (הסבר בהמשיך)
  - Key-Value (כמו Redis)
  - Graph
:::


# Document database

## מה זה document database?
(5 דקות)

![](https://webimages.mongodb.com/_com_assets/cms/kq6vbsduopjtnfu32-relational_vs_mdb.png "בסיס נתונים מבוסס מסמכים (~JSON)"){height=500px}

##
![](data:image/jpeg;base64,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 "Ogres have layers")

## למה להשתמש ב-document database?
(10 דקות)

::: incremental :::
- לא צריכים לכתוב SQL
- מודל טבעי לקישורים one-to-many בין ישויות
- אפשר עדיין להשתמש במצביעים בין מסמכים
:::

# הפסקה: 10 דקות {data-visibility=uncounted}

# מה זה MongoDB?

## MongoDB במשפט
(5 דקות)

בסיס נתונים NoSQL עם קוד פתוח מסוג document database שמשתמש במסמכי BSON

## BSON
(10 דקות)

::: incremental :::
- פורמט בינארי דומה ל-JSON
- סוגי נתונים נוספים:

  ::: {dir=ltr} :::
  - ObjectID
  - Double
  - 32-bit integer (int)
  - 64-bit integer (long)
  :::

  - תאריכים
:::

## ObjectID
(10 דקות)

::: incremental :::
- טיפוס מזהה של מסמכי MongoDB
- מורכב מ-12 בתים:
  - 4 בתים עם הזמן (timestamp)
  - 5 בתים אקראיים
  - 3 בתים צבורים ממספר אקראי
- תפקידו לדאוג לשוני בין מסמכים הנוצרים במחשים שונים
- מאפשר scaling של cluster (כלומר horizontal scaling)
:::

## Collection
(5 דקות)

::: incremental :::
- Collection הוא מארז של מסמכים
- מקביל ל-table בבסיס נתונים רלציוני
:::


## Cursor
(10 דקות)

::: incremental :::
- כמעט כל שאילת שמבצעים (ב-driver) מחזיר cursor
- הוא iterable (כלומר אפשר לעבור עליו בלולאה)
- המסמכים עצמם רק הוחזרו ברגע שעוברים על cursor
- אפשר לבקש את רק גודל השאילתה (שיטת size)
- אפשר לסדר מסמכים ב-cursor (שיטת sort)
- אפשר גם לדלג (שיטת skip) אבל לא כדאי
:::

## Replica set
(5 דקות)

::: incremental :::
- בכל שימוש ב-production של בסיס נתונים מומלץ שרידות
- אפשר לבזר עומס על קריאות ע"י replica set
- ![](https://docs.mongodb.com/manual/images/replica-set-read-write-operations-primary.bakedsvg.svg){height=300px}
:::

# הפסקה: רבע שעה {data-visibility=uncounted}

# CRUD
![](data:image/png;base64,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)

## Create
(5 דקות)

![](https://docs.mongodb.com/manual/images/crud-annotated-mongodb-insertOne.bakedsvg.svg)

## Read
(5 דקות)

::: incremental :::
- ![](https://docs.mongodb.com/manual/images/crud-annotated-mongodb-find.bakedsvg.svg)
- שימו לב ל-projection ו-limit
:::

## Update
(5 דקות)

![](https://docs.mongodb.com/manual/images/crud-annotated-mongodb-updateMany.bakedsvg.svg)

## Delete
(5 דקות)

![](https://docs.mongodb.com/manual/images/crud-annotated-mongodb-deleteMany.bakedsvg.svg)

# Sharding
(10 דקות)

::: incremental :::
- דרך sharding אפשר לבזר את התוכן של collection מסויים
- מגדירים שיטת פיצול של shards
- מאשפרת horizontal scaling של קריאות ו- **גם של כתיבות**
- פיזור עומסים וזמינות גובהה ע"י replica sets
:::

## תמונה ל-sharding
![](https://webimages.mongodb.com/_com_assets/cms/ko1z24yxvpdf2gt1j-mongodb-shard-keys-and-chunks3.png?auto=format%2Ccompress)

# הפסקת צהריים: שעה {data-visibility=uncounted}

# Index
(רבע שעה)

::: incremental :::
- בבסיס נתונים עלול להיות בעיות ביצועים
- אפשר לשפר ביצועי שיאלתות ע"י index
- ![](https://d117h1jjiq768j.cloudfront.net/images/default-source/default-album/tutorialimages-album/odbc-album/ruseindxa.gif?sfvrsn=1)
- ב-MongoDB אפשר ליצור compound indexes
:::

## דוגמאת index
```js
// Products collection
{
"_id": ObjectId(...),
"item": "Banana",
"category": ["food", "produce", "grocery"],
"location": "4th Street Store",
"stock": 4,
"type": "cases"
}
// Create compound index
db.products.createIndex( { "item": 1, "stock": 1 } )
```
- אפשר ליצור [text indexes](https://docs.mongodb.com/manual/text-search/) לחיפוש בסיסי

# Streams
(10 דקות)

- אפשר לעקוב אחרי collection עם stream

## דוגמאת stream
```js
// Create change stream for inventory collection
const collection = db.collection('inventory');
const changeStream = collection.watch();
changeStream.on('change', next => {
  // process next document
});
```

# Query operators
- הפעולות האפשריות לבצע בשיאלות רגילות
- נעבר על כמה דוגמאות:

## השווה (10 דקות)
| Operator | פעולה |
| -------- | ------ |
| `$eq`{dir=ltr}    | זהה לבלי Operator חוץ מהמקרא בה בחיפוש הוא RegEx |
| `$gt`{dir=ltr}    | השדה גדול מ-x |
| `$gte`{dir=ltr}   | השדה שווה או גדול מ-x |
| `$in`{dir=ltr}    | השדה במערך x |
| `$lt`{dir=ltr}    | השדה קטן מ-x |

## השווה (2)
| Operator | פעולה |
| -------- | ------ |
| `$lte`{dir=ltr}   | השדה שווה או קטן מ-x |
| `$ne`{dir=ltr}    | לא שווה |
| `$nin`{dir=ltr}    | השדה לא במערך x |

## לוגית (5 דקות)
| Operator | פעולה |
| -------- | ------ |
| `$and`{dir=ltr}   | מבצע שיאלתה כאשר שני התנאים תקפים |
| `$not`{dir=ltr}   | מבצע הפיכה של התנאים תחתיו |
| `$nor`{dir=ltr}    | מבצע שיאלתה כאשר שני התנאים לא תקפים |
| `$or`{dir=ltr}    | מבצע שיאלתה כאשר אחד מהתנאים תקפים |

# הפסקה: 20 דקות {data-visibility=uncounted}

# ולידציה (רבע שעה)
- ל-MongoDB אין schema
- יש ולידציה
- אפשר לעשות ולידציה מול JSON schema (draft 4)

## דוגמאת schema
```js
  const gradesSchema = {
    $jsonSchema: {
      required: [ "name", "major", "gpa" ],
      properties: {
          name: {
            bsonType: "string",
            description: "must be a string and is required"
          }
      }
    }
  }
  ```

## דוגמאת שימוש ב-schema
```js
// Create grades collection with validation
db.createCollection( "grades", { validator: { $jsonSchema: gradesSchema } } )
// Or modify an existing collection to add the validation
db.runCommand( { collMod: "grades", validator:{ $jsonSchema: gradesSchema } } )
```

### אופציות לולידציה
- [אפשר להריץ ולידציה רק על מסמכים שכבר עומדים בולידציה](https://docs.mongodb.com/manual/core/schema-validation/#existing-documents)
- [אפשר רק להתריע בלוגים על כישלון בולידציה ולא למנוע פועלות](https://docs.mongodb.com/manual/core/schema-validation/#accept-or-reject-invalid-documents)


# Aggregation

- דרך לאסוף/לחבר בין מסמכים
- מתחיל עם collection מסויים
- הכי קל להבין מדוגמאות

## $addFields (5 mins){dir=ltr}
- ```js
  // Scores collection
  {
    _id: 1,
    student: "Maya",
    homework: [ 10, 5, 10 ],
    quiz: [ 10, 8 ],
    extraCredit: 0
  }
  // Aggregation pipeline
  db.scores.aggregate( [
    {
      $addFields: {
        totalHomework: { $sum: "$homework" } ,
        totalQuiz: { $sum: "$quiz" }
      }
    },
    {
      $addFields: { totalScore:
        { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
    }
  ])
  ```

## $addFields output{dir=ltr}
- ```js
  {
    "_id" : 1,
    "student" : "Maya",
    "homework" : [ 10, 5, 10 ],
    "quiz" : [ 10, 8 ],
    "extraCredit" : 0,
    "totalHomework" : 25,
    "totalQuiz" : 18,
    "totalScore" : 43
  }
  ```

## $match (5 mins){dir=ltr}
- ```js
  // Scores collection
  { "_id" : 1, "subject" : "History", "score" : 88 }
  // Aggregation pipeline
  db.scores.aggregate(
    [
      {
        $match: {
          score: {
            $gt: 80
          }
        }
      },
      {
        $count: "passing_scores"
      }
    ]
  )
  ```

## $match output{dir=ltr}
- ```js
  { "passing_scores" : 4 }
  ```

## $geoNear (5 mins){dir=ltr}
- ```js
  // Aggregation pipeline
  db.places.aggregate([
    {
      $geoNear: {
          near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
          distanceField: "dist.calculated",
          maxDistance: 2,
          query: { category: "Parks" },
          includeLocs: "dist.location",
          spherical: true
      }
    }
  ])
  ```

## $geoNear output{dir=ltr}
- ```js
  {
    "_id" : 8,
    "name" : "Sara D. Roosevelt Park",
    "category" : "Parks",
    "location" : {
        "type" : "Point",
        "coordinates" : [ -73.9928, 40.7193 ]
    },
    "dist" : {
        "calculated" : 0.9539931676365992,
        "location" : {
          "type" : "Point",
          "coordinates" : [ -73.9928, 40.7193 ]
        }
    }
  }
  ```

## $group (5 mins){dir=ltr}
- ```js
  // Sales collection
  { "_id" : 1, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("2"), "date" : ISODate("2014-03-01T08:00:00Z") }
  { "_id" : 2, "item" : "jkl", "price" : NumberDecimal("20"), "quantity" : NumberInt("1"), "date" : ISODate("2014-03-01T09:00:00Z") }
  { "_id" : 5, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("10") , "date" : ISODate("2014-04-04T21:23:13.331Z") }
  { "_id" : 8, "item" : "abc", "price" : NumberDecimal("10"), "quantity" : NumberInt("5" ) , "date" : ISODate("2016-02-06T20:20:13Z") }
  // Aggregation pipeline
  db.sales.aggregate( [ { $group : { _id : "$item" } } ] )
  ```

## $group output{dir=ltr}
- ```js
  { "_id" : "abc" }
  { "_id" : "jkl" }
  ```

::: {dir=rtl}
- יש עוד אופציות לגבי איך ליצור קבוצה, למשל:
  - ממוצע הערכים נומריים
  - הערך הראשון/אחרון מטיפוס מסויים
  - סכום ערכים נומריים
:::

## $limit (5 mins){dir=ltr}
- ```js
  db.article.aggregate([
    { $limit : 5 }
  ]);
  ```

# הפסקה: 20 דקות {data-visibility=uncounted}

## $lookup (quarter hour){dir=ltr}
::: {dir=rtl}
- אין Foreign Keys ב-MongoDB
- $lookup מאפשר חיבור בין collections בדומה ל-JOIN ב-SQL (מסוג LEFT OUTER)
- עדיף לא לחבר אלא להכניס נתונים לאותם מסמכים
:::

## $lookup example{dir=ltr}
- ```js
  // Order collection
  { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 }
  { "_id" : 3  }
  // Inventory collection
  { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 }
  { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 }
  { "_id" : 5, "sku": null, "description": "Incomplete" }
  { "_id" : 6 }
  // Aggregate pipeline
  db.orders.aggregate([
    {
      $lookup:
        {
          from: "inventory",
          localField: "item",
          foreignField: "sku",
          as: "inventory_docs"
        }
    }
  ])
  ```

## $lookup output{dir=ltr}
- ```js
  // Output
  {
    "_id" : 1,
    "item" : "almonds",
    "price" : 12,
    "quantity" : 2,
    "inventory_docs" : [
        { "_id" : 1, "sku" : "almonds", "description" : "product 1", "instock" : 120 }
    ]
  }
  {
    "_id" : 3,
    "inventory_docs" : [
        { "_id" : 5, "sku" : null, "description" : "Incomplete" },
        { "_id" : 6 }
    ]
  }
  ```

:::{dir=ltr}
- שימו לב `from` collection נדרש להיות לא sharded
:::

## $lookup example 2{dir=ltr}
- ```js
  // Classes collection
  { _id: 1, title: "Reading is ...", enrollmentlist: [ "giraffe2", "pandabear", "artie" ], days: ["M", "W", "F"] }
  // Members collection
  { _id: 1, name: "artie", joined: ISODate("2016-05-01T00:00:00Z"), status: "A" }
  { _id: 2, name: "giraffe", joined: ISODate("2017-05-01T00:00:00Z"), status: "D" }
  { _id: 5, name: "pandabear", joined: ISODate("2018-12-01T00:00:00Z"), status: "A" }
  { _id: 6, name: "giraffe2", joined: ISODate("2018-12-01T00:00:00Z"), status: "D" }
  // Aggregation pipeline
  db.classes.aggregate([
    {
        $lookup:
          {
              from: "members",
              localField: "enrollmentlist",
              foreignField: "name",
              as: "enrollee_info"
          }
    }
  ])
  ```

## $lookup output 2{dir=ltr}
- ```js
  // Output
  {
    "_id" : 1,
    "title" : "Reading is ...",
    "enrollmentlist" : [ "giraffe2", "pandabear", "artie" ],
    "days" : [ "M", "W", "F" ],
    "enrollee_info" : [
        { "_id" : 1, "name" : "artie", "joined" : ISODate("2016-05-01T00:00:00Z"), "status" : "A" },
        { "_id" : 5, "name" : "pandabear", "joined" : ISODate("2018-12-01T00:00:00Z"), "status" : "A" },
        { "_id" : 6, "name" : "giraffe2", "joined" : ISODate("2018-12-01T00:00:00Z"), "status" : "D" }
    ]
  }
  ```

## $unwind (10 mins){dir=ltr}
::: incremental :::
- ```js
  // Inventory collection
  { "_id" : 1, "item" : "ABC1", sizes: [ "S", "M", "L"] }
  // Aggregate pipeline
  db.inventory.aggregate( [ { $unwind : "$sizes" } ] )
  ```
- ```js
  // Output
  { "_id" : 1, "item" : "ABC1", "sizes" : "S" }
  { "_id" : 1, "item" : "ABC1", "sizes" : "M" }
  { "_id" : 1, "item" : "ABC1", "sizes" : "L" }
  ```
:::

# ACID

- רשאי תיבות לפונקציונליות של transactions
- **A**tomicity
- **C**onsistency
- **I**solation
- **D**urability

## Transactions
(5 דקות)

![](https://vladmihalcea.com/wp-content/uploads/2014/01/transaction-workflow1.gif)

רשימה של פעולות לביצוע יחד

## Atomicity
(5 דקות)

כל הפועלות שבוצעו בוצעו בשלומם או הוחזרו למצב הקודם בשלומם

## Consistency
(5 דקות)

מצב בסיס הנתונים לא יגיע למצב שלא עומד בתיקניות שהוגדר (schema)

## Isolation
(5 דקות)

מיקבול של transactions יביא את בסיס הנתונים לאותו מצב שבו הוא יגיע עם הם יופעלו אחד-אחרי-השני

## Durability
(5 דקות)

Transactions שנשמרו יישמרו כמו שהם גם במידה וחומרה קורסת (למשל: קריסת חשמל)

# הפסקה: 10 דקות {data-visibility=uncounted}

# תרגיל (שעה וחצי)

## התחלה (~חצי שעה)

1. [הכנסו לחשבון ה-OpenShift](https://developers.redhat.com/developer-sandbox/get-started#) שלכם והריצו את ה-CLI של MongoDB.
2. תצור collection חדש עבור שמירת חחליות. החלליות מכילות עד 6 משטחי שליטה (מספר שרורתי) ועד 2 שיטות דחף (כדי לא לבזבז משקל). המסמכים. משקל חללית לא יעלה מעל 200,000 קילוגרם. עליך ליצור ולידציה עבור זה.

## יצירת נתונים (~רבע שעה)
3. תצור שלוש חלליות:
   1. ממונע ע"י מנוע עם דלק נוזלי ואלטרומגנטי עם 4 משטחי שליטה עם משקל סה"כ של 100,000 קילוגרם.
   2. ממונע ע"י מנוע עם דלק נוזלי ודלק מוצק עם 6 משטחי שליטה עם משקל סה"כ של 200,000 קילוגרם.
   3. ממונע ע"י מנוע עם דלק מוצק ואלטרומגנטי עם 5 משטחי שליטה עם משקל סה"כ של 150,000 קילוגרם.
   4. ממונע ע"י מנוע עם דלק מוצק ודלק נוזלי עם 7 משטחי שליטה עם משקל סה"כ של 250,000 קילוגרם. תברר כי מסמך זה לא הוכנס בהצלחה.

## הארכת נתונים (~רבע שעה)
4. תארוך את החללית עם משקל 150,000 קילוגרם (ללא שימוש בשדות אחרות) כדי להחליף את המנועים שלו למנוע אחד מבוסס anti-matter. משקלו יורד ל20,000 קילוגרם.
5. תמחוק את החללית עם 5 משטחי שליטה.

## אגרגציה (~חצי שעה)
6. תיצור סכום של משקלם של כל החלליות ע"י אגרגציה.

## אם נשאר לכם זמן: Transactions
7. תערוך את שני החלליות הקיימות לשדרג אותם עם חומרים חדשים כך שמשקלם יירד ב10%.

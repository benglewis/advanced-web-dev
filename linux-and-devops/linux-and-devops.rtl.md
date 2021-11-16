---
lang: he
dir: rtl
title: "יום שני: <br/> Linux & DevOps"
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


# מערכות הפעלה

## ליבה (kernel)
::: incremental :::
- סביבה בה רץ הקוד שלך
- מאפשרת גישה ל-I/O עם file system מסויים וחיבור מכשירים דרך drivers
- מאפשרת תזמון processes ותקשורת ביניהם
:::

## ליבה  Linux
::: incremental :::
- ליבה עם קוד פתוח מבוסס Berkeley Software Distribution (BSD)
- כתוב ע״י Linus Torvalds ופורסם עם השם Linux ניתן בניגוד לרצונך אחריו
- ליבה מאוד פופולארית היום ובשימוש ברוב השרתים בעולם וגם ברוב הטלפונים דרך Android
- שונה מWindows ודורשת קומפילציה נפרדת
:::

## Distributions (distros){dir=ltr}

::: {dir=rtl} :::
::: incremental :::
- מערכות הפעלה מורכבות משכבת ליבה של Linux ו-package manager שמנהלת ודרכה הותקנו אפליקציות נוספות ונקראות Linux distributions
- יש כמה distributions שהם פופולאריים במיוחד:
  - אלה שמבוססים על deb עם הכלי apt למשל Debian, Ubuntu
  - אלה שמבוססים על rpm עם הכלי yum למשל RedHat Enterprise Linux (RHEL), Fedora, CentOS, OpenSUSE
  - אלה שמבוססים על pacman למשל Arch Linux
:::
:::

## ניהול קבצים ב-Windows ו-Linux

| קטגוריה | התנגות של Windows | התנגות של Linux |
| --------- | --------------- | --------------- |
| מיפוי כוננים | ממופים אל אות | ממופים אל תיקייה מסויימת. כונן הבסיס / |
| הרשאות | שייכות עבור כל קובץ תיקייה עם רשימת חוקים | שייכות בעלות על הקובץ למשתמש ולקבוצה מסויים |

# שורת פקודה (command line)

## פקודות בסיסיות
::: incremental :::
- `pwd`: הדפסת תיקיית העבודה (working directory)
- `cd`: לשנות את תיקיית העבודה
- `ls`: הדפסת רשימת קבצים בתיקייה
- `cat`: הדפסת תוכן בקובץ
- `cp`: להעתיק קובץ
- `mv`: להזיז קובץ
- `mkdir`: ליצור תיקייה
- `rm`: למחוק קובץ
- `rm -r`: למחוק תיקייה
- `touch`: ליצור קובץ ריק
:::

## פקודות בסיסיות (2)
::: incremental :::
- `grep`: חיפוש בצורת RegEx בקובץ
- `df`: הדפסת שימוש בכונן
- `du`: הדפסת שימוש בתיקייה
- `head`: הדפסת תחילת קובץ (ברירת מחדל: 10 שורות ראשונות)
- `tail`: הדפסת סוף קובץ (ברירת מחדל: 10 שורות אחרונות)
- `diff`: הדפסת הבדלים בין 2 קבצים
- `diff3`: הדפסת הבדלים בין 3 קבצים
- `tar`: פתיחת\יצירת קובץ דחוס בסוג `tar`
- `unzip`: מחלצת קובץ zip
:::

## פקודות בסיסיות (3)
::: incremental :::
- `chmod`: שנה הרשאות על קובץ/תיקייה
- `chown`: שנה בעל קובץ/תיקייה
- `kill`: להרוג process שרץ
- `wget`: להוריד קובץ מאניטרנט. אפשר גם להוריד שרשרת קישורים
- `top`: תראה אפליקציות שרצים וכמה משאבים הן גוזלות
- `man`: תראה איך להשתמש בכל הפקודות
- `echo`: הדפסת משתנים
- `locate`: מוצא מיקום של קובץ ע"י שמו
- `file`: מחזיר טיפוס קובץ
:::

## קיצורים
::: incremental :::
- Tab: השלמה אוטומטית של שמות קבצים/תיקיות (אפשר להוסיף יכולות לzsh)
- Ctrl+R: חיפוש בפקודות שהרצת
- Up & Down arrows: פקודות קודמות לפי הסדר שהרצת אותן
- Ctrl+C: עצור הרצת פקודה/process
:::

## תרגיל: שורת פקודה של Linux
הכנסו אל: [https://www.katacoda.com/cybershaolin/courses/intro-to-linux/linux-commands-training_kwoon](https://www.katacoda.com/cybershaolin/courses/intro-to-linux/linux-commands-training_kwoon)

# מה זה DevOps?
::: incremental :::
- פילוסופיית פיתוח
- חיבור בין מפתחים לאנשי תשתיות כך שתשתית מנוהל ע"י קוד
- קיצור של תהליכי בדיקות ושחרור גרסאות
- שליטה בתהליכי פיתוח
- אני ממליץ על זה בשם The Phoenix Project
:::

# Docker

## מה זה Docker?
::: incremental :::
- הפרדת אפליקציות ברמת הליבה (ליבה משותף)
- הפרדת משאבים (מעבד, זיכרון, נפח כונן, רשת)
- שימוש בספריות שונות בגרסה מנוהלת
- יוצרים image שממנו אפשר להעלות אפליקציה במצב צפוי (container)
- ![](https://blog.jayway.com/wp-content/uploads/2015/03/vm-vs-docker.png)
:::

## Docker נגד VM
![](http://blog.jayway.com/wp-content/uploads/2015/03/vm-vs-docker-table.png){ height=400px }

## איך משתמשים ב-Docker?
::: incremental :::
- יוצרים קובץ Dockerfile
- בונים את ה-image
- מריצים container אותו עם קונפיגורציה מסויימת
:::

## Statelessness
::: incremental :::
- מרחב מערכת קבצים מאופס בהרצת אפליקציה
- אפשר לחבר volumes לדאג לשמירת נתונים לצמיתות
:::

## הדגמה: Docker
אראה לכם פקודות בסיסיות של ה-CLI והתנגדות ה-containers

## תרגיל: Volumes ב-Docker
הכנסו אל: [https://www.katacoda.com/loodse/courses/docker/docker-16-volumes](https://www.katacoda.com/loodse/courses/docker/docker-16-volumes)

## Dockerfile
::: incremental :::
- קובץ המאפשר יצירת image
- נהוג לקרוא לזה Dockerfile או קובץ עם סיומת Dockerfile
- רשום בו פקודות לבנות image
:::

## פקודות ב-Dockerfile
| פקודה | שימוש |
| ----- | ----- |
| FROM | התחלת קובץ והבאת image אחר בתור בסיס |
| RUN | הרצאת פקודה בשורת פקודה |
| COPY | מעתיק מ-build context אל image |
| EXPOSE | חושף פורט החוצה מה-image |
| CMD | מגדיר את הפקודה שהורץ בהרצאת ה-image |

## תרגיל: בניית Docker image
הכנסו אל [https://www.katacoda.com/courses/docker/2](https://www.katacoda.com/courses/docker/2)

# Kubernetes
כלי להרצת containers של Docker בצורה יציבה, יעילה, חכמה ומסודרת (orchestrator)

## יכולות Kubernetes
::: incremental :::
- מציאת שירותים ופיזור עומס
- ניהול מערכת קבצים
- שחרור גרסאות וחזרות לאחור אוטומטיות
- פיזור instances בין שרתים אוטומטית
- העלאה אוטומטית בנפילת instance
- ניהול קונפיגורציה ו"סודות"

## מונחים של Kubernetes
| מונח | משמעות |
| ------ | ---- |
| Cluster | אוסף של שרתים שמריץ Kubernetes |
| Worker nodes | שרתים המריצים את האפליקציות |
| Pod | המונח הבסיסי ב-Kubernetes עבור instance של אפליקציות, בד"כ container יחיד |

## מונחים של Kubernetes
| מונח | משמעות |
| ------ | ---- |
| Cloud controller | שרתים המנהלים את ה-cluster |
| Deployment | אפליקציה/שירות המוגדר ע"י YAML קונפיגורציה |
| Replica set | אסוף של רפליקציות של pod של deployment |

## תרגיל: Kubernetes
הכנסו אל [https://www.katacoda.com/javajon/courses/kubernetes-fundamentals/first-app](https://www.katacoda.com/javajon/courses/kubernetes-fundamentals/first-app)

## יכולות מתקדמות של Kubernetes
- ב-Kubernetes אפשר להגדיר בדיקת חיים ובדיקות זמינות של מהערכת שלך
- ב-Kubernetes אפשר להכניס בזמן ריצה תיקיות קונפיגורציה ו-secrets או להכניס אותם למשתני סביבה

## תרגיל: Kubernetes readiness ו-liveness checks
הכנסו אל [https://www.katacoda.com/courses/kubernetes/liveness-readiness-healthchecks](https://www.katacoda.com/courses/kubernetes/liveness-readiness-healthchecks)

## תרגיל: Kubernetes secrets
הכנסו אל [https://www.katacoda.com/courses/kubernetes/managing-secrets](https://www.katacoda.com/courses/kubernetes/managing-secrets)

# OpenShift
::: incremental :::
- ממשק ל-Kubernetes של RedHat
- יש לו CLI משלו עם הרחבות של Kubernetes
- יש לו GUI משלו
:::

## תרגיל: התחברות ל-OpenShift
הכנסו אל [https://www.katacoda.com/openshift/courses/using-the-cluster/cluster-access](https://www.katacoda.com/openshift/courses/using-the-cluster/cluster-access)

## אחסון לצמיתות ב-OpenShift
::: incremental :::
- אפשר ליצור ב-OpenShift תא אחסון לצמיתות
- Persistent Volume
- הוא נוצר על ידי Persistent Volume Claim
- יש אחסון מסוג ReadWriteOnce (RWO) מתאים רק לחיבור לאפליקציה אחת ו-ReadWriteMany (RWX) שמתאים לחיבור לכמה אפליקציות בו"ז
:::

## תרגיל: PVC ב-OpenShift
הכנסו אל [https://www.katacoda.com/openshift/courses/persistence/persistent-intro](https://www.katacoda.com/openshift/courses/persistence/persistent-intro)

## הורדת/העלאת קבצים ב-OpenShift
- אפשר להוריד את הקבצים שנמצאים ב-podים דרך ה-API של OpenShift
- רושמים oc cp ואז שם ה-pod

## תרגיל: הרודת/העלאת קבצים ב-OpenShift
הכנסו אל [https://www.katacoda.com/openshift/courses/using-the-cluster/transferring-files](https://www.katacoda.com/openshift/courses/using-the-cluster/transferring-files)


# תרגילי המשיך:
- [https://www.katacoda.com/courses/docker-security/image-scanning-with-clair](https://www.katacoda.com/courses/docker-security/image-scanning-with-clair)
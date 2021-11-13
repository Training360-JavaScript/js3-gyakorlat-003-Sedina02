# Exportálás

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. feladat
- Fájl: `solutions/app.js`
- Export: a setCookie és a cookieHandler.
- Az előző storage modulban lévő 2 fájlt mozgasd át ide, és exportáld ki 
a következők szerint:
  - a setCookie default export legyen
  - a cookieHandler egy export objektumon belül legyen
  - az app.js-ben mind a kettőt importáld be, és exportáld ki egy közös 
objektumban.

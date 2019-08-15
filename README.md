PASSWD
====
Parse linux passwd file to an object

### INSTALL
```
npm install --save @hungtcs-box/passwd
```
or using yarn
```
yarn add @hungtcs-box/passwd
```

### USAGE
```ts
import { passwd } from '@hungtcs-box/passwd';

passwd().then(users => {
  console.log(users); // [{ user, uid, gid, gecos, home, shell }]
});
```

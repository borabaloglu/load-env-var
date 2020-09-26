<h1 align="center">load-env-var</h1>

> A helper module for loading environment variables

### Install

```bash
$ npm i load-env-var
```

### Usage

##### Import

```js
const envLoader = require("load-env-var");

// or

import envLoader from "load-env-var";
```

##### Load Number

```js
envLoader.loadNumber("PORT", {
  allowNaN: false,
  allowInfinity: false,
  defaultValue: 5000,
});
```

##### Load String

```js
envLoader.loadString("JWT_SERCRET", {
  defaultValue: "thiskeyissecret",
});
```

##### Load Array

```js
envLoader.loadString("NAMES", {
  type: "string",
  delimiter: ",",
});
```

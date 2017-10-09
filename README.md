# express-messenger [![NPM version](https://badge.fury.io/js/express-messenger.svg)](https://npmjs.org/package/express-messenger) [![Build Status](https://travis-ci.org/AndreasPizsa/express-messenger.svg?branch=master)](https://travis-ci.org/AndreasPizsa/express-messenger)

> Solid, extensible middleware for Facebook Messenger bots running on Express

## Installation

```sh
$ npm install --save express-messenger
```

## Usage

```js
const messenger = require('express-messenger');
const bodyParser = require('body-parser')
const app = require('express')();

app.post('/',
  bodyParser.json(),
  messenger()
    .use((message, context) => {
      switch(context.topic) {
        case 'postback.GET_STARTED':
          // say hi!
        case 'text':
          // send a response
      }
    })
)
```

## Related Projects

[messenger-body](https://github.com/AndreasPizsa/messenger-body) – framework agnostic body parser and processor for Facebook Messenger bots.

## License

MIT © [Andreas Pizsa](https://github.com/AndreasPizsa)

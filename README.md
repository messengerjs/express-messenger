# express-messenger [![NPM version](https://badge.fury.io/js/express-messenger.svg)](https://npmjs.org/package/express-messenger) [![Build Status](https://travis-ci.org/AndreasPizsa/express-messenger.svg?branch=master)](https://travis-ci.org/AndreasPizsa/express-messenger)

[![Greenkeeper badge](https://badges.greenkeeper.io/AndreasPizsa/express-messenger.svg)](https://greenkeeper.io/)

> run your Messenger bot on Express

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

[messenger-core](https://github.com/AndreasPizsa/messenger-core) – Write-once, run-anywhere Messenger bots.

## Sponsor



## License

MIT © [Andreas Pizsa](https://github.com/AndreasPizsa)

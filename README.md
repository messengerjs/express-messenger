# express-messenger [![NPM version](https://badge.fury.io/js/express-messenger.svg)](https://npmjs.org/package/express-messenger) [![Build Status](https://travis-ci.org/AndreasPizsa/express-messenger.svg?branch=master)](https://travis-ci.org/AndreasPizsa/express-messenger)

> Solid, extensible middleware for Facebook Messenger bots running on Express

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/7WPHx1LeH7GTS36ys4vPHSLy/AndreasPizsa/express-messenger'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/7WPHx1LeH7GTS36ys4vPHSLy/AndreasPizsa/express-messenger.svg' />
</a>

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

## Sponsor

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/7WPHx1LeH7GTS36ys4vPHSLy/AndreasPizsa/express-messenger'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/7WPHx1LeH7GTS36ys4vPHSLy/AndreasPizsa/express-messenger.svg' />
</a>

## License

MIT © [Andreas Pizsa](https://github.com/AndreasPizsa)

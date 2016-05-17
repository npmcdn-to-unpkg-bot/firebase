---
title: "FireBase: Working with React"
layout: default
javascript-not-used:
- http://fb.me/JSXTransformer-0.10.0.js
- https://npmcdn.com/throw-in-the-towel@2
- https://npmcdn.com/react-mixin@3.0.5
javascript:
- https://cdn.firebase.com/js/client/2.4.0/firebase.js
- https://cdn.firebase.com/libs/reactfire/0.6.0/reactfire.min.js
babel:
- app.js
---

This is an example of using FireBase and React together.

* [Detailed Instructions](https://www.firebase.com/blog/2014-05-01-using-firebase-with-react.html)

This example uses the FireBase implicit mixin and `throw-in-the-towel` which is
babel replacement that converts JSX inline.

Also converting to ES6. We need `react-mixin` to use mixins.

---

<div id="app"></div>

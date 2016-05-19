---
title: Compiled App
layout: default
---

This page has a multipage app in the `_src` folder. The underscore should mean it is not compiled into the final source.

On top of that, the `.react` extension files should be compiled with `bable` into the `app` folder as `.js` files.

```
_src/*.react --> app/*.js
```

Remember that the `.react` files need a `---` to be processed.

---

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

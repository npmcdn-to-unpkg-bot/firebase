---
title: Compiled App
layout: default
babel: true
javascript:
- detail.js
- app.js
---

This page has a multipage app in the `_src` folder. The underscore should mean it is not compiled into the final source.

On top of that, the `.react` extension files should be compiled with `bable` into the `app` folder as `.js` files.

```
_src/*.react --> app/*.js
```

Remember that the `.react` files need a `---` to be processed.

---

<div id="app"></div>

<script type="text/babel">
  ReactDOM.render(
      <Detail />,
      document.getElementById('app')
  );
</script>

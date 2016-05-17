---
title: Require uses External Pages
layout: default
javascript:
- https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.js
babel:
- /app/app.js
---

Try and pull different React components in from multiple files using `require`


<!--

<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.27/system.js"></script>
<script>
  // set our baseURL reference path
  System.config({
    baseURL: '/app',
    transpiler: 'babel',
    babelOptions: {
      plugins: ["transform-es2015-modules-systemjs"],
      presets: ['es2015', 'react']
    }
  });
  // loads /app/main.js
  System.import('/app/app.js');
</script>

 -->

<div id="app"></div>

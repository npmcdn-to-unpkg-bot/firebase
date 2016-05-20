---
title: Separate files
layout: default
babel:
- detail.jsx
- app.jsx
---

Multiple separate files for each class

---

<div id="app"></div>

<script type="text/babel">
  ReactDOM.render(
      <Detail />,
      document.getElementById('app')
  );
</script>

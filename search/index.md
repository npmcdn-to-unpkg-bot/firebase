---
title: Search
layout: default
babel:
- search.jsx
---

Use a `liquid` script to build a Javascript array of pages that I can search
through using a React component.

<script>
  const pages = [
    {% assign j = 0 %}
    {% assign pages = site.pages | sort: "title" %}
    {% for page in pages %}
      {% if page.sitemap != false %}

        {% assign title = page.title %}
        {% if title == blank %}
          {% assign title = "No Title" %}
        {% endif %}

        {% assign j = j | plus: 1 %}

        {
            id: {{ j }},
            title: '{{ title }}',
            url: '{{ page.dir }}'
        },

      {% endif %}
    {% endfor %}
    {
      id: 0,
      title: 'Page does not exists (test)',
      url: '/doesnotexist/'
    }
  ];
</script>

<div id="app"><img src="/images/loading-long.gif"></div>

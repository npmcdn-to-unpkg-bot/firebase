
## Config

* add `flexlisder` to the SASS list in `/css/style.css`
* add `flexslider.js` to `javascript` includes
* define the banners
* include the file

## Front Matter

---
javascript:
- /js/jquery.flexslider.js
banners:
- url: "/banners/image1.jpg"
- url: "/banners/image2.jpg"
- url: "/banners/image3.jpg"
---

## Code

{% assign flexslider = page.banners %}
{% include flexslider.html %}

## Extended

<div class="container">
    <div class="row">
        <div class="col-xs-12">
            {% assign flexslider = page.banners %}
            {% include flexslider.html %}
        </div>
    </div>
</div>

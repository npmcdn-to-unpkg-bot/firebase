Gallery Dir
============

Popup gallery from images in a folder. Each image will be shown in alphabetical
order.

    <div class="col-xs-12">
        {% assign gallerybase = page.dir %}
        {% include gallery\dir.html %}
    </div>

Also need JS Library

    javascript:
        - /js/jquery.colorbox.js

and Stylesheet

    stylesheets:
        - /css/colorbox.css

either in the `page` or `site` frontmatter

Gallery List
============

Popup gallery from a defined list of images.

    <div class="col-xs-12">
        {% assign gallery = page.gallery %}
        {% include gallery\list.html %}
    </div>

We define the images in the front matter

    gallery:
        - path: /images/gallery/open.jpg
        - path: /images/gallery/closed.jpg
        - path: /images/gallery/dash8-4.jpg
        - path: /images/gallery/dash8-5.jpg

Also need JS Library

    javascript:
        - /js/jquery.colorbox.js

and Stylesheet

    stylesheets:
        - /css/colorbox.css

either in the `page` or `site` frontmatter. Jsut change the assignment

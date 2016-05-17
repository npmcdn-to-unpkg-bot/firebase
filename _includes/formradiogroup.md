
## Config

* Include the `verify.notify.min.js` js value
* Add the include


## Front Matter

---
javascript:
- /js/verify.notify.min.js
isocertified:
    id: isocertified
    required: true
    label: Are you an ISO certified company?
    items:
        - Yes
        - No
---

## Code

{% assign formradiogroup = page.isocertified %}
{% include formradiogroup.html %}


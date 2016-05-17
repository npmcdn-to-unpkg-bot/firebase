Jekyll, React and Firebase
=========================

The idea is to have a single system that manages data. The front end - based in Jekyll - will be easy to edit by the end user. It will use React to display and edit data. The back end database will be decoupled and eventually a YAML RESTful server.

* [Jekyll](http://jekyllrb.com/) for workflow and compiling source into a working system
* [Bootstrap](http://getbootstrap.com/) for the layout
* [Bootswatch](https://bootswatch.com/) for some colour
* [SASS](http://sass-lang.com/) for themes and CSS
* Contact page with VerifyJS](https://github.com/jpillora/verifyjs)
* Navbar with current page active
* [ReactJS](https://facebook.github.io/react/) for JS interaction and components
* [ReactJS Router](https://github.com/reactjs/react-router)
* [FireBase](https://www.firebase.com) is a hosted database system that uses document format to store data in what ever structure we want
* [jQuery](http://jquery.com)
* [npmcdn.com](http:/npmcdn.com) to include JS files from a CDN. Try and use a single CDN for as much as possible to limit the need for DNS lookups.
* [Throw in the Towel](https://github.com/danmartinez101/throw-in-the-towel) transcribes ES2015 into ES5
  * https://npmcdn.com/throw-in-the-towel@2

## ReactJS

Designed by Facebook for their own systems, React uses custom HTML components to display and interact with the DOM. It is good for complex sites but only has one way binding of data - so edit pages will be harder

* [React](https://facebook.github.io/react/) for JS interaction and components
* [Documentation](https://facebook.github.io/react/docs)

#### Router

To access pages by the data handle, we need a router component

* [React Router](https://github.com/reactjs/react-router)


## FireBase Database

FireBase is both database and file store (hosted). The database is document style.

* [Firebase](https://www.firebase.com
* [ReactFire](https://github.com/firebase/reactfire/) interface for ReactJS

### Database

The Firebase database we are using is.

* https://luminous-fire-3175.firebaseio.com/

This will be made up of the following data stores.

* locations
* units
* users
* tenants
* plans
* tenancies
* invoices

#### Reference
Ultimately the invoices will get their data from the PT database

* [Example Todo List using React](https://github.com/firebase/reactfire/blob/master/examples/todoApp/js/todoAppFirebaseExplicit.js)

### Hosting

This is used for other assets like images

### Javascript to use

The __NPM CDN__ version fails with error `Firebase is not defined` and they files are different between the two CDNs 

- https://cdn.firebase.com/js/client/2.4.2/firebase.js
- https://cdn.firebase.com/libs/reactfire/0.7.0/reactfire.js

vs

- https://npmcdn.com/firebase@2.4.0 <-- fails
- https://npmcdn.com/reactfire@0.7.0


## Transcribing into ES5

JS is written in ES2015 - which cannot be read by normal browsers. So we want to transcribe it into ES5 version on the fly.

* [Throw in the Towel](https://github.com/danmartinez101/throw-in-the-towel)

A big brother includes React and React Dom is

* [React Towel](https://github.com/danmartinez101/react-towel)

In production, we will want to compile it.

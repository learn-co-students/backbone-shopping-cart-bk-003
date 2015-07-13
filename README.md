# Intro to Backbone - Passing Models to Views

## Overview

* About
* Getting and Setting Values
* Resources

## About

TODO

## Getting and Setting Values

To interact with a model you must use the `get()` and `set()` functions defined on it. For instance, if you wanted to set a user's admin privileges to `true`, you could run the following code:

```javascript
user.get("admin");       // Returns false
user.set("admin", true);
user.get("admin");       // Returns true
```

#### Passing Models to Views

It's useful to give your views a reference to your model and sometimes the reverse is also useful. If you pass in the `model` key into the object used to contruct the view Backbone attaches it directly to the view object it instantiates.

```javascript
var user = new User;
var myView = new MyView({model : user})
myView.model                              // Returns {height : 6.5, weight : 175, admin : true};
```

## Resources

* [Tying the Model to the View](http://orizens.com/wp/topics/backbone-view-patterns-the-relationship-with-model/)

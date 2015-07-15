# Intro to Backbone - Passing More Complex Models to Views

## Overview

* Objective
* Model
  * Getting and Setting Values
  * Defaults
  * Custom Methods
* Passing Models to Views
* Attaching Views
* Inserting DOM Elements
* Resources

## Objective

In this lab you'll be integrating slightly more complex models with your view to make a shopping chart for a t-shirt website. The website you'll be working on looks like this:

![website](http://web-dev-readme-photos.s3.amazonaws.com/js/dino/html.png)

Ideally, you should be able to click on a shirt style, a shirt size, and then click "Add to Cart".

![first purchase](http://web-dev-readme-photos.s3.amazonaws.com/js/dino/first-purchase.png)

In the console, you should then be able to access your `app` object, it's attached `view` object, and the view's attached `model` object. The items list should be updated along with the subtotal, shipping cost, taxes, and total:

![console with one shirt](http://web-dev-readme-photos.s3.amazonaws.com/js/dino/one-shirt.png)

You should then be able to add another shirt to the cart:

![second purchase](http://web-dev-readme-photos.s3.amazonaws.com/js/dino/second-purchase.png)

And the attributes should update again:

![console with one shirt](http://web-dev-readme-photos.s3.amazonaws.com/js/dino/two-shirts.png)

## Model

So far our models have been pretty simple, so we're going make a more robust model this time around. It will be a smart cart, in that it keeps track of the items the user wants to purchase and dynamically generates the subtotal, shipping, tax, and total costs.

#### Getting and Setting Values

To interact with a model you must use the `get()` and `set()` functions defined on it. For instance, if you wanted to set a user's admin privileges to `true`, you could run the following code:

```javascript
user.get("admin");       // Returns false
user.set("admin", true);
user.get("admin");       // Returns true
```

#### Defaults

The model should default to having nothing in its list of items. It should also start with a subtotal, total, shipping, and tax all equalling zero. Let's take a look at how we might make default values for a website that sells tickets to a [Nick Jonas](http://media.giphy.com/media/CxJ3esBGiK3du/giphy.gif) concert in Arizona;

```javascript
JonasTicketVender = Backbone.Model.extend({
  defaults:
    numTixLeft: 47,
    artistName: "Nick Jonas",
    venue: "The Marquee",
    state: "AZ",
    city: "Tempe"
});
```

However, for the purposes of this lab's testing suite, we're going to wrap our defaults in a function that returns an object. This object will have the properties we'll need, like so:

```javascript
JonasTicketVender = Backbone.Model.extend({
  defaults: function() { 
    return {
      numTixLeft: 47,
      artistName: "Nick Jonas",
      venue: "The Marquee",
      state: "AZ",
      city: "Tempe",
      openers: ["Tinashe", "Maroon 5", "Matt McAndrew"]
    };
  }
});
```

#### Custom Methods

Let's make a method in our `JonasTicketVendor` class that will add a band to the `openers` array. We'll have to fetch the array using the `.get()` function and save the array as a variable. We can push the band name into this temporary variable, then use the `set()` function to permanently change our instance of our model:

```javascript
JonasTicketVendor = Backbone.Model.extend({
  defaults: function() { 
    return {
      numTixLeft: 47,
      artistName: "Nick Jonas",
      venue: "The Marquee",
      state: "AZ",
      city: "Tempe",
      openers: ["Tinashe", "Maroon 5"]
    };
  },
  addOpener: function(band) {
    var openers = this.get("openers");
    openers.push(band);
    this.set("openers", openers);
  }
});
```

To call on this function, we first need to make a new `JonasTicketVendor`:

```javascript
var ticketVender = new JonasTicketVendor;
```

Now we can call the function on the instance of our `JonasTicketVendor` called `ticketVender`:

```javascript
ticketVender.addOpener("Matt McAndrew");

ticketVender.get("openers");
// Returns ["Tinashe", "Maroon 5", "Matt McAndrew"]
```

## Passing Models to Views

It's useful to give your views a reference to your model, and sometimes the reverse is also useful. If you pass in the `model` key into the object used to contruct the view, Backbone attaches it directly to the view object it instantiates.

```javascript
var ticketVendor = new JonasTicketVendor;
var myView = new MyView({model : ticketVendor});
```

## Attaching Views

Here's how you would make a new model, pass the model to a new view object, and attach this view to the app object as a property called "formView":

```javascript
app = {}

function activateApp() {
  var ticketVendor = new JonasTicketVendor;
  var view = new FormView({model : ticketVendor});
  app.formView = view;
}

activateApp();
```

## Inserting DOM Elements

Here is how you could call on your view's `el` property and append the resulting DOM object to the div with the id of `container`:

```javascript
app = {}

function activateApp() {
  var ticketVendor = new JonasTicketVendor;
  var view = new FormView({model : ticketVendor});
  app.formView = view;
  $(".container").append(app.formView.el);
}

activateApp();
```

## Resources

* [What is a View](https://cdnjs.com/libraries/backbone.js/tutorials/what-is-a-view/)
* [Tying the Model to the View](http://orizens.com/wp/topics/backbone-view-patterns-the-relationship-with-model/)

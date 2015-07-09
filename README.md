Models are the data layer in Backbone, similar to their function in Rails.  They serve as in memory representations of any data/data structures you need to build a UI.  In Rails, your models help you persist data to the database.  You can retrieve in memory representations of a row of data from the database for example if you had a users table.

```ruby
user = User.find(1)
```
The "user" variable would be an activerecord object which is essentially an object wrapping a set of key value pairs "height => 6 feet".  You can then alter the data held in that object in memory, and later call save to persist that data to the database.  Backbone has a similar model.  You can take data from a user, write it to your model, and then call save on that object.  The only difference is these objects live in memory on the client side (the users computer rather than the server) and when persisted are really making POST/PUT/PATCH requests back to the server to persist/update the data.  Backbone Models can also load data from the server, so they can do the full job of syncing data.  Similar to rails, backbone models also hold all of the business logic for the data you need to work with.  

In Backbone, views and models work together and views in Backbone are very different than how we typically think of them in the Rails world.  A view's job in Backbone is to respond to events (user input) and write that data to models.  It's other main job is to render the UI.  As we learned in the last lab, views generally do these tasks for one specific section of the UI and know how to render all the relevant HTML and then insert it into the DOM.

From the Backbone docs:

Model
* Orchestrates data and business logic.
* Loads and saves from the server.
* Emits events when data changes.

View
* Listens for changes and renders UI.
* Handles user input and interactivity.
* Sends captured input to the model.

In this lab we want to combine the ideas of a model and a view.  Our view is going to render a form into the DOM.  It will then wait for user interaction, handle that interaction by writing the user's input into an in memory model.  In the next lab we will complete the loop by introducing the events module of Backbone which allows our views to listen to changes to the model and update themselves.

Models extend/inherit from Backbone.Model and take an object with certain preset keys.

```javascript
User = Backbone.Model.extend({
  initialize : function() {
    //do some stuff
  },
  defaults : {
    "name" : "generic user"
  }
})
user = new User({
  height : 6,
  weight : 175,
  admin : true
})
```

To interact with a model you must use the get and set functions defined on it.  
```javascript
user.get("height") #=> 6
user.set("height", 6.5)
user.get("height") #=> 6.5
```

It's useful to give your views a reference to your model and sometimes the reverse is also useful. If you pass in the model key into the object used to contruct the view Backbone attaches it directly to the view object it instantiates.

```javascript
var myView = new MyView({model : user})
myView.model #=> {height : 6.5, weight : 175, admin : true};
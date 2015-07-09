'use strict';

describe( "#boostrap", function() {
  it("should instantiate your view and return the view object", function() {
    var yourView = bootstrap();
    expect(yourView.el).toContainHtml('<h1>blake</h1>')
  });

  it("should use the el property of your view to append the view to the body of the DOM", function() {
    var yourView = bootstrap();
    expect($("body")).toContainHtml('<h1>blake</h1>');
  });      
});

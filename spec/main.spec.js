'use strict';

describe( "#boostrap", function() {
  it("should instantiate your view and return the view object", function() {
    bootstrap();
    expect($("body")).toContainHtml('<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>');
    $("#name").val("blake")
    $("#mySubmit").click()
    expect(app.formView.model.get("name")).toEqual("blake")
  });    
});

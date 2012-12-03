Meteor.subscribe("directory");
Meteor.subscribe("comments");

Template.page.events({
  'click .addComm': function (event, template) {
    Meteor.call('addComment',{
	user: template.find("#user").value,
	url: template.find("#pageurl").value,
	comment: template.find("#addcommentfield").value,
	email: template.find("#email").value
	});
    return false;
  }
});




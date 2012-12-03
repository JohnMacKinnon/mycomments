Meteor.publish("directory", function () {
return Meteor.users.find({}, {fields: {emails: 1}});
 
});

Meteor.publish('comments', function () {
  return Comments.find();
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Comments.find().count() === 0) {
      
        Comments.insert({user: "JMack", comment: "This is a comment"});
    }
  });
}



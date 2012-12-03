// Commenters -- data model
// Loaded on both the client and the server


Comments = new Meteor.Collection("comments");

Meteor.methods({
  // options should include: title, description, x, y, public
  addComment: function (options) {
    options = options || {};

    return Comments.insert({
	  user: options.user,
      title: options.title,
      comment: options.comment,
	  url:options.url,
	  email:options.email
    });
  }

  
  
});

var url = "http://www.411.fm";
var user_id = this.userId;

	
	
var email = function () {
 var user = Meteor.user();
    if (!user)
      return 'NoUser';

    if (user.profile && user.profile.name)
      return user.profile.name;
    if (user.username)
      return user.username;
    if (user.emails && user.emails[0] && user.emails[0].address)
      return user.emails[0].address;
	console.log(user);
    return  user._id;
};





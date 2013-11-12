# InstaTech

* [app/models/user.rb](./app/models/user.rb)
* [app/controllers/sessions_controller.rb](./app/controllers/sessions_controller.rb)
* [app/controllers/users_controller.rb](./app/controllers/users_controller.rb)
* [app/helpers/sessions_helper.rb](./app/helpers/sessions_helper.rb)
* [app/views/sessions/new.html.erb](./app/views/sessions/new.html.erb)
* [app/views/users/_form.html.erb](./app/views/users/_form.html.erb)


things to do for project

* Add omniauth to allow users to add feeds or entries to twitter/facebook/etc
* Make sure I did add_index like and unlike correctly

1) fix published at time on stories to get rid of the T and the Z
1) add page that has all stories on it
1) add droppable to trash can
1) page not rerendering on adding news source

  1) build home page (use Twitter bootstrap)
  2) Build feed page for user after they sign in (do this in backbone)
  3) Allow user to add feeds (have a feed index page, but also allow the user to input a new feed themselves)
  4)
  5) Chat with other users currently online
	6) Animated menu items
	7) Draggable / Droppable
	8) Fix footer alignment

	9) Awesome page loads: http://www.jqueryrain.com/?zdnfsKTS

  Added polymorphic associations to comment model so that both entries and feeds can have comments


	https://github.com/javan/whenever


	1) Make page reload on adding feed
	1) Twitter - add a twitter feed both to the main feed page (which consolidates
		all of the feeds, make sure they alternate), and also to each feed page (do
			 this first). Facebook. Google+. LinkedIn. (https://github.com/sferik/twitter).
			 http://stackoverflow.com/questions/10169841/display-a-twitter-feed-from-a-rails-app
	2) OmniAuth. Allow the user to add their own twitter feed
	3) User Comments
	4) Allow users to email link and title of article to themselves


	Get Figaro working (https://github.com/laserlemon/figaro)
	After that work on OAuth
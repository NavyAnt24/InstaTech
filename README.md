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
1) page not rerendering on adding news source
2) add loading bar when adding news source, it takes a while

  1) build home page (use Twitter bootstrap)
  2) Build feed page for user after they sign in (do this in backbone)
  3) Allow user to add feeds (have a feed index page, but also allow the user to input a new feed themselves)
  4)
  5) Chat with other users currently online
	6) Animated menu items
	7) Draggable / Droppable
	8) Fix footer alignment

  Added polymorphic associations to comment model so that both entries and feeds can have comments
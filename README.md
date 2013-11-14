# InstaTech

* [app/models/user.rb](./app/models/user.rb)
* [app/controllers/sessions_controller.rb](./app/controllers/sessions_controller.rb)
* [app/controllers/users_controller.rb](./app/controllers/users_controller.rb)
* [app/helpers/sessions_helper.rb](./app/helpers/sessions_helper.rb)
* [app/views/sessions/new.html.erb](./app/views/sessions/new.html.erb)
* [app/views/users/_form.html.erb](./app/views/users/_form.html.erb)


things to do for project

9) Add scrollbar to tweets: http://baijs.nl/tinyscrollbar/
10) Add Like and Tweet buttons using the simple scripts the Flarnie showed us
After that work on OAuth
11) Get the Twilio API working so users can text the story to themselves
12) Get Action Mailer working so users can email story links to themselves

* Add omniauth to allow users to add feeds or entries to twitter/facebook/etc

1) page not rerendering on adding news source

  1) build home page (use Twitter bootstrap)

6) Animated menu items -> looking into the bootstrap css to see if you can have the animation fade in instead of just change (not important)

  5) Chat with other users currently online

	8) Fix footer alignment


	https://github.com/javan/whenever


	1) Make page reload on adding feed
	1) Twitter - add a twitter feed both to the main feed page (which consolidates
		all of the feeds, make sure they alternate), and also to each feed page (do
			 this first). Facebook. Google+. LinkedIn. (https://github.com/sferik/twitter).
			 http://stackoverflow.com/questions/10169841/display-a-twitter-feed-from-a-rails-app.

			 Replace Twitter Website Url for this app on the Twitter developer site once
				 you get a domain name
	2) OmniAuth. Allow the user to add their own twitter feed
	3) User Comments
	4) Allow users to email link and title of article to themselves
	5) Browse feeds and search for new feeds
	6) Add Pace, found on jQuery Rain
	7) Fix Tweet area: http://jsfiddle.net/KcDd3/
	8) Fix tweets controller to make sure you are not adding the same feed twice (if
		you are, then just delete the old tweets)
	9) Add the Tweet button: https://dev.twitter.com/docs/tweet-button


	THINGS DONE
	* 	Get Figaro working (https://github.com/laserlemon/figaro)
	7) Draggable / Droppable
  3) Allow user to add feeds (have a feed index page, but also allow the user to input a new feed themselves)
  2) Build feed page for user after they sign in (do this in backbone)
	1) fix published at time on stories to get rid of the T and the Z
	1) add page that has all stories on it
	1) add droppable to trash can
	9) Awesome page loads: http://www.jqueryrain.com/?zdnfsKTS
	10) Added polymorphic associations to comment model so that both entries and feeds can have comments
	11) * Make sure I did add_index like and unlike correctly
class TweetsController < ApplicationController

  def create
    Tweet.where(:feed_id => params[:feed_id]).destroy_all

    search_term = params[:feed_url].split('.')[1]

    puts search_term ###

    Twitter.search( search_term,
                    :count => 20,
                    :result_type => "recent").results.map do |status|

                      puts
                      puts
                      puts
                      puts
                      puts
      puts status.created_at.to_s

      puts
      puts
      puts
      puts
      puts

      text = status.text
      time = DateTime.parse(status.created_at.to_s)
      tweet_id = status.id
      username = status.user.screen_name

      Tweet.create( :text => text,
                    :time => time,
                    :tweet_id => tweet_id.to_s,
                    :username => username,
                    :feed_id => params[:feed_id]
                  )
    end

    render :nothing => true
  end

  def index
    @tweets = Tweet.where(:feed_id => params[:feed_id])
    render :json => @tweets
  end

end
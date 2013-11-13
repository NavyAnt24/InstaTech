class TweetsController < ApplicationController

  def create
    feed_url = params[:feed_url]
    feed_id = params[:feed_id]
    search_term = :feed_url.split('.')[1]

    Twitter.search(search_term, :count => 20, :result_type => "recent").results.map do |status|
      text = status.text
      time = DateTime.parse(status.created_at)
      tweet_id = status.id
      username = status.user.screen_name
      if Tweet.where(:tweet_id => tweet_id).length == 0
        Tweet.create(:text => text, :time => time, :tweet_id => tweet_id, :username => username, :feed_id => feed_id)
      end
    end
  end

  def index
  end

end
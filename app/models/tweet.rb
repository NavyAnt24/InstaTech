class Tweet < ActiveRecord::Base
  attr_accessible :text, :time, :tweet_id, :username, :feed_id

  validates :text, :time, :tweet_id, :username, :feed_id, :presence => true
end

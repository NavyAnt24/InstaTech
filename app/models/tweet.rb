class Tweet < ActiveRecord::Base
  attr_accessible :text, :time, :tweet_id, :username, :feed_id, :name

  validates :text, :time, :tweet_id, :username, :feed_id, :name, :presence => true

  belongs_to :feed
end

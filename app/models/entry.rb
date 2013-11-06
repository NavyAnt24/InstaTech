class Entry < ActiveRecord::Base
  attr_accessible :guid, :link, :title, :published_at, :feed_id, :json

  belongs_to :feed
  has_many :comments, as: :commentable
end
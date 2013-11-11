class Entry < ActiveRecord::Base
  attr_accessible :guid, :link, :title, :published_at, :feed_id, :json

  belongs_to :feed
  has_many :comments, as: :commentable, :dependent => :destroy
  has_many :likes, as: :likeable, :dependent => :destroy

  def self.create_from_json!(entryData, feed)
    Entry.create!({
      guid: entryData.guid,
      link: entryData.link,
      published_at: entryData.pubDate,
      title: entryData.title,
      json: entryData,
      feed_id: feed.id
    })
  end

  def liked
    Like.exists?(:likeable_id => self.id,
      :likeable_type => "Entry",
      :like_or_unlike => 1,
      :user_id => self.feed.user_id)
  end

  def unliked
    Like.exists?(:likeable_id => self.id,
      :likeable_type => "Entry",
      :like_or_unlike => -1,
      :user_id => self.feed.user_id)
  end

  def as_json(options)
    super(:include => [:feed], :methods => [:liked, :unliked])
    # super(:include => [:entries], :methods => [:liked, :unliked])
    # include comments later on
  end

end
class Entry < ActiveRecord::Base
  attr_accessible :guid, :link, :title, :published_at, :feed_id, :json

  belongs_to :feed
  has_many :comments, as: :commentable

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

end
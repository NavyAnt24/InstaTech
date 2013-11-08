class Feed < ActiveRecord::Base
  attr_accessible :url, :title, :user_id

  has_many :entries, :dependent => :destroy
  has_many :comments, as: :commentable

  def self.find_or_create_by_url(url, user_id)
    feed = Feed.where(:url => url, :user_id => user_id).first
    return feed if feed
    begin
      feed_data = SimpleRSS.parse(open(url))
      feed = Feed.create!(title: feed_data.title, url: url, user_id: user_id)
      feed_data.entries.each do |entry_data|
        Entry.create_from_json!(entry_data, feed)
      end
    rescue SimpleRSSError
      puts "error!"
      return nil
    end
    feed
  end

  def reload
    # reloads entries
    begin
      feed_data = SimpleRSS.parse(open(url))
      self.title = feed_data.title
      save!

      existing_entry_guids = Entry.pluck(:guid).sort
      feed_data.entries.each do |entry_data|
        unless existing_entry_guids.include?(entry_data.guid)
          Entry.create_from_json!(entry_data, self)
        end
      end

      self
    rescue SimpleRssError
      return false
    end
  end

end
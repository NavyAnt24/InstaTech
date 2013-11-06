class Feed < ActiveRecord::Base
  attr_accessible :url, :title, :user_id

  has_many :entries, :dependent => :destroy
  has_many :comments, as: :commentable
end

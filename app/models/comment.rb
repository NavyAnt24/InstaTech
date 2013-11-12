class Comment < ActiveRecord::Base
  attr_accessible :body, :commentable_id, :commentable_type, :user_id

  belongs_to :user
  belongs_to :commentable, polymorphic: true
  
  validates :body, :commentable_id, :commentable_type, :presence => true
  validates :user_id, :presence => true
end
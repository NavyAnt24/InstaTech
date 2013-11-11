class Like < ActiveRecord::Base
	attr_accessible :like_or_unlike, :likeable_id, :likeable_type, :user_id

	belongs_to :user
	belongs_to :likeable, polymorphic: true
	
	validates :likeable_id, :likeable_type, :presence => true
	validates :user_id, :presence => true

	validates_uniqueness_of :user_id, :scope => [:likeable_id, :likeable_type]
end

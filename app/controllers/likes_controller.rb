class LikesController < ApplicationController

	def create
		Like.create!(:likeable_id => params[:entry_id],
			:likeable_type => params[:likeable_type],
			:like_or_unlike => params[:like_or_unlike],
			:user_id => current_user.id)

		render nothing: true
	end

	def destroy
		like = Like.where(:likeable_id => params[:entry_id],
			:likeable_type => params[:likeable_type],
			# :like_or_unlike => 1,
			:user_id => current_user.id)
		
		if like
			Like.destroy(like)
		end

		render nothing: true
	end

end

class FeedsController < ApplicationController

  def index
    @feeds = Feed.where(:user_id => current_user.id).includes(:entries)
    render :json => @feeds.includes(:comments)
  end

  def create
    @feed = Feed.find_or_create_by_url(params[:feed][:url], current_user.id)
    if @feed
      render :json => @feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

end

class FeedsController < ApplicationController

  def index
    @feeds = Feed.where(:user_id => current_user.id)
    render :json => @feeds
  end

  def create
    @feed = Feed.find_or_create_by_url(params[:feed][:url], current_user.id)

    if @feed
      render :json => @feed, :include => :entries
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    @feed = Feed.find(params[:id])

    if @feed.destroy
      render nothing: true
    else
      render @feed.errors.full_messages
    end
  end

end
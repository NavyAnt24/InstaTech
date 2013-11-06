class FeedsController < ApplicationController

  def index
    @feeds = Feed.where(:user_id => ).includes
    render :json => @feeds.includes(:comments)
  end

  def create
  end

end

class EntriesController < ApplicationController

  def index
    feed = Feed.find(params[:feed_id])
    time_since_latest_entry = Time.now - feed.entries.first.publishedAt

    if time_since_latest_entry > 120
      feed.reload
    end

    render :json => feed.entries
  end

  def destroy
    @entry = Entry.find(params[:id])

    if @entry.destroy
      render nothing: true
    else
      render @entry.errors.full_messages
    end
  end

end
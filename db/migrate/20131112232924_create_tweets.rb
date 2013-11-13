class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :text, :null => false
      t.datetime :time, :null => false
      t.integer :tweet_id, :null => false
      t.string :username, :null => false
      t.string :feed_id, :null => false

      t.timestamps
    end

    add_index :tweets, :tweet_id, :unique => true
    add_index :tweets, :feed_id, :unique => true
  end
end

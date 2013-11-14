class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.text :text, :null => false
      t.datetime :time, :null => false
      t.integer :tweet_id, :limit => 8, :null => false
      t.string :username, :null => false
      t.integer :feed_id, :null => false
      t.string :name, :null => false

      t.timestamps
    end

    add_index :tweets, :tweet_id, :unique => true
    add_index :tweets, :feed_id
  end
end

class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :url, :null => false
      t.string :title, :null => false
      t.integer :user_id

      t.timestamps
    end

    add_index :feeds, :url
  end
end

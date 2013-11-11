class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
    	t.integer :like_or_unlike #1 = LIKE, -1 = UNLIKE
    	t.integer :likeable_id
    	t.string :likeable_type

    	t.integer :user_id

      t.timestamps
    end

    add_index :likes, [:user_id, :likeable_id, :likeable_type], :unique => true
    add_index :likes, :user_id
  end
end

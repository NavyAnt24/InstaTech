class ChangeEntriesLongerText < ActiveRecord::Migration
  def change
    change_column :entries, :guid, :text
    change_column :entries, :link, :text
    change_column :entries, :title, :text
  end
end
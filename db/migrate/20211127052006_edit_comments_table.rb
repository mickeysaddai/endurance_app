class EditCommentsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :user_id
    add_column :comments, :person_id, :integer
  end
end

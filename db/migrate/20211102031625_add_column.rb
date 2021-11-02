class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :distance, :integer
  end
end

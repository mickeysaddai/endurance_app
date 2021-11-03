class AddDistanceColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :distance, :float, null: false
  end
end

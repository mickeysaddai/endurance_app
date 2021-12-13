class AddCaloriesToActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :calories, :integer
  end
end

class MakeChangesToTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :distance

  end
end

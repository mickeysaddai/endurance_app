class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :user_id, null: false
      t.string :activity_type, null: false
      t.string :equipment_type
      t.integer :duration, null: false
      t.integer :heartrate
      t.text   :date, null: false
      t.string :time
      t.string :description


      t.timestamps
    end
    add_index :activities, :user_id
  end
end

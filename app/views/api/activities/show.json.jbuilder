json.extract! @activity, :user_id, :activity_type, :distance, :time, :description, :heartrate, :duration, :equipment_type
json.user @activity.user.username
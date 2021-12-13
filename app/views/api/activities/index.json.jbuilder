@activities.each do |activity|
  json.set! activity.id do
    json.extract! activity, :id, :user_id, :activity_type, :distance, :date, :time, :description, :heartrate, :duration, :equipment_type, :calories
    json.user activity.user.username
    json.comments activity.comments
    # json.likes activity.likes
  end
end
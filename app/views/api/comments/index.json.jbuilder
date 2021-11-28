@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :person_id, :body
    # json.user activity.user.username
    # json.user activity.comments
  end
end
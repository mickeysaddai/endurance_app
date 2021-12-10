@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :user_id, :activity_id
        like
    end
end
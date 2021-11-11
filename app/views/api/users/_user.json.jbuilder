if (user.id && user.photo)  
    json.extract! user, :id, :username
    json.photoUrl url_for(user.photo)
end
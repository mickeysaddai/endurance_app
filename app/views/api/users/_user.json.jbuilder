if (user.id)  
    json.extract! user, :id, :username
    
    # json.photoUrl url_for(user.photo)
end
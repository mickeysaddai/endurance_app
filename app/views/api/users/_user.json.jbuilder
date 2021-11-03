if (user.id)
    json.extract! user, :id, :username, :email
end
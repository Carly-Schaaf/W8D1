if current_user
  json.extract! user, :username, :id
else
  {}
end

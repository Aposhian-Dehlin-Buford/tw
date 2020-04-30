insert into users (
   email,
   username,
   password
) values ( 
   ${email},
   ${username},
   ${password}
)
returning username, user_id;
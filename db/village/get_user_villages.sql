select v.village_id, v.village_name, v.user_id, v.x_coord, v.y_coord, v.player_owned
from villages v
join users u on u.user_id = v.user_id
where u.user_id = $1
order by v.village_id asc;
drop table if exists users
drop table if exists buildings
drop table if exists units
drop table if exists villages
drop table if exists village_units
drop table if exists village_buildings

create table users (
   user_id serial primary key,
   email varchar(150) not null,
   password varchar(300) not null,
   username varchar(150) not null
);

create table buildings (
   building_id serial primary key,
   name varchar(100) not null,
   cost integer not null,
   build_time integer not null
);

create table villages (
   village_id serial primary key,
   village_name varchar(100) not null,
   user_id int references users(user_id),
   x_coord integer,
   y_coord integer,
   player_owned boolean not null
);

create table units (
   unit_id serial primary key,
   name varchar(150) not null,
   attack integer not null,
   defence integer not null,
   speed integer not null,
   health integer not null,
   gold_cost integer not null,
   pop_cost integer not null,
   build_time integer not null,
   building_id int references buildings(building_id)
);

create table village_buildings (
   village_buildings_id serial primary key,
   village_id int references villages(village_id),
   building_id int references buildings(building_id)
);

create table village_units (
   village_units_id serial primary key,
   village_id int references villages(village_id),
   unit_id in references units(unit_id),
   quantity integer not null
);
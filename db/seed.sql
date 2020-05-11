insert into villages (village_name, user_id, x_coord, y_coord, player_owned)
values ('Village 1', 1, 5, 5, true),
('Village 3', 2, 2, 2, true),
('Village 2', 1, 6, 3, true);

insert into buildings (name, cost, build_time)
values ('barracks', 500, 1080);

insert into units (name, attack, defence, speed, health, gold_cost, pop_cost, build_time, building_id)
values ('warrior', 8, 5, 10, 100, 25, 1, 360, 1), ('spearman', 2, 6, 10, 100, 15, 1, 300, 1);

insert into village_buildings (village_id, building_id)
values (1, 1);

insert into village_units (village_id, unit_id, quantity)
values (1, 1, 50), (1, 2, 20);
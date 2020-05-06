SELECT * FROM buildings b
JOIN village_buildings vb ON (b.building_id = vb.building_id)
WHERE vb.village_id = $1
ORDER BY b.building_id ASC;
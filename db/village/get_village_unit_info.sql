SELECT * FROM units u
JOIN village_units vu ON (u.unit_id = vu.unit_id)
WHERE vu.village_id = $1
ORDER BY u.unit_id ASC;
const resolveAttack = (attackingUnits, defendingUnits) => {
  console.log("combat calculation")
}

module.exports = {
  attack: (io, socket, db, { attackingVillage, defendingVillage, units }) => {
    console.log("attack sent")
    db.village
      .get_village_unit_info(defendingVillage.village_id)
      .then((defendingUnits) => {
        resolveAttack(units, defendingUnits)
      })
    // console.log(body)
  },
}

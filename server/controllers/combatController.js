const resolveAttack = (attackingUnits, defendingUnits) => {
  console.log('combat calculation')
  const attPower = attackingUnits.reduce((acc, e) => {
    acc += e.attack * e.quantity
  }, 0)
  const defPower = defendingUnits.reduce((acc, e) => {
    acc += e.defence * e.quantity
  }, 0)

  const damageCalc = (attackingUnits, defendingUnits, attPower) => {
    if(attPower >= Math.min(...defendingUnits.map(e => e.health))){
    const randomNum = Math.floor(Math.random() * defendingUnits.length)
    defendingUnits[randomNum].quantity --
    attPower -= defendingUnits[randomNum].health
    if(defendingUnits[randomNum].quantity <= 0){
      defendingUnits.splice(randomNum, 1)
    }
    return damageCalc(attackingUnits, defendingUnits, attPower)
  }
  else{
    return defendingUnits
  }
}
  const remainingDef = damageCalc(attackingUnits, defendingUnits, attPower)
  const remainingAtt = damageCalc(defendingUnits, attackingUnits, defPower)
  return {remainingAtt, remainingDef}
}

module.exports = {
  attack: (io, socket, db, { attackingVillage, defendingVillage, units }) => {
    console.log("attack sent")
    db.village
      .get_village_unit_info(defendingVillage.village_id)
      .then((defendingUnits) => {
        const { remainingAtt, remainingDef } = resolveAttack(
          units,
          defendingUnits
        )
      })
  },
}

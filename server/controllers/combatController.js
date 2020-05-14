const resolveAttack = (attackingUnits, defendingUnits) => {
  console.log("combat calculation")
  const att = attackingUnits.reduce(
    (acc, e) => {
      acc.totalHealth += e.health * e.quantity
      acc.totalPower += e.attack * e.quantity
      acc.totalQuantity += e.quantity
      acc.units.push({ [e.name]: { ...e } })
      return acc
    },
    { totalHealth: 0, totalPower: 0, totalQuantity: 0, units: [] }
  )
  const def = defendingUnits.reduce(
    (acc, e) => {
      console.log(e)
      acc.totalHealth += e.health * e.quantity
      acc.totalPower += e.defence * e.quantity
      acc.totalQuantity += e.quantity
      acc.units.push({ [e.name]: { ...e } })
      return acc
    },
    { totalHealth: 0, totalPower: 0, totalQuantity: 0, units: [] }
  )
  const damageCalc = (att, def) => {
    if (att.totalPower >= def.totalHealth / def.totalQuantity) {
      const randomNum = Math.floor(Math.random() * def.units.length)
      def.totalQuantity--
      def.totalHealth -= 50
      att.totalPower -= 50
      def.units[randomNum].quantity--
      def.totalHealth -= 50
      if (def.units[randomNum].quantity <= 0) {
        def.units.splice(randomNum, 1)
      }
      return damageCalc(att, def)
    } else {
      return def
    }
  }
  const remainingDef = damageCalc(att, def)
  const remainingAtt = damageCalc(def, att)
  return {
    remainingAtt: remainingAtt.units,
    remainingDef: remainingDef.units,
  }
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

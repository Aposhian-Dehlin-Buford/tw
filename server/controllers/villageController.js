module.exports = {
  getVillages: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { user_id } = req.session.user
      console.log(user_id)
      const myVillages = await db.village.get_user_villages(user_id)
      const otherVillages = await db.village.get_other_users_villages(user_id)
      res.status(200).send({myVillages, otherVillages})
    } catch (err) {
      res.status(500).send(err)
    }
  },
  getVillage: async (req, res) => {
    const db = req.app.get("db")
    const { village_id } = req.params
    let village = await db.village.get_basic_village_info(village_id)
    let villageInfo = village[0]
    console.log(villageInfo)
    villageInfo.units = await db.village.get_village_unit_info(village_id)
    db.village
      .get_village_building_info(village_id)
      .then((buildings) => {
        villageInfo.buildings = buildings
        return res.status(200).send(villageInfo)
      })
      .catch((err) => res.status(500).send(err))
  },
  createVillage: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { user_id, village_name } = req.body
      const x_coord = Math.floor(Math.random() * 10)
      const y_coord = Math.floor(Math.random() * 10)
      const newVillage = { user_id, village_name, x_coord, y_coord }
      let villageIdArr = await db.village.create_new_village(newVillage)
      let { village_id } = villageIdArr[0]
      await db.village.create_building_info(village_id)
      let villageInfoArr = await db.village.get_basic_village_info(village_id)
      let villageInfo = villageInfoArr[0]
      const buildingResults = awaitdb.village.get_village_building_info(
        village_id
      )
      villageInfo.buildings = buildingResults
      return res.status(200).send(villageInfo)
    } catch (err) {
      res.status(500).send(err)
    }
  },
}

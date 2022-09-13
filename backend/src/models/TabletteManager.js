const AbstractManager = require("./AbstractManager");

class TabletteManager extends AbstractManager {
  constructor() {
    super({ table: "tablettes" });
  }

  findAllCoteDor() {
    return this.connection.query(
      `select * from  ${this.table} where brand = "Côte d'Or"`
    );
  }

  insert(tablette) {
    return this.connection.query(
      `insert into ${this.table} (name, brand, packaging) values (?,?,?)`,
      [tablette.name, tablette.brand, tablette.packaging]
    );
  }

  update(tablette) {
    return this.connection.query(
      `update ${this.table} set name = ?, brand = ?, packaging = ? where id = ?`,
      [tablette.name, tablette.brand, tablette.packaging, tablette.id]
    );
  }
}

module.exports = TabletteManager;

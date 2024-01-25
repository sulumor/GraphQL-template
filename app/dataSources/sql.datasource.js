import { BatchedSQLDataSource } from "@nic-jennings/sql-datasource";
import CoreDatamapper from "../datamappers/coreDatamapper.js";

export default class SQLDataSource extends BatchedSQLDataSource {
  constructor(config) {
    super(config);
    this.coreDatamapper = new CoreDatamapper(this.db);
  }
}

class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
    this.findByPkBatch = this.client.query
      .select("*")
      .batch(async (query, batchIds) => {
        const rows = await query.from(this.tableName).whereIn("id", batchIds).cache(process.env.CACHE_TLL);
        return batchIds.map((batchId) => rows?.find((row) => row.id === batchId));
      });
  }

  /**
   *  Find all registrations or a list of regsitrations with a specific condition
   * @param {{where : Object}} [params] Optionnal parameter to have a condition in the query
   * @returns An array of registrations
   */
  async findAll(params) {
    const query = this.client.query.from(this.tableName);
    if (params?.where) query.where(params.where);
    const rows = await query.cache(process.env.CACHE_TLL);
    return rows;
  }

  /**
   *  Find one registration with a specific id
   * @param {number} id Identifier
   * @returns One registration
   */
  async findByPk(id) {
    const rows = await this.client.query
      .from(this.tableName)
      .where({ id })
      .first()
      .cache(process.env.CACHE_TLL);
    return rows;
  }

  /**
   * Create a new registration in the data base
   * @param {Object} inputData All informations to insert in the database a new registration
   * @returns The registration newly insert
   */
  async create(inputData) {
    const row = await this.client.query
      .into(this.tableName)
      .insert(inputData)
      .returning("*");
    return row;
  }

  /**
   * Update one registration by id
   * @param {{ id: number}} id Identifier of the registration to update
   * @param {Object} inputData A list of params to be update
   * @returns The registration newly updated
   */
  async update({ id }, inputData) {
    const row = await this.client.query
      .from(this.tableName)
      .update(inputData)
      .where({ id })
      .returning("*");
    return row;
  }

  /**
 * Delete one registration by id
 * @param {number} id Identifier of the registration to update
 * @returns boolean if registration is delete or not
 */
  async delete(id) {
    const rowCount = await this.client.query
      .from(this.tableName)
      .where({ id })
      .del();
    return !!rowCount;
  }
}

export default CoreDatamapper;

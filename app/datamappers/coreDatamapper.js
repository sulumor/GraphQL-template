class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
  }

  async findAll(params) {
    const query = this.client.query.from(this.tableName);
    if (params?.where) query.where(params.where);
    const rows = await query.cache(process.env.CACHE_TLL);
    return rows;
  }

  async findByPk(id) {
    const rows = await this.client.query
      .from(this.tableName)
      .where({ id })
      .first()
      .cache(process.env.CACHE_TLL);
    return rows;
  }

  async create(inputData) {
    const row = await this.client.query
      .into(this.tableName)
      .insert(inputData)
      .returning("*");
    return row;
  }

  async update({ id }, inputData) {
    const row = await this.client.query
      .from(this.tableName)
      .update(inputData)
      .where({ id })
      .returning("*");
    return row;
  }

  async delete(id) {
    const rowCount = await this.client.query
      .from(this.tableName)
      .where({ id })
      .del();
    return !!rowCount;
  }
}

export default CoreDatamapper;

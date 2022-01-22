const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "superuser",
  database: "bikeshop",
  port: 5432,
});

const getStores = async () => {
  try {
    const result = await pool.query(`SELECT * FROM stores ORDER BY store_name`);
    return result.rows;
  } catch (err) {
    return err;
  }
};

const getCategories = async () => {
  try {
    const result = await pool.query(
      `SELECT * FROM categories ORDER BY category_name`
    );
    return result.rows;
  } catch (err) {
    return err;
  }
};

const getBrands = async () => {
  try {
    const result = await pool.query(`SELECT * FROM brands ORDER BY brand_name`);
    return result.rows;
  } catch (err) {
    return err;
  }
};

const getTable = async (storeName, brandName, categoryName) => {
  const query = `SELECT store_name, product_id, product_name, quantity FROM stores JOIN stocks USING(store_id) JOIN products USING(product_id) JOIN brands USING(brand_id) JOIN categories USING(category_id) WHERE store_name='${storeName}' AND brand_name='${categoryName}' AND category_name='${brandName}' ORDER BY product_id;`;
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {}
};

module.exports = {
  getStores,
  getCategories,
  getBrands,
  getTable,
};

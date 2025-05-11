import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    'postgresql://Linglooma_owner:npg_KZsn7Wl3LOdu@ep-snowy-fire-a831dkmt-pooler.eastus2.azure.neon.tech/Linglooma?sslmode=require',
});

const SECRET = 'your-secret-key';


let items = []; // Mô phỏng DB

export const getItems = async(req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items ORDER BY id")
    items = result.rows
    console.log(items);
    
    return res.json(items);
  }catch (err){
    return res.status(500).json({message: err.message});
  }
  
};

export const getItemsById = async(req, res) => {
  const item_id = req.params.id
  console.log(item_id);
  
  try {
    const result = await pool.query("SELECT * FROM items WHERE id = $1", [item_id])
    items = result.rows
    console.log(items);
    
    return res.json(items);
  }catch (err){
    return res.status(500).json({message: err.message});
  }
  
};

export const createItem = async(req, res) => {
  const item = {
    name: req.body.name,
    description: req.body.description,
    img : req.body.img 
  };
  try {
    const result = await pool.query(  "INSERT INTO items (name, description, img) VALUES ($1, $2, $3) RETURNING id",
 [item.name, item.description, item.img])
    // items.push(result.rows[0])
    console.log(item);
    console.log("check create");
    console.log(result);
    
    return res.json(result.rows[0]);
    //return res.json("");
  }
  catch (err){
    return res.status(500).json({message: err.message});
  }
};

export const updateItem = async(req, res) => {
  const item_id = req.params.id
  try {
    const exists = await pool.query("SELECT id FROM items WHERE id = $1", [item_id])
    if (exists.rows.length == 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    const result = await pool.query("UPDATE items SET name = $1, description = $2, img = $3 WHERE id = $4", [req.body.name, req.body.description, req.body.img, item_id])
    console.log(result);
    
    return res.json(result.rows[0]);
  } catch(err){
    return res.status(500).json({message: err.message});
  }
};

export const deleteItem = async(req, res) => {
  const item_id = req.params.id
  try {
    const exists = await pool.query("SELECT id FROM items WHERE id = $1", [item_id])
    if (exists.rows.length == 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    const result = await pool.query("DELETE FROM items WHERE id = $1", [item_id])
    console.log(result);
    
    return res.json(result.rows[0]);
  } catch(err){
    return res.status(500).json({message: err.message});
  }
};

import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
<<<<<<< HEAD
  await Product.deleteMany();
  await User.deleteMany();

  const createdProducts = await Product.insertMany(data.products);
  const createdUsers = await User.insertMany(data.users);
  
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
=======
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
>>>>>>> 69135bc6b91a277da452164e7263be111739c7cf

import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Connection Error:', err));


const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    rating: Number,
});

const Product = mongoose.model('Product', productSchema);


app.get('/products', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 5,
            sortBy = 'price',
            sortOrder = 'asc',
            category,
            minPrice,
            maxPrice,
            minRating,
        } = req.query;

       
        const filter = {};

        if (category) filter.category = category;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        if (minRating) {
            filter.rating = { $gte: Number(minRating) };
        }

        
        const sortOption = {};
        sortOption[sortBy] = sortOrder === 'desc' ? -1 : 1;

        const products = await Product.find(filter)
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Product.countDocuments(filter);

        res.json({
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / limit),
            products
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

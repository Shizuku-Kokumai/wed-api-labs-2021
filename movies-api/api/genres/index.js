import express from 'express';
import Genre from './genresModel';
import genres from '../../seedData/genres';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(genres);
});

// router.get('/', async (req, res) => {
//     const genres = await Genre.find();
//     res.status(200).json(genres);
// });

export default router;
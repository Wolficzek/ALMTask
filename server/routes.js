import Router from 'express-promise-router'
import db from '../db/index.js'

export const router = new Router();

const PAGE_SIZE = 6;
const sortTypes = ['name asc', 'name desc', 'id asc', 'price asc', 'price desc'];

router.get('/api/products/:type?', async (req, res) => {
    const page = req.query.page || 0;
    const type = req.params.type || '';
    const search = req.query.search || '';
    const sort = req.query.sort || 'id asc';
    const offset = page * PAGE_SIZE;
    if(!sortTypes.includes(sort))
        throw new Error('Unknown sort method');
    const { rows } = await db.query(`
    SELECT *
    FROM products
    WHERE
        (
            (name ILIKE '%' || $3 || '%') OR
            (type::text ILIKE '%' || $3 || '%') OR
            (producer ILIKE '%' || $3 || '%') OR
            ($3 = '')
        ) AND (
            ($4 = '') OR
            (type = $4::type)           
        )
    ORDER BY ${sort}
    LIMIT $1 OFFSET $2`
        , [PAGE_SIZE, offset, search, type]);
    //Recount pages
    const { rows:[{count}] } = await db.query(`SELECT count(1) FROM products
    WHERE
        (
            (name ILIKE '%' || $1 || '%') OR
            (type::text ILIKE '%' || $1 || '%') OR
            (producer ILIKE '%' || $1 || '%') OR
            ($1 = '')
        ) AND (
            ($2 = '') OR
            (type = $2::type)           
        )`
        ,[search, type]);

    res.json({
        items: rows,
        pages: Math.ceil(count / PAGE_SIZE)
    });
});



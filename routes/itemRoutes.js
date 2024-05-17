/*const passport = require('passport');
const router = require('express').Router();
const { isAuth } = require('../services/middleware');
const Item = require('../models/Item');

router.use(isAuth);

// Route to render item creation form page
router.get('/item/create', isAuth, (req, res) => {
    res.render('create-item');
});

// Route to process form submission and save item
router.post('/item/create', isAuth, async (req, res) => {
    try {
        const { title, description } = req.item;
        const newItem = new Item({
            title,
            description,
            creationDate: new Date() // Set the creation date to the current date
        });
        await newItem.save(); // Save the new item to the database
        res.redirect('/success'); // Redirect to success page
    } catch (error) {
        console.error(error);
        res.redirect('/error'); // In case of error, redirect to the error page
    }
});

module.exports = router;*/
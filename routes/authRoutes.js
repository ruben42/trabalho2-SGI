const passport = require('passport');
const router = require('express').Router();
const { isAuth, isNotAuth } = require('../services/middleware');
const Item = require('../models/Item');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/success');
    } else {
        let date = new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
            timeStyle: 'long'
        }).format(new Date());
        res.render('index', {
            date_tag: date,
            message_tag: 'Access your Google Account',
        });
    }
});

router.get('/home'), (req, res) => {
    res.redirect('/');
}

router.get('/success', (req, res) => {
    if (req.isAuthenticated()) {
        console.log("User Authenticated:", req.isAuthenticated());
        console.log('Session expires in:', req.session.cookie.maxAge / 1000);
        res.render('success', {
            message: 'Authorization Successful!',
            user: req.user
        });
    } else {
        console.log("User Not Authenticated \nsessionID:", req.sessionID);
        console.log('Cookie:', req.session.cookie);
        res.redirect('/error');
    }
});

router.get('/resource', isAuth, (req, res, next) => {
    res.render('resource', {
        authenticated: req.isAuthenticated()
    });
});

router.get('/status', (req, res, next) => {
    res.render('status', {
        status: req
    });
});

router.get('/error', (req, res) => {
    res.render('error', {
        message_tag: 'Authentication Error'
    });
});

router.get('/logout', (req, res) => {
    req.logout(req.user, (err) => { // Passport logout function
        if (err) {
            res.redirect('/error');
        }
        res.redirect('/status');
        console.log("User Authenticated:", req.isAuthenticated());
    });
});

router.get('/login', isNotAuth,
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        accessType: 'offline', // Requests a refresh token
        prompt: 'consent'
    })
);

router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/error',
        keepSessionInfo: true // Used to keep session info on redirect
    }),
    (req, res) => {
        // Successful authentication, redirect to saved route or success.
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || '/success');
    });

// Route to render item creation form page
router.get('/item/create', isAuth, (req, res) => {
    res.render('create-item');
});

// Route to process form submission and save item
router.post('item/create', isAuth, async (req, res) => {
    //console.log(req.user);
    //res.redirect('/success');
    try {
        const { title, description } = req.body;
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

module.exports = router;
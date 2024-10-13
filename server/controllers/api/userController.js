const db = require('../../models');

exports.login = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;
        const user = await db.users.findOne({ where: { user_email, user_password } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.register = async (req, res) => {
    try {
        const { user_email, user_password, user_phone } = req.body;

        // Check if the email and password are provided
        if (!user_email || !user_password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        
        // Check if the email is already in use
        const existingUser = await db.users.findOne({ where: { user_email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Create a new user
        const newUser = await db.users.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
}
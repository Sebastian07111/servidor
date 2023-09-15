const { check, validationResult } = require('express-validator');


let validatorParams = [
   check('id').isLength({ min: 1, max: 255}),
   check('nombre').isLength({ min: 1, max: 15}),
   check('email').isEmail(),
   check('contrasena').isLength({ min: 8, max: 15})
];
   

function validator(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


module.exports = {
    validatorParams,
    validator
}



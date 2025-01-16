const { body, validationResult } = require("express-validator");

const validaciones = [
    body("nombre").trim()
        .isAlpha().withMessage("El nombre solo debe contener letras.")
        .notEmpty().withMessage("El nombre es obligatorio.")
        .isLength({ min: 2, max: 25 }),
    body("apellido").trim()
        .isAlpha().withMessage("El apellido solo debe contener letras.")
        .optional(),
    body("nombre_usuario").trim()
        .notEmpty().withMessage("El nombre de usuario es obligatorio.")
        .isLength({ min: 7, max: 25 }),
    body("email").trim()
        .isEmail().withMessage("Debe ser un email válido.")
        .notEmpty().withMessage("El email es obligatorio."),
    body("contrasenia").trim()
        .notEmpty().withMessage("La contraseña es obligatoria.")
        .isLength({ min: 8, max: 50 }).withMessage("La contraseña debe contener al menos 8 caracteres.")
];

exports.validarCampos = [
    validaciones,
    (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).render("index", { errors: errors.array() })
    }
    next();
}
]
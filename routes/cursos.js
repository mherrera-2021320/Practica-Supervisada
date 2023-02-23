
const {Router} = require('express');
const {getCurso, postCurso, putCurso, deleteCurso} = require('../controllers/cursos');

const { existeCursoPorId } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esProfRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/mostrar', getCurso);

router.post('/agregar', [
    validarJWT,
    check('nombre', 'El nombre del curso es obligatorio').not().isEmpty(),
    check('maestro', 'El nombre del profesor es obligatorio').not().isEmpty(),
    validarCampos
], postCurso);

router.put('/editar/:id',[
    validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom( existeCursoPorId ),
    check('nombre', 'El nombre del curso es obligatorio').not().isEmpty(),
    validarCampos
], putCurso);



router.delete('/eliminar/:id',[
    validarJWT,
    esProfRole,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom( existeCursoPorId ),
    validarCampos
], deleteCurso);


module.exports = router;
const {Router} = require('express');
const { getUsers, postUser, putUser, deleteUser, registerUser, getMyCourses, deleteMyUser, putMyUser } = require('../controllers/user');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
router.post('/agregar', postUser);
//router.put('/editar/:id', putUser);
//router.delete('/eliminar/:id', deleteUser);
router.post('/register', registerUser);

router.get('/mostrar' ,[
    validarJWT
] ,getMyCourses);
router.delete('/eliminar/:id',[
    validarJWT
], deleteMyUser); 
router.put('/editar/:id',[
    validarJWT
], putMyUser)



module.exports = router;

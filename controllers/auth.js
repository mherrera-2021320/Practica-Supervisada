const {request, response} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req = request, res = response) => {
    const {email, password} = req.body;

    try {
        // Verify if the email exists
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                msg: 'email invalido'
            })
        }
        //Verify if the user exists

        if (!user){
            return res.status(202).json({
                msg: 'Usuario no encontrado'
            })
        }
            
          if (!bcryptjs.compareSync(password, user.password)) {
            return res.status(400).json({
                msg: 'contraseña invalida'

            })
        }

        const token = await generarJWT(user.id);
    
        res.json({
            msg: 'Inicio de sesión exitoso',
            email,
            password,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Comunicarse con el Administrador'
        })
    }

}

module.exports= {
    login
}
const express=require('express')
const calculadora= require('../model/calculo')
const resultado = express.Router()

resultado.post('/', (req, res)=>{
    const{cateto1, cateto2} =req.body
    const hipotenusa = calculadora.hipotenusa(
        parseFloat(cateto1), parseFloat (cateto2))
        res.send (`A hipotenusa é: ${hipotenusa}`)
})

module.export= resultado
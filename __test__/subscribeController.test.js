const request = require('supertest')
const app = require ('../index')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/subscribe')

describe('User controller testing', () => {
    beforeEach(async () =>{
        await User.deleteMany({})
        
    },10000)

    afterAll(async() => {
        await User.deleteMany({})
        await mongoose.connection.close()
        console.log('afterAll ejecucion y conexion cerrada')
    })
    it('deberia registrar un usuario nuevo si el correo existe en la base de dato',async () => {
        const email ='test@test.com'
        console.log('Supertest va a hacer la peticion a POST')
        const response = await request(app)
            .post('/api/subscribe')
            .send({email:email})
            console.log('Supertest ya finalizo la peticion post la respuesta es ', response)

        expect(response.statusCode).toBe(201)
        expect(response.body).toHaveProperty('msg',`User: ${email} Felicidades ya haces parte de la tribuna!!`)
    })
    it('no deberia crear un usuario si el correo existe',async()=>{
        await new User({
            email: 'test@test.com'
        }).save()

        const response = await request(app)
                        .post('/api/subscribe')
                        .send({ email: 'test@test.com' })
        expect(response.statusCode).toBe(400)
        expect(response.body).toHaveProperty('ok',false)
        expect(response.body).toHaveProperty('msg',`test@test.com tu correo ya esta inscrito`)
    })
});





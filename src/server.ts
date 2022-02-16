// Dependencies
import express from 'express'
import { v4 as uuid } from 'uuid'

// Controllers
import { CreateHero, Hero } from 'Controller/Hero'
import { CreatePower, Power } from 'Controller/Power'

const app = express()
app.use( express.json() )

const heroes: Hero[] = []

app.get('/heroes', (request, response) => {
    return response.json(heroes)
})

app.post('/heroes', (request, response) => {
    const { name, weight, power, weapon, age } = request.body

    const heroPower = new CreatePower(power.name, power.type, power.goodAgainst, power.weakAgainst)
    const hero = new CreateHero(uuid(), name, age, weight, heroPower, weapon)

    heroes.push(hero)
        
    return response.status(200).json({ message: 'Usuário criado' })
})

app.put('/heroes/:id', (request, response) => {
    const { id } = request.params;
    return response.json({ message: 'Atualizando Usuário' })
})

app.delete('/heroes', (request, response) => {
    return response.json({ message: 'Deletando Usuário' })
})

app.listen('3333', () => {
    console.log('Listening at http://localhost:3333');
})


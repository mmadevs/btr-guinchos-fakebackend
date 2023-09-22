const express = require('express')
const path = require('path')
const router = express.Router()
const static = express.static
// const {v4: uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const { users, contracts, viagens, statuses } = require('./src/data/data')

router.use('/static', static(path.join(path.resolve(), 'src', 'images')))

router.post('/login', (req, res) => {
  
  try{
    const {encodedUser} = req.body
    const userString = atob(encodedUser)
    const {login, password} = JSON.parse(userString)

    

    const foundUser = users.find(user =>  {
      const cpf = user.cpf.replace(/[^0-9]/g,'')
      const email = user.email.toLowerCase()

      if(cpf.length === 8 && login.replace(/[^0-9]/g, '') && password === user.passwordHash){
        return true
      }else if(login.includes('@') && login.trim().toLowerCase() === email && password === user.passwordHash){
        return true
      }else{
        return false
      }


    })

    if(!foundUser) throw new Error('User not found')

    const {id, cpf, name, email, imageUrl, notifications} = foundUser

    const user = {id, name, email, imageUrl, notifications }
   
    const accessToken = jwt.sign({id, cpf}, 'ACCESS_TOKEN_SECRET', {expiresIn: '10d'})
      
    res.cookie('accessToken', accessToken, JSON.stringify({
      maxAge: 1000 * 60 * 60 * 24 * 10, sameSite: 'none', 
      httpOnly: false, secure: process.env.NODE_ENV === 'production'
    }))
    
    res.send({ user })
    
  }catch(err){
    if(err.message === 'User not found' ){
      res.status(404).send({message:'Usuário/Senha inválidos!'})
    }else {
      console.error('erro:',err)
      res.sendStatus(500)
    }
  }



})

router.use('/app/*', (req, res, next) => {

      try{
        const {accessToken} = req.cookies
        if(!accessToken) throw new Error()
const isLogged = decodeUser(accessToken)
      if(isLogged) {
        return next()
      }else{
        res.clearCookie('accessToken')
      throw new Error()
      }
    }catch(err){
      
      return res.status(403).send('Você precisa estar logado para acessar a aplicação!')
      }
      
      
    })
    
    const decodeUser = (accessToken, returnUser = false) => {
      let response = false
      jwt.verify(accessToken, 'ACCESS_TOKEN_SECRET', (err, decoded) => {
        if(err) {
          console.error(err)
          return false
        }
        response = returnUser ? users.find(user => user.id === decoded.id) : true
      })
      return response
      
}
    
    
    router.get('/app/contract', (req, res) => {
      const query = req.query
      
      if(query.service){
        const foundContract = contracts.find(contract => contract.services.some(service => service.id === query.service))
        if(foundContract){
      return res.send({ contract: foundContract })
    }else{
      return res.status(404).send({ message: 'Contrato não encontrado!' })
    }
  }
})
router.get('/app/dashboard/contracts', (req, res) => {
  const dashboardServices = contracts.map(contract => ({...contract, services: contract.services.filter(service => service.status === 1)}))
  return res.send({ contracts: dashboardServices })
})
router.get('/app/dashboard/trips', (req, res) => {
  return res.send({ trips: viagens })
})
router.get('/app/dashboard/statuses', (req, res) => {  
  return res.send({ statuses })
})

router.get('/app/notifications', (req, res) => {
  const user = decodeUser(req.cookies.accessToken, true)
  if(user){
    return res.send({notifications: user?.notifications })
  }
  return res.send([])



})

module.exports = router

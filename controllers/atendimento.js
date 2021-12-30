module.exports = app => {

    app.get('/atendimentos', (req , res) => res.send('Voce esta na rota de atendimentos e esta usando GET'))


    app.post('/atendimentos', (req , res) => {    
    console.log(req.body)
    res.send('Voce está na rota de atendimento e está usando o POST')
})
}


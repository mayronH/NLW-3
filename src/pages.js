// const orphanages = require("./database/fakedata.js");

const dataBase = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
    index: function(req, res){
        return res.render('index')
    },
    async orphanage(req, res){
        // Pega a query na URL
        const id = req.query.id;

        try {
            const db = await dataBase;

            const result = await db.all(`SELECT * FROM orphanages WHERE id="${id}"`)

            // O retorno de all é sempre um Array, é preciso enviar um objeto para o template
            const orphanage = result[0];
            // Transformando a String de images em um Array, cada virgula vira uma posição do Array
            orphanage.images = orphanage.images.split(",")

            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0") {
                orphanage.open_on_weekends = false
            }
            
            console.log(orphanage)
    
            return res.render('orphanage', { orphanage })
        } catch (error) {
            console.log(error);
            return res.send("Erro no banco de dados")
        }
        return res.render('orphanage')
    },
    async orphanages(req, res){
        // return res.render('orphanages', { orphanages })

        try {
            // dataBase.then( async db => {
            //     const selectedData = await db.all('SELECT * FROM orphanages')
            //     return res.render('orphanages', { selectedData })
            // })

            // await dataBase faz o mesmo do de cima
            const db = await dataBase;

            const orphanages = await db.all('SELECT * FROM orphanages')
            return res.render('orphanages', { orphanages })
        } catch (error){
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },
    createOrphanage(req, res){
        return res.render('create-orphanage')
    },
    async saveOrphanage(req,res) {
        // Pegando o conteudo da requisição post
        const fields = req.body

        // Pegando os valores do objeto e colocand em um array
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos!')
        }
        try {
            const db = await dataBase

            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            // Redireciona para a rota orphanages
            return res.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }
    }
}
// Pega o banco de dados criado pela função execute
const Database = require('./db.js');

const saveOrphanage = require('./saveOrphanage')

// Criando uma função async com db como parametro
Database.then(async db => {
    // Esperar executar o INSERT para depois seguir em frente
    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat,
    //         lng,
    //         name,
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     ) VALUES (
    //         "-19.5397252",
    //         "-42.6492122",
    //         "Lar das meninas",
    //         "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //         "31998987766",
    //         "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //         "Horário de visitas Das 18h até 8h",
    //         "1"
    //     );
    // `)

    // await saveOrphanage(db, {
    //     lat: "-19.5397252",
    //     lng: "-42.6392122",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: '31965652323',
    //     images: [
    //         "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1600720665043-3c088759e359?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1600712244180-7ef5e5c82cb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(), /* Transformando o Array images em uma String */
    //     instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    //     opening_hours: 'Horário de visitas Das 18h até 8h',
    //     open_on_weekends: '0'
    // })

    // Delete
    // console.log(await db.run('DELETE FROM orphanages WHERE id="3"'))
    
    // Fazendo um SELECT em TODOS os registros do banco
    const selectedData = await db.all('SELECT * FROM orphanages')
    console.log(selectedData)
})

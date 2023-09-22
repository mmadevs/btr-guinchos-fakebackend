
const addresses = [
    {
        id: 'asçksadsa84sa626sa2',
        city: 'Maceió',
        neighbourhood: 'Trindade',
        state: 'Alagoas',
        street: 'Rua José Marques de Souza',
        zipCode: '51358971',
        createdAt: new Date(),
    },
    {
        id: 'asçksadsa84sa626sa2',
        city: 'Salvador',
        neighbourhood: 'Brotas',
        state: 'Bahia',
        street: 'Avenida Dom João VI',
        zipCode: '40170720',
        createdAt: new Date(),
        number: '253A',
        landmark: 'Em frente ao Assaí'
    },
    {
        id: 's2a9d9sfd9595f9595e9',
        city: 'Rio de Janeiro',
        neighbourhood: 'Penha',
        state: 'Rio de Janeiro',
        street: 'Rua da Marcha',
        zipCode: '52687423',
        createdAt: new Date(),
    },
    {
        id: '262s62d2as299c9as9c29s',
        city: 'Maceió',
        neighbourhood: 'Lagoa Azul',
        state: 'Alagoas',
        street: 'Avenida Padre Palmeira de Melo',
        zipCode: '54687423',
        createdAt: new Date(),
    },
    {
        id: 'sd5as6c65a1s6c9',
        city: 'Candeias',
        neighbourhood: 'Canabrava',
        state: 'Bahia',
        street: 'Ladeira do Jardim Apipema',
        zipCode: '40687423',
        createdAt: new Date(),
    },
    {
        id: '2s62ad2as62d6',
        city: 'Salvador',
        neighbourhood: 'Nazaré',
        state: 'Bahia',
        street: 'Rua Augusto Tavares de Souza',
        zipCode: '40258987',
        createdAt: new Date(),
    }
]

const individuos = [
    {
        id: '65sa165df1as515c',
        name: 'Jose Fernandes',
        tags: [],
        email: 'josefernandes@gmail.com',
        phone: '71988772255',
        cpf: '86660225899',
        bornIn: new Date(1999,4,1),
        imageUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4e137c4e-42ca-4b62-89df-541bf1a5135f/width=450/8184943-2774439732.jpeg',
        createdAt: new Date(),
        address: addresses[0]
    },
    {
        id: '75sa165df1as515c',
        name: 'Abel Doleite Ninho',
    tags: [],
        email: 'abeldoleite@gmail.com',
        phone: '71988772256',
        cpf: '86660224899',
        bornIn: new Date(1984,5,2),
        imageUrl:'',
        // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxFdTh7hBy2sAlpNJCJsAUn0Hn94S8CJATGmmzzpUlPhAJfZyfUh8q7Kzq17Kn1_g-3o&usqp=CAU',
        createdAt: new Date(),
        address: addresses[0]
    },
    {
        id: '75sa165a51as515c',
        name: 'Patrick Vieira',
        tags: [],
        email: 'patrickvieira@jbltrans.com',
        phone: '71985872256',
        cpf: '86160524899',
        bornIn: new Date(1994,4,27),
        imageUrl:
        'https://i.guim.co.uk/img/media/f42bb44f0362fda1dfe304f367e57ff8cb2fca2d/0_160_3500_2100/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1916414449e04c9782fedcd8cf310ab',
        createdAt: new Date(),
        address: addresses[1]
    },
    {
        id: '75sa165a51as515c',
        name: 'Joana Letícia Amorim',
        tags: [],
        email: 'joanaleticia@marisa.com',
        phone: '99994947474',
        cpf: '85260524889',
        bornIn: new Date(1989,7,10),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Geovanna_Tominaga.jpg',
        createdAt: new Date(),
        address: addresses[2]
    },
    {
        id: 'as521d95as95das62as6d',
        name: 'Sandro Marques De Souza',
        tags: [],
        email: 'sandro@bape.com',
        phone: '71988887888',
        cpf: '87463525688',
        bornIn: new Date(1982,7,21),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/SANDRO2.jpg',
        createdAt: new Date(),
        address: addresses[5]
    }
]

const empresas = [
    {
        id: '458s4ad84sa1sad95',
        name: 'BAPE Transportes',
        tags: [],
        email: 'contato@bape.com',
        phone: '71988887777',
        cnpj: '54878789999874',
        corporateName: 'Sandro Marques De Souza',
        manager: individuos[4],
        imageUrl:
            'https://storage.googleapis.com/production-hostgator-brasil-v1-0-2/522/602522/RIBMrZVS/e04b18914bbf41578f061f70dd1f1e46',
        createdAt: new Date(),
        address: addresses[0]
    },
    {
        id: '65sa165df1as515c',
        name: 'JBL Transportes',
        tags: [],
        email: 'contato@jbltrans.com',
        phone: '85944775522',
        cnpj: '25686565888914',
        corporateName: 'Patrick Vieira de Araujo',
        manager: individuos[2],
        imageUrl:
            'https://www.esfera.com.vc/ccstore/v1/images/?source=/file/v1233536079410843240/products/IHP-1184_Logos_Bloco01_465x300px.jpg&height=475&width=475',
        createdAt: new Date(),
        address: addresses[0]
    },
    {
        id: '65sa165df1as5154',
        name: 'Marisa',
        tags: [],
        email: 'contato@marisa.com',
        phone: '9988998877',
        cnpj: '54649784555151',
        corporateName: 'Marisa Letícia Amorim',
        manager: individuos[3],
        imageUrl:'data:image/png;base64,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',
            // 'https://francashopping.com.br/lojas_files/27965.jpg',
        createdAt: new Date(),
        address: addresses[2]
    },
    {
        id: '5as12d65asd15as',
        name: 'Johnson&Johnson',
        tags: [],
        email: 'contato@johnsonjohnson.com',
        phone: '71988989898',
        cnpj: '54569874563214',
        corporateName: 'Marcus Joseph Johnson',
        manager: individuos[4],
        imageUrl:'data:image/png;base64,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',
            // 'https://francashopping.com.br/lojas_files/27965.jpg',
        createdAt: new Date(),
        address: addresses[2]
    },
]

const patios = [
    {
        ...addresses[1],
        id: '65s1d651as561d1',
        name: 'Pátio Brotas',
        createdAt: new Date(),
        owner: empresas[0]
    }
]

const permissionses = [
    {
        addUser: true,
        changeUserPermissions: true,
        createCheckpoint: true,
        createdAt: new Date(),
        deleteCheckpoint: true,
        deleteUser: true,
        modifyCheckpoint: true,
        modifyUser: true,
        reopenFinishedServices: true,
        seeOldReports: true,
        id: '4651s65a1das166'
    }
]
const users = [
    {
        ...individuos[0],
        id: 'kmsadfkçmaskfm848d1v1v15sad51',
        passwordHash: '123456',
        permissions: permissionses[0],
        level: 1,
        notifications: [
            {
                id: 'sa51csa156c15sa1c1',
                title: 'Última parada!',
                subtitle:
                    'A viagem do veículo "RDB8542" (Adelson Carvalho) chegou ao último ponto de parada.',
                type: 'tripArrived',
                value: '65a1s65d1651sa651as651',
                status: 'unseen',
                archivedUntil: new Date('2023-09-27 09:05:35'),
                createdAt: new Date('2023-09-20 09:05:35')
            },
            {
                id: 's2a15c5sa156c5s1a65',
                title: 'Prazo se aproximando',
                subtitle: 'A data limite para coletar um veículo está se aproximando.',
                type: 'closeTripDeadline',
                value: '98as76d987as6d98a76s',
                status: 'opened',
                createdAt: new Date('2023-09-19 14:30:00')
            },
            {
                id: '1s56a1c561sa561c5s61',
                title: 'Orçamento solicitado',
                subtitle: 'Um novo orçamento foi solicitado por José Ferreira.',
                type: 'requestedBudget',
                value: '51as6d51as651as651a6',
                status: 'seen',
                createdAt: new Date('2023-09-18 11:20:15')
            },
            {
                id: '9s8a7s6d987a6s7d98',
                title: '🔥 Documento vai expirar!',
                subtitle:
                    '"Habilitação de José Ferreira" está próximo de expirar! (Faltam 2 meses)',
                description: 'Renove o documento ou atualize-o no sistema.',
                archivedUntil: new Date('2023-09-27 15:00:00'),
                type: 'closeExpiration',
                value: '1a6s1a6s1a6s1a6s1a6s',
                status: 'unseen',
                createdAt: new Date('2023-09-17 16:45:10')
            },
            {
                id: '3sa1c6sa1c561sa561',
                title: 'Atualização de status',
                subtitle:
                    'A viagem do veículo "RDB8542" (Adelson Carvalho) teve seu status atualizado para "Em andamento".',
                type: 'tripCheckpoint',
                value: '6a51s6a51s6a51s6a51s',
                status: 'unseen',
                createdAt: new Date('2023-09-16 22:10:30')
            },
            {
                id: 'a65s1a65s1a65s1a65',
                title: 'Novo projeto atribuído',
                subtitle: 'Você foi atribuído ao projeto ABC123.',
                type: 'requestedBudget',
                value: 'a65s1a65s1a65s1a65',
                status: 'unseen',
                createdAt: new Date('2023-09-15 08:55:50')
            },
            {
                id: 's1a6s5a16s5a16s5a1',
                title: 'Reunião marcada',
                subtitle: 'Lembrete: Reunião de equipe amanhã às 10:00.',
                type: 'closeDeadline',
                value: 's1a6s5a16s5a16s5a1',
                status: 'unseen',
                createdAt: new Date('2023-09-14 18:20:25')
            },
            {
                id: '6s5a1s6a51s6a51s6a5',
                title: 'Nova mensagem de feedback',
                subtitle: 'Você recebeu uma nova mensagem de feedback de um cliente.',
                type: 'requestedBudget',
                value: '6s5a1s6a51s6a51s6a5',
                status: 'unseen',
                createdAt: new Date('2023-09-13 13:15:40')
            }
        ]
    }
]

const drivers = [
    {
        ...individuos[3],
        id: '848sd18f18sd1',
        company: empresas[0],
        license: {
            code: '9599292929292',
            category: 'B',
            expiresIn: new Date(2027, 5, 1),
            createdAt: new Date(),
            id: '9as69d2as9d292as92d',
            issuedIn: new Date(2013, 5, 1)
        },
        createdAt: new Date()
    },
    {
        ...individuos[1],
        id: '5626516515156161',
        company: empresas[1],
        license: {
            code: '6226262629629',
            category: 'B',
            expiresIn: new Date(2027, 5, 1),
            createdAt: new Date(),
            id: '165165as1d65as6156',
            issuedIn: new Date(2013, 5, 1)
        },
        createdAt: new Date()
    }
]

const veiculos = [
    {
        brand: {
            id: '6516sa5f1d65a1s65',
            name: 'Chevrolet',
            imageUrl:
                'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/home/fbr-home-opengraph-logo-ford.jpg'
        },
        chassis: '96sa5165d1sa61',
        createdAt: new Date(),
        document: {
            code: '62622629629296296',
            createdAt: new Date(),
            id: '4s64d5as156d15as1d1',
            issuedIn: new Date(2023, 1, 1)
        },
        madeIn: new Date(2021, 1, 1),
        id: '54as1d54a5sd1as1',
        model: 'Camaro',
        modelOf: new Date(2021, 1, 1),
        owner: individuos[1],
        plate: 'ard47f5'
    },
    {
        brand: {
            id: '65148a5f1d65a1s65',
            name: 'Ford',
            imageUrl:
            'https://maarcas-logos.net/wp-content/uploads/2020/01/Chevrolet-Logo.jpg'
        },
        chassis: '96sa8765d1sa61',
        createdAt: new Date(),
        document: {
            code: '72622629629296274',
            createdAt: new Date(),
            id: '8s64d5as156d15as5d3',
            issuedIn: new Date(2023, 1, 1)
        },
        madeIn: new Date(2021, 1, 1),
        id: '54as1d54a5sd1as1',
        model: 'Focus',
        modelOf: new Date(2021, 1, 1),
        owner: empresas[1],
        plate: 'jrd4744'
    },
    {
        brand: {
            id: '66s165sa165c1as6c165as1',
            name: 'Mercedes Benz',
            imageUrl:
            'data:image/jpeg;base64,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kz1SauEREikREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//2Q=='
        },
        chassis: '65195195951919',
        createdAt: new Date(),
        document: {
            code: '95115919591',
            createdAt: new Date(),
            id: '6sa65sa195sa1d1as95',
            issuedIn: new Date(2022, 1, 1)
        },
        madeIn: new Date(2021, 1, 1),
        id: '651s6a51c61as',
        model: '710C',
        modelOf: new Date(2022, 1, 1),
        owner: empresas[0],
        plate: 'rtg2564'
    },
    {
        brand: {
            id: '65148a5f1d65a1s65',
            name: 'Fiat',
            imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fiat_logo.svg/2560px-Fiat_logo.svg.png'
        },
        chassis: '96sa8765d1sa61',
        createdAt: new Date(),
        document: {
            code: '72622629629296274',
            createdAt: new Date(),
            id: '8s64d5as156d15as5d3',
            issuedIn: new Date(2023, 1, 1)
        },
        madeIn: new Date(2021, 1, 1),
        id: '54as1d54a5sd1as1',
        model: 'Palio',
        modelOf: new Date(2021, 1, 1),
        owner: individuos[2],
        plate: 'jrd4744'
    },
    {
        brand: {
            id: '65148a5f1d65a1s65',
            name: 'Fiat',
            imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fiat_logo.svg/2560px-Fiat_logo.svg.png'
        },
        chassis: '6515161a156116516',
        createdAt: new Date(),
        document: {
            code: '9651951951969',
            createdAt: new Date(),
            id: '6a2sda2s6d2a2sd2',
            issuedIn: new Date(2023, 1, 1)
        },
        madeIn: new Date(2021, 1, 1),
        id: '54s51sa65d1a1s6d1',
        model: 'Uno',
        modelOf: new Date(2021, 1, 1),
        owner: individuos[2],
        plate: 'jrd4744'
    },
]

const transports = [
    {
        id: '651sd651as652',
        additions: [],
        discounts: [],
        basePrice: 1500,
        type:'transport',
        createdAt: new Date(2023,10,5),
        destinyPoint: addresses[0],
        deadline: new Date(2023, 10, 25),
        priority: true,
        originPoint: addresses[0],
        forecast: new Date(2023, 10, 20),
        inspections: [],
        checkpoints: [{
            id: '6565s1d616as1',
            description: 'Início',
            address: patios[0],
            createdBy: drivers[0],
            checkedBy: users[0],
            createdAt: new Date(2023,10,10),
        }, 
        {
            id: '8865s1d6as6s1',
            description: 'Parado na fiscalização da PRF',
            address: addresses[2],
            createdBy: drivers[0],
            checkedBy: users[0],
            createdAt: new Date(2023,10,15),
        }
    ],
    driver: drivers[0],
    getFinalPrice() {
        return this.basePrice + 10
    },
    vehicle: veiculos[0],
    status: 1
},
{
    id: '651sd6519529as651',
    additions: [],
    discounts: [],
    basePrice: 2850,
    type:'transport',
    createdAt: new Date(2023,10,2),
    destinyPoint: addresses[3],
    deadline: new Date(2023, 10, 27),
    priority: false,
    originPoint: patios[0],
    forecast: new Date(2023, 10, 21),
    inspections: [],
    checkpoints: [{
        id: '6565s1d616as1',
        address: addresses[1],
        createdBy: drivers[0],
        checkedBy: users[0],
        createdAt: new Date(2023,10,5),
    }
],
driver: drivers[0],
getFinalPrice() {
    return this.basePrice + 10
},
vehicle: veiculos[1],
        status: 1
    }
]
const collects = [
    {
        id: '651sd711as651',
        additions: [],
        discounts: [],
        basePrice: 1500,
        type:'collect',
        createdAt: new Date(),
        destinyPoint: addresses[0],
        deadline: new Date(2023, 10, 13),
        priority: false,
        originPoint: addresses[0],
        forecast: new Date(2023, 10, 13),
        inspections: [],
        checkpoints: [],
        driver: drivers[0],
        getFinalPrice() {
            return this.basePrice + 20
        },
        vehicle: veiculos[0],
        status: 2,
        collectPoint: addresses[0]
    }
]
const storages = [
    {
        id: '641sd711gt651',
        additions: [],
        discounts: [],
        type:'storage',
        basePrice: 1500,
        createdAt: new Date(),
        deadline: new Date(2023, 10, 13),
        priority: false,
        forecast: new Date(2023, 10, 13),
        inspections: [],
        getFinalPrice() {
            return this.basePrice + 20
        },
        vehicle: veiculos[0],
        status: 2,
        lot: patios[0],
        amountOfDays: 5
    }
]

const contracts = [
    {
        id: 'as51651asc651a',
        code: '62sa65f65sa56f6',
        client: individuos[1],
        createdAt: new Date(2023, 9, 13, 15, 11, 0),
        generatedBy: users[0],
        issuedIn: new Date(),
        services: [transports[0], collects[0], storages[0]],
        signatureDate: new Date(2023, 2, 1, 15, 5, 10)
    },
    {
        id: 'as51651asc651a',
        code: '12sa6ae65sa56f96',
        client: empresas[1],
        createdAt: new Date(2023, 9, 13, 15, 11, 0),
        generatedBy: users[0],
        issuedIn: new Date(),
        services: [ transports[1]], 
        // collects[1], storages[1],
        signatureDate: new Date(2023, 5, 2, 15, 5, 10)
    }
]

const viagens = [
    {
        id: '6s2d62asdas2', 
        driver: drivers[0],
        assemblyDeadline: new Date(2023,10,20),
        checkpoints: [
            {
                id: '6565s1d616as1',
                description: 'Início',
                address: patios[0],
                createdBy: drivers[0],
                checkedBy: users[0],
                createdAt: new Date(2023,10,10),
            }, 
            {
                id: '8865s1d6as6s1',
                description: 'Parado na fiscalização da PRF',
                address: addresses[2],
                createdBy: drivers[0],
                checkedBy: users[0],
                createdAt: new Date(2023,10,15),
            }
        ],
        originPoint: patios[0],
        status: 'traveling',
        stops: [
            {
                client: empresas[2],
                vehicle: veiculos[1],
                address: patios[0],
                type: 'transport' ,
                isDone: false,
                deadline: new Date(2023,10,21),
            },
            {
                client: individuos[0],
                vehicle: veiculos[0],
                address: patios[0],
                type: 'collect' ,
                isDone: false,
                deadline: new Date(2023,10,21),
            },
            {
                client: individuos[2],
                vehicle: veiculos[3],
                address: addresses[4],
                type: 'collect' ,
                isDone: false,
                deadline: new Date(2023,10,22),
            },
            {
                client: individuos[2],
                vehicle: veiculos[4],
                address: addresses[4],
                type: 'collect' ,
                isDone: false,
                deadline: new Date(2023,10,22),
            },
            {
                client: individuos[2],
                vehicle: veiculos[3],
                address: addresses[2],
                type: 'delivery' ,
                isDone: false,
                deadline: new Date(2023,10,22),
            },
            {
                client: individuos[2],
                vehicle: veiculos[4],
                address: addresses[2],
                type: 'delivery' ,
                isDone: false,
                deadline: new Date(2023,10,22),
            },
            {
                client: empresas[2],
                vehicle: veiculos[1],
                address: addresses[2],
                type: 'delivery' ,
                isDone: false,
                deadline: new Date(2023,10,21),
            },
            {
                client: individuos[0],
                vehicle: veiculos[0],
                address: addresses[2],
                type: 'delivery' ,
                isDone: false,
                deadline: new Date(2023,10,21),
            },
          
        ],
        stork: veiculos[2],
        createdAt: new Date(2023,10,9,15,),
    }
]

const statuses = [
    {
        type: 'collect',
        title: 'Coletas',
        subtitle: 'Em 2 viagens',
        value: '4',
        url: ''
    },
    {
        type: 'transport',
        title: 'Transp.',
        subtitle: 'Em 2 viagens',
        value: '5',
        url: ''
    },
    {
        type: 'storage',
        title: 'Armazen.',
        subtitle: 'Em 5 pátios',
        value: '23',
        url: ''
    },
    {
        type: 'route',
        title: 'Roteirização',
        subtitle: 'Com 8 veículos',
        value: '2',
        url: ''
    }
]

module.exports = {
     addresses ,
    
     individuos ,
    
     empresas ,
    
     patios ,
    
     permissionses,
     users ,
    
     drivers ,
    
    veiculos ,
     transports,
     collects ,
     storages ,
    
     contracts ,

     viagens ,

     statuses ,
}
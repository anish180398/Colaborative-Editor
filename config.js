'use strict'

module.exports = {
    mailer: {
        service: 'Gmail',
        auth:{
            user: 'USERNAME',
            pass:'PASSWORD'
        }
       
    },
    dbConnstring: 'mongodb://localhost:27017/colabeditor',
    sessionKey: 'Colabeditor'
}
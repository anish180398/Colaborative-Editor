'use strict'

module.exports = {
    mailer: {
        service: 'Gmail',
        auth:{
            user: 'USERNAME',
            pass:'PASSWORD'
        }
       
    },
    // dbConnstring: 'mongodb://localhost:27017/colabeditor',
    dbConnstring: 'mongodb+srv://colabshare:anish1998@cluster0.qp3c0.mongodb.net/colabeditor?retryWrites=true&w=majority',
    sessionKey: 'Colabeditor'
}
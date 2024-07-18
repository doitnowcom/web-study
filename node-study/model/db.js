var Sequelize = require('sequelize');
var sequelize;
//class101 db 이름
sequelize = new Sequelize("class101","root","12321",{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    timezone:"+09:00",
    define:{
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
        freeTableName:true
    }
})

var db={};
db.users = sequelize.import(__dirname + "/users.js")
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
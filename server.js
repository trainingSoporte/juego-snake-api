const {MySql, snakeDBConfig} = require('./database/mysql/mysql-sequelize');
const {User} = require('./src/users/users.entity')
const {app} = require('./src/main')

const WEBSERVER_PORT = 3000;

//* signaling
process.on('uncaughtException', err => {
    console.log('\x1b[43m%s\x1b[0m', 'Uncaught exception');
    console.error(err);
    shutdown();
});

process.on('SIGTERM', () => {
    console.log('\x1b[43m%s\x1b[0m', 'Received SIGTERM');
    shutdown();
});

process.on('SIGINT', () => {
    console.log('\x1b[43m%s\x1b[0m', 'Received SIGINT');
    shutdown();
});

process.on('SIGHUP', () => {
    console.log('\x1b[43m%s\x1b[0m', 'Received SIGHUP');
    shutdown();
});

//*shutdown http server
const shutdown = () => {
    console.log('disconnecting server...');
    httpServer.close(async() => {
        try {
            console.log('\x1b[41m%s\x1b[0m', 'httpServer offline');
            process.exit(0);
        } catch (err) {
            console.error(err);
            console.log('\x1b[41m%s\x1b[0m', 'httpServer offline');
            process.exit(0);
        }
    });
};

const initWebServer = (webServer, port) => {
    try {
        return new Promise((resolve, reject) => {
            try {
                httpServer = webServer.listen(port, () => {
                    return resolve();
                });
            } catch (error) {
                return reject();
            }

        });
    } catch (err) {
        console.error(err);
    }
};

const initMySql = async(login) => {
    try {
        const configDB = {
            database: 'snakedb',
            username: login.user,
            password: login.password,
            dbConfig: {
                host: 'localhost'
            }
        };
        // configDB = Object.assign(snakeDBConfig, configDB);
        const mysql = new MySql({...snakeDBConfig,...configDB});
        //testdb
        console.log('test MySql..');
        await mysql.authenticate();
        console.log('OK connection..');
        // await mysql.close();
        // console.log('close Connection..');

        User.init(mysql);

    } catch (error) {
        console.error(error);
    }
}

const init = async(login) => {

    try {
        console.log('Starting Server...');

        console.log('Connecting mySQLdb...');
        await initMySql(login);
        console.log('mySQLdb connected..');

        console.log('Starting Web Server...');
        await initWebServer(app, WEBSERVER_PORT);
        console.log(`Webserver listening on port ${WEBSERVER_PORT}`);

        return;

    } catch (err) {
        return err;
    }

};

(async () => {
    try {
        await init({ user: 'root', password: '123456' });   
        console.log('\x1b[42m%s\x1b[0m', 'Server online');     
    } catch (error) {
        console.error(error);
        console.log('\x1b[41m%s\x1b[0m', 'Could not start server');
        process.exit(0);
    }
})()

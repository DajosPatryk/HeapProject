const {
    pool
} = require("./connect");

async function getEvents() {
    const client = await pool.connect();
    try {
        const res = await client.query("SELECT * FROM eventlist");
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}
async function getUsers() {
    const client = await pool.connect();
    try {
        const res = await client.query("SELECT * FROM accounts");
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}
// async function getUserDetail(Id) {
//     const client = await pool.connect();
//     try {
//         const res = await client.query(`SELECT * FROM accounts where id = ${Id}`);
//         return res.rows;
//     } catch (error) {
//         console.error(error);
//     } finally {
//         client.release();
//     }
// }
async function getFriends(id) {
    const client = await pool.connect();
    try {
        const res = await client.query(`select a.username from friendslist f join accounts a on f.friend2 = a.id where f.friend1=${id}`);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}
async function registerUser(user, password) {
    const client = await pool.connect();
    console.log(user)
    try {
        const res = await client.query(`insert into accounts(username, email, createddate, gender) values ('${user.username}', '${user.email}', '${user.createddate}', '${user.gender}');
        insert into pwas(id, username, password) values ((select id from accounts where username='${user.username}' ), '${user.username}', '${password}');`);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}

// async function getUserId(user){
//     const client = await pool.connect();
//     console.log(user)
//     try {
//         const res = await client.query(`select id from accounts where email = '${user.email}';`);
//         return res.rows;
//     } catch (error) {
//         console.error(error);
//     } finally {
//         client.release();
//     }
// }

async function getUserDetail(username){
    const client = await pool.connect();
    try {
        const res = await client.query(`select username, email, gender, createddate, id from accounts where username = '${username}';
        `);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}

async function getPWAS(username){
    const client = await pool.connect();
    try {
        const res = await client.query(`select id, username, password from pwas where username = '${username}';
        `);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}

async function insertRefreshToken(token){
    const client = await pool.connect();
    try {
        const res = await client.query(`insert into user_sess values ('${token}');
        `);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}

async function getRefreshToken(token){
    const client = await pool.connect();
    try {
        const res = await client.query(`select * from user_sess where refreshtoken = ('${token}');
        `);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}

async function deleteRefreshToken(token){
    const client = await pool.connect();
    try {
        const res = await client.query(`delete from user_sess where refreshtoken = '${token}';
        `);
        return res.rows;
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}

module.exports = {
    getUsers,
    getEvents,
    getFriends,
    registerUser,
    getPWAS,
    insertRefreshToken,
    getRefreshToken,
    deleteRefreshToken,
    getUserDetail
}


//testing purposes
let bla = {}

console.log(bla);

if(Object.keys(bla).length === 0){
    console.log('you not cool')
}else return console.log('you cool')

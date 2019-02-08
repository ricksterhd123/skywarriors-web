var express = require('express');
var router = express.Router();
const Client = require('mtasa').Client;

async function getPlayersOnline(){
    let players = null;

    try {
        players = await mta.call("skywarriors-api", getPlayersOnline);
    } catch (err){
        console.error(`Something went wrong! ${err}`);
    }

    return players;
}

/* GET home page. */
router.get('/', function(req, res, next) {
    let players = getPlayersOnline();
    console.log(`Players online: ${players}`);
    res.render('index', { title: 'Express' , players: players});
});

module.exports = router;

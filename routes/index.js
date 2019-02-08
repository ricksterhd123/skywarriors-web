var express = require('express');
var router = express.Router();
const Client = require('mtasa').Client;
const mta = new Client("35.247.225.180", 22005, "webapi", "test1234")
async function getPlayersOnline(res){
    try {
        let playerInfo = await mta.call("skywarriors", "getPlayersOnline");
        //players = JSON.parse(players);
        console.log(`Playesr: ${playerInfo[0]}`);
        res.render('index', { playerInfo: playerInfo});
    } catch (err){
        console.error(`Something went wrong! ${err}`);
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    getPlayersOnline(res);
});

module.exports = router;

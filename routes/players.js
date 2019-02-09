var express = require('express');
var router = express.Router();
const Client = require('mtasa').Client;
const mta = new Client("35.247.225.180", 22005, "webapi", "test1234")

/**
 * Call the exported function 'getPlayersOnline' from the MTA server and
 * send back the results.
 * Params: res - The response object
 */
async function getPlayersOnline(res){
    try {
        let playerInfo = await mta.call("skywarriors", "getPlayersOnline");
        res.send(playerInfo);
    } catch (err){
        console.error(`Something went wrong! ${err}`);
    }
}

/* GET players. */
router.get('/', function(req, res, next) {
    getPlayersOnline(res);
});

module.exports = router;

// XML HTTP request object
var http = null;
var playerInfo = null;
var timer = null;

function updatePlayerInfo(){
    if (http.readyState == XMLHttpRequest.DONE){
        console.log(http.status);
        if (http.status == 200){
            let newPlayerInfo = JSON.parse(http.responseText);
            if (playerInfo == newPlayerInfo) return;

            playerInfo = newPlayerInfo;
            createPlayerList(playerInfo);
            drawPlayers(playerInfo);
        } else{
            console.log(`Something went wrong, status code: ${http.status}`);
        }
    }
}

function getPlayersOnline(){
    http = new XMLHttpRequest();
    if (!http){
        console.log("Giving up :(");
        return false;
    }

    http.onreadystatechange = updatePlayerInfo;
    http.open('GET', '/players');
    http.send();
}

getPlayersOnline();
timer = setInterval(getPlayersOnline, 5000);

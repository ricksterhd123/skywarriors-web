/**
 *  Create a list of players from player info object
 */
function createPlayerList(playerInfo){
    var div = document.getElementById('playerList');
    if (div) { document.body.removeChild(div); }

    var div = document.createElement('div');
    div.id = "playerList";

    var listTitle = document.createElement('h2');
    listTitle.innerHTML = `Players online (${playerInfo.length})`;

    div.appendChild(listTitle);

    for (let i = 0; i <= playerInfo.length - 1; i++){
        let listItem = document.createElement('li');
        listItem.innerHTML = playerInfo[i].name;
        div.appendChild(listItem);
    }

    document.body.appendChild(div);
}

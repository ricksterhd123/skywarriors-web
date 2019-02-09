/**
 *  Create a list of players from player info object
 */
function createPlayerList(playerInfo){
    var listTitle = document.getElementById('listTitle');
    var listItems = document.getElementsByClassName('listItem');
    if (listTitle){ document.body.removeChild(listTitle); }
    if (listItems.length > 0){
        for (let i = 0; i <= listItems.length - 1; i++) {
            document.body.removeChild(listItems[0]);
        }
    }


    var listTitle = document.createElement('h2');
    listTitle.id = "listTitle";
    listTitle.innerHTML = `Players online (${playerInfo.length})`;
    document.body.appendChild(listTitle);

    for (let i = 0; i <= playerInfo.length - 1; i++){
        let listItem = document.createElement('li');
        listItem.className = "listItem";
        listItem.innerHTML = playerInfo[i].name;
        document.body.appendChild(listItem);
    }
}

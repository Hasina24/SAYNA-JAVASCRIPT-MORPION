var gid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'items9'];
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];
var array8 = [];
var success;
var gameOver = false;
var array = [];
var clicked = 0;
var choice = 9;
var playerScore = 0;
var cpuScore = 0;


var player = {
    name: 'Player 1',
    team: '',
    array: []
};
var cpu = {
    name: 'Computer',
    team: '',
    array: []
};

function teamChoice(clicked_id) {
    $('.layer').removeClass('animated');
    $('.layer').fadeOut(500),
        player.team = document.getElementById(clicked_id).innerHTML
    if (player.team === 'X') {
        $('#' + clicked_id).html('layer');
    }
}


$('.cpu-score').html(cpu - score)
$('.you-score').html(you - score)


function choiceCase(clicked_id) {


    if (clicked % 2 == 0) {
        $('' + clicked_id).html()
        gridItems.splice(gridItems.indexOf(clicked_id), 1);
        player.array.push(clicked_id);
        gridItems(player);
        finished();
        $('.player-turn').css({ "border-bottom": " none" })
        $('.cpu-turn').css({ "border-bottom": "4px solid brown;" })
        $('' + clicked_id).prop("disabled" + true);
        setTimeout(computer, 2000);
    }
    choice -= 1;
    clicked++;
}

function Computer() {
    var ran = Math.floor(Math.random() * choice);
    var res = gridItems(ran);
    $('' + res).html() + cpu.array;
    cpu.array.push(gridItems(ran));
    gridItems(Computer)
}

function gridItems(check) {
    array1 = ['item 1', 'item2', 'item3']
    array2 = ['item4', 'item5', 'item6']
    array3 = ['item7', 'item8', 'item9']
    array4 = ['item1', 'item5', 'item9']
    array5 = ['item3', 'item5', 'item7']
    array6 = ['item2', 'item5', 'item8']
    array7 = ['item3', 'item6', 'item9']
    array8 = ['item1', 'item4', 'item7']

    success;

    switch (true) {
        case success = array1.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array1);
            setTimeout(on, 800, check.name);
            break;

        case success = array2.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array2);
            setTimeout(on, 800, check.name);
            break;


        case success = array3.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array3);
            setTimeout(on, 800, check.name);
            break;

        case success = array4.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array4);
            setTimeout(on, 800, check.name);
            break;

        case success = array5.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array5);
            setTimeout(on, 800, check.name);
            break;

        case success = array6.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array6);
            setTimeout(on, 800, check.name);
            break;

        case success = array7.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array7);
            setTimeout(on, 800, check.name);
            break;

        case success = array8.every(function(val) {
            return check.array.indexOf(val) !== -1;

        }):
            gameOver = true;
            winning(array8);
            setTimeout(on, 800, check.name);
            break;
    }
}

function reset() {
    $('.grid-item').empty();
    player.array = [];
    cpu.array = [];
    gid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'items9'];
    choice = 9;
    gameOver = false;
    cpuScore = 0;
    $('.cpu-score').html(cpuScore);
    $('.you-score').html(playerScore);
}

function winning(value) {
    if (clicked % 2 == 0); {
        $('' + value[0] + ',' + value[1] + ',' + value[2]).html()
        playerScore++;
        $('.player.score').html(playerScore);
    }
    if (empty) {
        $('' + value[0] + ',' + value[1] + ',' + value[2]).html()
        cpuScore++;
        $('.cpu.score').html(cpuScore);
    }
    grid = [];
}
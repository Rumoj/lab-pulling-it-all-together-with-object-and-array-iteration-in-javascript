function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


function teams () {
    return Object.values(gameObject());
}

function allPlayers() {
    const entries = [];
    for (const team of teams()) {
        entries.push(...Object.entries(team.players));
    }
    return entries;
}

function findPlayer(playerName) {
    const match = allPlayers().find(([name, stats]) => name === playerName);
    return match ? match[1] : undefined;
}

function findTeam(teamName) {
    return teams().find(team => team.teamName === teamName);
}

//player informations
function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : undefined;
}

function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player ? player.shoe : undefined;
}

//team informations
function teamColors(teamName) {
    const team = findTeam(teamName);
    return team ? team.colors : undefined;
}

function teamNames() {
    return teams().map(team => team.teamName);
}

//players numbers and players stats
function playerNumbers(teamName) {
    const team = findTeam(teamName);
    return team ? Object.values(team.players).map(player => player.number) : undefined;
}

function playerStats(playerName) {
    return findPlayer(playerName);
}

//bonus questions: shoe size, most point scored, winning team, player with longest name
function bigShoeRebounds() {
    const [, biggest] = allPlayers().reduce((best, current)=>
        current[1].shoe > best[1].shoe ? current : best
    );
    return biggest.rebounds;
}

function mostPointsScored() {
    const [name] = allPlayers().reduce((best, current) =>
        current[1].points > best[1].points ? current : best
    );
    return name;
}

function winningTeam() {
    let winner = null;
    let highest = -infinity;
    for (const team of teams()) {
        const total = Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
    }
    if (total > highest) {
        highest = total;
        winner = team.teamName;
    }
    return winner;
}

function playerWithLongestName() {
    const [name] = allPlayers().reduce((longest, current) =>
        current[0].length > longest[0].length ? current : longest
    );
    return name;
}
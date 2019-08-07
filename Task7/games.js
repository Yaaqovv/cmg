const matches = [
    {
        homeTeam: 'France',
        awayTeam: 'Croatia',
        score: '2:1',
        date: '18.01.2019'
    },
      {
        homeTeam: 'England',
        awayTeam: 'Spain',
        score: '3:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'Croatia',
        score: '0:0',
        date: '12.01.2019'
    },
    {
        homeTeam: 'France',
        awayTeam: 'England',
        score: '0:1',
        date: '12.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Croatia',
        score: null,
        date: '03.02.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'France',
        score: null,
        date: '03.02.2019'
    }
];

function getRankings(games) {
    let objectResult = {};

    let finalResult = [];

    for (let game of games) {

        if (game.score != null) {

            let r = game.score.split(":")

            if ( r[0] > r[1] ) {

                if (objectResult.hasOwnProperty(game.homeTeam)) {
                    objectResult[game.homeTeam] = objectResult[game.homeTeam] + 3;
                } else {
                    objectResult[game.homeTeam] = 3;
                }

            } else if( r[0] == r[1] ) {

                if (objectResult.hasOwnProperty(game.homeTeam)) {
                    objectResult[game.homeTeam] = objectResult[game.homeTeam] + 1;
                } else {
                    objectResult[game.homeTeam] = 1;
                }

                if (objectResult.hasOwnProperty(game.awayTeam)) {
                    objectResult[game.awayTeam] = objectResult[game.awayTeam] + 1;
                } else {
                    objectResult[game.awayTeam] = 1;
                }

            } else {

                if (objectResult.hasOwnProperty(game.awayTeam)) {
                    objectResult[game.awayTeam] = objectResult[game.awayTeam] + 3;
                } else {
                    objectResult[game.awayTeam] = 3;
                }

            }
            

            
        }
    }


    let arr = Object.entries(objectResult).sort((a, b) => {
        if (b[1] > a[1]) return 1;
        if (b[1] < a[1]) return -1;
        else return b[0] < a[0];
    });
    
    for (let item of arr) {
        finalResult.push({
            "team": item[0],
            "points": item[1]
        })
    }

    console.log(finalResult);
} 

getRankings(matches);



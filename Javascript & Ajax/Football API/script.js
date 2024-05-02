fetch("https://api.openligadb.de/getmatchdata/bl1")
    .then((result) => {
        result.json().then((data) => {
            data.sort((a, b) => new Date(a.matchDateTime) - new Date(b.matchDateTime));
            
            const upcomingMatch = data.find(match => new Date(match.matchDateTime) > new Date());

            if (upcomingMatch) {
                console.log("Nächstes Spiel:");
                console.log("Heimteam:", upcomingMatch.team1.teamName);
                console.log("Auswärtsteam:", upcomingMatch.team2.teamName);
                let guestTeamText = upcomingMatch.team2.teamName;
                let homeTeamText = upcomingMatch.team1.teamName;
                console.log("Datum:", upcomingMatch.matchDateTime);

                var matchDate = new Date(upcomingMatch.matchDateTime);

                var year = matchDate.getFullYear();
                var month = matchDate.getMonth() + 1; 
                var day = matchDate.getDate();
                var hours = matchDate.getHours();
                var minutes = matchDate.getMinutes();
                
                var formattedDateTime = day + '.' + month + '.' + year + ' um ' + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
                
                document.getElementById("nextGame").innerHTML = "Nächstes Spiel: " + formattedDateTime;

                getTeamLogos(guestTeamText, homeTeamText); 
            } else {
                console.log("Kein bevorstehendes Spiel gefunden.");
            }
        });
    })
    .catch((error) => {
        console.log("Fehler beim Abrufen der Daten:", error);
    });

    function getTeamLogos(guestTeamText, homeTeamText) {
        const homeTeamLogoSrc = pathToClass[homeTeamText];
        const guestTeamLogoSrc = pathToClass[guestTeamText];
    
        if (homeTeamLogoSrc) {
            document.getElementById("homeTeam").src = homeTeamLogoSrc;
        } else {
            console.log("Logo für Heimteam nicht gefunden");
        }
    
        if (guestTeamLogoSrc) {
            document.getElementById("guestTeam").src = guestTeamLogoSrc;
        } else {
            console.log("Logo für Gastteam nicht gefunden");
        }
    
        document.getElementById("homeTeamText").innerHTML = homeTeamText;
        document.getElementById("guestTeamText").innerHTML = guestTeamText;
    }
    


   let pathToClass = {
    'SC Freiburg': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000A.svg',
    '1. FC Köln': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-000008.svg',
    '1. FSV Mainz 05': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-000006.svg',
    '1. FC Union Berlin': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000V.svg',
    'Bayer 04 Leverkusen': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000B.svg',
    'Borussia Dortmund': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000D.svg',
    'Borussia Mönchengladbach': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000G.svg',
    'Eintracht Frankfurt': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000E.svg',
    'FC Augsburg': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000F.svg',
    'FC Bayern München': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000G.svg',
    'Hertha BSC': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000H.svg',
    'RB Leipzig': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000R.svg',
    'SC Paderborn 07': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000P.svg',
    'SV Werder Bremen': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000W.svg',
    'TSG 1899 Hoffenheim': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000H.svg',
    'VfL Wolfsburg': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000W.svg',
    'VfB Stuttgart': 'https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000D.svg',
    };
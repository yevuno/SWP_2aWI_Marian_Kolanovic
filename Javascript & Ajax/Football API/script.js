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

                document.getElementById("nextGame").innerHTML = "Nächstes Spiel: " + upcomingMatch.matchDateTime;

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
        // const homeTeamImageSrc = "https://www.openligadb.de/images/teamicons/" + homeTeamText.replace(/\s/g, "_") + ".png";
        // const guestTeamImageSrc = "https://www.openligadb.de/images/teamicons/" + guestTeamText.replace(/\s/g, "_") + ".png";
    
        // document.getElementById("homeTeam").src = homeTeamImageSrc;
        // document.getElementById("guestTeam").src = guestTeamImageSrc;
        document.getElementById("homeTeamText").innerHTML = homeTeamText;
        document.getElementById("guestTeamText").innerHTML = guestTeamText;

    }
    
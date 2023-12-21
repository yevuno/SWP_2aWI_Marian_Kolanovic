fetch('https://api.football-data.org/v2/competitions/BL1/standings', {
    headers: { 'X-Auth-Token': 'de0ff95a5ea0431ebee3260278e8f40f' }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
const apiKey = "7379ac46-a83d-4cfe-a950-9d8c58eecc08";
const url = `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`;
async function getMatchData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const matchList = data.data;
    console.log(matchList);

    const relavantData = matchList.filter(match=> match.id=='9d473b5d-7c92-4bf1-b49d-2f16433841d1').map(match => `${match.name}, ${match.status}`);
    console.log(relavantData);

    document.querySelector("#matches").innerHTML = relavantData.map(match=> `<li>${match}</li>`).join('');
}

getMatchData();
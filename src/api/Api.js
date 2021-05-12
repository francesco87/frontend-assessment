import axios from 'axios';
const baseUrl = 'https://www.balldontlie.io/';

export const getPlayers = (query) => {
    return axios.get(`${baseUrl}api/v1/players?search=${query}`)
        .then(res => res.data.data)
        .catch(err => err);
}

export const getSeasonAverage = (playerId) => {
    return axios.get(`${baseUrl}api/v1/season_averages?player_ids[]=${playerId}`)
        .then(res => res.data.data[0])
        .catch(err => err);
}

export const getPlayerPicture = (firstName, lastName) => {
    return axios.get(`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`)
        .then(res => res)
        .catch(err => err);
}


import React, { useState } from 'react';
import {SearchBar} from "./components/searchBar/SearchBar";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PlayerDetails} from "./components/playerDetails/PlayerDetails";

function App() {
    const [player, setPlayer] = useState([]);
    return (
        <Container>
            <SearchBar updatePlayer={setPlayer} />
            {
                player.length ? <PlayerDetails player={player[0]} /> : <div />
            }
        </Container>
    );
}

export default App;

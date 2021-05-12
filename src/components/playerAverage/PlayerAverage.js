import React, { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import {getSeasonAverage} from "../../api/Api";
import 'react-bootstrap-typeahead/css/Typeahead.css';

export const PlayerAverage = ({player}) => {
    const [playerAverage, setPlayerAverage] = useState(null);

    useEffect(() => {
        getSeasonAverage(player.id)
            .then(data => setPlayerAverage(data));
    }, [player.id]);

    const getAverage = () => {
        return (
            <div>
                <h3>Season {playerAverage.season}</h3>
                <p>MIN: <b>{playerAverage.min}</b></p>
                <p>FGM: <b>{playerAverage.fgm}</b></p>
                <p>FGA: <b>{playerAverage.fga || `-`}</b></p>
                <p>FG3M: <b>{playerAverage.fg3m || `-`}</b></p>
                <p>FG3A: <b>{playerAverage.fg3a || `-`}</b></p>
                <p>OREB: <b>{playerAverage.oreb || `-`}</b></p>
                <p>DREB: <b>{playerAverage.dreb || `-`}</b></p>
                <p>REB: <b>{playerAverage.reb || `-`}</b></p>
            </div>
        );
    }

    return (
        <Row>
            <Col>
                {
                    player && playerAverage ? getAverage() : <div />
                }
            </Col>
        </Row>
    )
}

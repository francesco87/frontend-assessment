import React, {useState, useEffect} from 'react';
import {getPlayerPicture} from "../../api/Api";
import {Row, Col} from 'react-bootstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {PlayerAverage} from "../playerAverage/PlayerAverage";
import playerImage from '../../images/player.png'

export const PlayerDetails = ({player}) => {
    const [imgUrl, setImgUrl] = useState(false);

    useEffect(() => {
        getPlayerPicture(player.first_name, player.last_name)
            .then((res) => {
                if (res.data.indexOf('Sorry') !== -1) {
                    return setImgUrl(false);
                }
                return setImgUrl(res.config.url);
            })
            .catch(() => setImgUrl(false));
    }, [player.first_name, player.last_name]);

    return (
        <Row>
            <Col>
                <img src={imgUrl || playerImage} alt={`${player.first_name} ${player.last_name}`} />
            </Col>
            <Col>
                <h3>{player.first_name} {player.last_name}</h3>
                <p>Position: <b>{player.position}</b></p>
                <p>Team: <b>{player.team.full_name}</b></p>
                <p>Height feet: <b>{player.height_feet || `-`}</b></p>
                <p>Height inches: <b>{player.height_inches || `-`}</b></p>
                <p>Weight pounds: <b>{player.weight_pounds || `-`}</b></p>
            </Col>
            <Col>
                <PlayerAverage player={player} />
            </Col>
        </Row>
    )
}

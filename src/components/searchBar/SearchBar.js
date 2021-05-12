import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {getPlayers} from "../../api/Api";
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import styled from 'styled-components';

const SearchContainer = styled.div`
    margin: 50px 0;
`

export const SearchBar = ({updatePlayer}) => {
    const [players, setPlayers] = useState([]);
    const [searchIsLoading, setSearchIsLoading] = useState(false);

    const onSearchPlayers = (query) => {
        setSearchIsLoading(true);
        getPlayers(query)
            .then(data => {
                setPlayers(data);
                //updatePlayer(currentPlayer);
            })
            .catch(err => console.log(err))
            .finally(() => setSearchIsLoading(false));
    }

    const onChangePlayer = (selectPlayer) => {
        updatePlayer(selectPlayer);
    }

    return (
        <SearchContainer>
            <Row>
                <Col>
                    <AsyncTypeahead
                        id="playerSearch"
                        isLoading={searchIsLoading}
                        labelKey={option => `${option.first_name} ${option.last_name}`}
                        onSearch={onSearchPlayers}
                        options={players}
                        placeholder="Enter first name and last name"
                        onChange={onChangePlayer}
                    />
                </Col>
            </Row>
        </SearchContainer>
    )
}

import React, { useState } from "react";
import Select from 'react-select';
import { SearchRounded } from "@material-ui/icons";
import { Container } from "react-bootstrap";
import { Col, Input, Label, List, Row } from "reactstrap";
import { useGeoLocation } from "../Location/use-geolocation"
import Doctor  from "./list-doctors";
import "./search-control.css";
function Search() {
    const location = useGeoLocation();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]   
    const[selectedOption, setSelectedOption] = useState(null);
    const handleChange = e => {
        setSelectedOption(e.label);
        console.log(selectedOption);
    }
    const handleClick = () => {
        return selectedOption;
    }
    return (
        <Container className="align-container" >
            <Row>
                {
                    location.loaded ? JSON.stringify(location) : "Not Found Yet"
                }
            </Row>
            <Row>
                <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <Input className="align-input" type="text" placeholder="type location...">
                        <Label>Location</Label>
                    </Input>
                </Col>
                <Col className="align-input col-lg-4 col-md-4 col-sm-12 col-12" >
                <Select
                    options={options}
                    onChange = {handleChange}  
                />
                </Col>
                <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                <a href="/Doctor"><button id="button-style" onClick= {handleClick} ><SearchRounded /></button></a>
                </Col>
            </Row>
        </Container>
    );
}
export default Search;
import React, { useState } from "react";
import Select from 'react-select';
import { SearchRounded } from "@material-ui/icons";
import { Container } from "react-bootstrap";
import { Col, Input, Label, List, Row ,Button} from "reactstrap";
import { useGeoLocation } from "../Location/use-geolocation"
import Doctor  from "./list-doctors";
import "./search-control.css";
import "./Items.css"
import { Route, Router,Routes } from "react-router-dom";


function Search() {
    const[selectedOption, setSelectedOption] = useState(null);
    const location = useGeoLocation();
    const options = [
        { value: 'General', label: 'General Physician' },
        { value: 'Cardiologist', label: 'Cardiologist' },
        { value: 'ENT', label: 'ENT' },
        { value: 'Eye Specialist', label: 'Eye Specialist' },
        { value: 'Dentist', label: 'Dentist' },
      ]   
   
    const handleChange = e => {
        setSelectedOption(e.label);
    }
  
    return (
        <Container className="align-container " >
            <Row className="center">
                {
                    location.loaded ? <Button>Your Location: <div>{JSON.stringify(location.coordinates.lat)}</div><div>{JSON.stringify(location.coordinates.lng)}</div></Button> : <Button>Not Found Yet</Button>
                }
            </Row>
            <Row className = "center">
                {/* <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <Input className="align-input" type="text" placeholder="type location...">
                        <Label>Location</Label>
                    </Input>
                </Col>
                 */}
                <Col className="col-lg-4 col-md-4 col-sm-12 col-12 ">
                <a href = "/Doctor"><Button  onClick = { ""}>Search Doctors From Your Location</Button></a>
                </Col>
                <Col className="col-lg-4 col-md-4 col-sm-12 col-12" >
                <Select
                    placeholder="Kindly Search Directly Under Maintenance!!"
                    options={options}
                    onChange = {handleChange}  
                />
                </Col>
            </Row>
        </Container>
    );
}

export default Search;

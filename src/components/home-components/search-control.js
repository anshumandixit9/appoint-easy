import React from "react";
import { SearchRounded } from "@material-ui/icons";
import { Container } from "react-bootstrap";
import { Col, Input, Label, Row } from "reactstrap";
import { useGeoLocation } from "../Location/use-geolocation"
import "./search-control.css";
function Search() {
    const location = useGeoLocation();
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
                    <Input type="text" placeholder="type specs...">
                        <Label>Specifications...</Label>
                    </Input>
                </Col>
                <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <button id="button-style" ><SearchRounded /></button>
                </Col>
            </Row>
        </Container>
    );
}
export default Search;
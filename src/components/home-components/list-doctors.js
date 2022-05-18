import React from "react";
import Home from "./Home";
import Search from "./search-control";
import Mapping from "../Location/distance-update";
import { Button, Card, CardBody, CardColumns, CardGroup, CardText, CardTitle } from "reactstrap";
import { Call } from "@material-ui/icons";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardImg } from "react-bootstrap";
import OIP from './OIP.svg'
import './Items.css'


function Doctor() {
    const userData = Mapping();
    userData.sort((a, b) => {
        return a.distance - b.distance;
    })
    return (
        <div align="center">
            <Search />
            <div className="container col-lg-6" border="1px" >
                {userData.map((data, key) => {
                    return (
                        <div style = {{marginTop:30}}>
                        <Card>
                            <CardBody>
                                <CardGroup>
                                    <Card >
                                        <img src={OIP} className="image-style"/>
                                    </Card>     
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{data.name}</CardTitle>
                                            <Button>{data.specialisation}</Button>
                                            <CardText><Call />{data.phone}</CardText>
                                            <CardText>Consultation Fee: <CurrencyRupeeIcon />{data.fee}</CardText>
                                        </CardBody>
                                    </Card>
                                    <Card className="center">
                                        <Button><LocationOnIcon/>Doctor Location:<div>{data.lat}</div><div>{data.lng}</div></Button>
                                        <Button><AddLocationIcon/>Distance: <div>{data.distance}</div></Button>
                                        <Button ><BeenhereIcon/>Book Your Slot</Button>
                                    </Card>
                                </CardGroup>
                            </CardBody>
                        </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Doctor;
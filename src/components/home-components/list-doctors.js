import React from "react";
import Home from "./Home";
import Search from "./search-control";
import Mapping from "../Location/distance-update";
function Doctor() {
    console.log(Mapping());
    const userData = Mapping();
    const selectedSpecs = Search();
    console.log("@@@" , selectedSpecs);
    userData.sort((a , b) => {
        return a.distance - b.distance;
    })
    console.log(userData);
    return (
        <div align = "center">
            <Search/>
            <table border = "1px" >
                {userData.map((data, key) => {
                    return (
                        <tr key={key}>
                            <td>{data.name}</td>
                            <td>{data.specialisation}</td>
                            <td>{data.phone}</td>
                            <td>{data.distance}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
export default Doctor;
import React from "react"
import { Container, Table } from "react-bootstrap"

function SearchCol(props) {
    return (
        <Container> 
           <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Photo</th>
                    <th sort="first" onClick={props.handleSubmitClick}>First sort</th>
                    <th sort="last" onClick={props.handleSubmitClick}>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.length > 0 ? props.employees.map((person, index) => {
                        return (<tr key={index}>
                            <td><img src={person.picture.medium}></img></td>
                            <td><span>{person.name.first}</span></td>
                            <td>{person.name.last}</td>
                            <td>{person.cell}</td>
                            <td>{person.email}</td>
                            </tr>)
                        }): (
                        <tr> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default SearchCol
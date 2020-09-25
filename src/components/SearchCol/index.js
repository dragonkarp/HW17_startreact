import React from "react"
import { FormControl, Container, InputGroup} from "react-bootstrap"

function SearchCol(props) {
    return (
        <div>
            <Container fluid>
            <InputGroup>
                <FormControl
                placeholder="Employee name"
                aria-label="Employee name"
                aria-describedby="basic-addon2"
                name = "search"
                value = {props.value}
                onChange = {props.handleInputChange} 
                />
            </InputGroup>
            </Container>
        </div>
    )
}

export default SearchCol
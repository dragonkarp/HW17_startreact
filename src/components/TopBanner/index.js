import React from "react"
import { Navbar, Container } from "react-bootstrap"

function TopBanner() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <h1>Employee Directory</h1>
            </Navbar>
        </Container>
    )
}

export default TopBanner
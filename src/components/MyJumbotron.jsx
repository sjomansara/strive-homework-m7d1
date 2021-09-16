import { Jumbotron, Container } from "react-bootstrap";

const MyJumbotron = () => {
    return (
        <Jumbotron fluid>
        <Container>
          <h1 style={{marginLeft: "35px"}}>Welcome to Job Search Engine</h1>
        </Container>
      </Jumbotron>
    )
}

export default MyJumbotron
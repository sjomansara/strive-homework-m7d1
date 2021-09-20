import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeFromFav } from '../store/actions'
import { HeartFill } from 'react-bootstrap-icons'

const mapDispatchToProps = (dispatch) => ({
    removeFav: (fav) => { dispatch(removeFromFav(fav)) }
})

class Favorites extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.props.favorites.map(fav => (
                                <ListGroupItem>
                                    <HeartFill onClick={() => this.props.removeFromFav(fav)} />
                                    <span>{fav}</span>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(s => s, mapDispatchToProps)(Favorites)
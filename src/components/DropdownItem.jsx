import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { addToFav, removeFromFav } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = s => s

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (company) => dispatch(addToFav(company)),
    removeFavorite: (company) => dispatch(removeFromFav(company))
})


function DropdownItem({ data, favorites, addFavorite, removeFavorite }) {

    const isFav = favorites.includes(data.company_name)
    console.log(isFav, favorites)
    const toggleFavorite = () => {
        isFav 
            ? removeFavorite(data.company_name) 
            : addFavorite(data.company_name) 
    }

    return (
        <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col xs={3} className="d-flex">
                {
                    isFav
                        ? <HeartFill color="red" size={16} className="me-4 mr-4 my-auto" onClick={toggleFavorite}/>
                        : <Heart color="red" size={16} className="me-4 mr-4 my-auto" onClick={toggleFavorite} />
                }
                <Link style={{color: "black"}} to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={9}><Link style={{color: "black"}} to={{ pathname: data.url }} target='_blank'>{data.title}</Link></Col>
        </Row>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(DropdownItem)
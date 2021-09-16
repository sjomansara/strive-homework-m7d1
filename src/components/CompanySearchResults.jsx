import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import JobDetails from './JobDetails'

export default class CompanySearchResults extends Component {

    state = {
        jobs: []
    }

    componentDidMount() {
        this.getJobs()
    }

    baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name='

    getJobs = async () => {
        const response = await fetch(this.baseEndpoint + this.props.match.params.companyName)
        const {jobs} = await response.json()

        this.setState({ jobs })
    }
    
    render(){
        return <Container>
            <Row>
                <Col>
                    {
                        this.state.jobs.map( jobData => <JobDetails job={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    }
}

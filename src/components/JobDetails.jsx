import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { useParams } from 'react-router';

const JobDetails = (props) => {
    let { id } = useParams()
    const [dataFetched, setDataFetched] = useState(null)
    const [currentJob, setCurrentJob] = useState({})

    const fetchData = async () => {
        const apiString = "https://strive-jobs-api.herokuapp.com/jobs?_id=" + id

        try {
            let response = await fetch(apiString)
            
            if (response.ok) {
                let data = await response
                let readable = await data.json()
                setCurrentJob(readable.data)
                setDataFetched(readable.data)
            }
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        fetchData()
        console.log(currentJob)
    } ,[])
    if (currentJob !== {}) {
        return (
            <div className="mt-5 text-left ml-5">
                <h2 className="mb-4">Job Details</h2>
                <h5>Company: {currentJob.category}</h5>
                <h5>Title: {currentJob.title} </h5>
                <h5>Job type: {currentJob.job_type}</h5>
                <h5>Candidate required location: {currentJob.candidate_required_location}</h5>
                <h5>Salary: {currentJob.salary}</h5>
                <h5>Description: {currentJob.description}</h5>
                <Button className="mt-3">Apply Now</Button>
            </div>
        )
    }
  }
  
  export default JobDetails;
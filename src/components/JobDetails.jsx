import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";

const JobDetails = (props) => {
    const job = props.job

    return (
        <div className="mt-5 text-left ml-5">
            <h2 className="mb-4">Job Details</h2>
            <h5>Company: {job.category}</h5>
            <h5>Title: {job.title} </h5>
            <h5>Job type: {job.job_type}</h5>
            <h5>Candidate required location: {job.candidate_required_location}</h5>
            <h5>Salary: {job.salary}</h5>
            <h5>Description: {job.description}</h5>
            <Button className="mt-3">Apply Now</Button>
        </div>
    )
}
  
  export default JobDetails;
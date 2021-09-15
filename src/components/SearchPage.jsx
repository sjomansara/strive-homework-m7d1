import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from "react-bootstrap";
import DropdownItem from './DropdownItem';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [dataFetched, setDataFetched] = useState(null)

    const fetchData = async () => {
        let searchTermCleaned = searchTerm.replace(/\s/g, "%")
        const apiString = "https://strive-jobs-api.herokuapp.com/jobs?search=" + searchTermCleaned

        try {
            if (searchTerm !== "") {
                let response = await fetch(apiString)
            
                if (response.ok) {
                    let data = await response
                    let readable = await data.json()
                    let limited = readable.data.slice(0, 10)

                    setDataFetched(limited)
                }
            }
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        if (searchTerm !== "") {
            fetchData()
            console.log("firing")
        }
    }, [searchTerm])

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <Form>
            <Form.Group className="mx-5 mt-5" controlId="formBasicEmail">
            <Form.Label className="text-left">Search for jobs:</Form.Label>
            <Form.Control onChange={onSearchChange} type="text" autoComplete="off" placeholder="Search" />
            {dataFetched !== null && dataFetched.map(job => {
                console.log(job)
                return (
                    <DropdownItem id={job._id} title={job.title}/>
                )
            })}
            </Form.Group>
        </Form>
    );
  }
  
  export default SearchPage;

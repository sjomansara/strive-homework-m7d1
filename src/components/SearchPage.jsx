import React from 'react';
import { useState } from 'react';
import { Form } from "react-bootstrap";
import DropdownItem from './DropdownItem';
import MyJumbotron from './MyJumbotron';
import MyNavbar from './MyNavbar';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [dataFetched, setDataFetched] = useState([])

    const baseString = 'https://remotive.io/api/remote-jobs?search='

    const onSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(baseString + searchTerm)

        if (!response.ok) {
            console.error("Fetching error.")
            return
        }

        const { jobs } = await response.json()

        setDataFetched(jobs)
    }

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
        <MyNavbar />
        <MyJumbotron />
        <Form style={{marginLeft: "200px", marginRight: "200px"}} onSubmit={onSubmit}>
            <Form.Label className="text-left">Search for jobs:</Form.Label>
            <Form.Control value={searchTerm} onChange={onSearchChange} type="text" autoComplete="off" placeholder="Search" />
            {dataFetched.map(job => {
                return (
                    <DropdownItem data={job}/>
                )
            })}
        </Form>
        </div>
    );
  }
  
  export default SearchPage;

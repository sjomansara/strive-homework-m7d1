import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from "react-bootstrap";
import DropdownItem from './DropdownItem';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [dataFetched, setDataFetched] = useState({})

    const fetchData = async () => {
        let searchTermCleaned = searchTerm.replace(/\s/g, "%")
        const apiString = "https://remotive.io/api/remote-jobs?search=" + searchTermCleaned

        try {
            if (searchTerm !== "") {
                let response = await fetch(apiString)
            
                if (response.ok) {
                    let data = await response
                    let readable = await data.json()
                    console.log(readable)
                    return data
                }
            }
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        setDataFetched(fetchData())
    }, [])
    
    // export const fetchdata = async () => {
    //     try {
    //       const response = await fetch(
    //         "https://striveschool-api.herokuapp.com/api/profile/",
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization:
    //               " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MzlmNjdiZTZjMTAwMTVmOWRiZDQiLCJpYXQiOjE2MzA5NDM3MzUsImV4cCI6MTYzMjE1MzMzNX0.aqatGQ0--T-ZQWZJQeYBJ0q7JsbxuWlScmsooaM_1ZE",
    //           },
    //         }
    //       );
    //       if (response.ok) {
    //         const data = await response.json();
    //         return data;
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <Form>
            <Form.Group className="mx-5 mt-5" controlId="formBasicEmail">
            <Form.Label className="text-left">Search for jobs:</Form.Label>
            <Form.Control onChange={onSearchChange} type="text" autoComplete="off" placeholder="Search" />
            <DropdownItem />
            </Form.Group>
        </Form>
    );
  }
  
  export default SearchPage;

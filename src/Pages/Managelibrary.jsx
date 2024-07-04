import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Managelibrary = ({ setId }) => {
    //useState hook is used for state management
    const [books, setBooks] = useState([]);
    const [deleteBooks, setDeleteBooks] = useState([])
    //useNavigate hook is used for navigation
    const navigate = useNavigate();
    //useEffect hook is used for render the api calls initialy
    useEffect(() => {
        fetchData();
    }, [deleteBooks])
    //this function is used for fetch the data from the api
    const fetchData = async () => {
        await axios.get("https://6646051751e227f23aad6ba3.mockapi.io/api/books")
            .then((res) => setBooks(res.data))
            .catch((error) => console.log(error))
    }
    //this function will take you to the edit page
    const handleEdit = (id) => {
        setId(id);
        navigate(`/editbooks/${id}`);
    }
    //this function will delete the data from api and update it
    const handleDelete = async (id) => {
        await axios.delete(`https://6646051751e227f23aad6ba3.mockapi.io/api/books/${id}`)
            .then((res) => setDeleteBooks(res.data))
            .catch((error) => console.log(error))
    }
    return (
        <div>
            <h1 className='text-center'>Manage Library</h1>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Book Details</h1>
                    <div className="p-1 table-responsive">
                        <table className="table table-hover table-bordered ">
                            <thead className="fs-2 text-center">
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>ISBN-Number</th>
                                    <th>Publication-Date</th>
                                    <th colspan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider fs-4 ">
                                {books.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{element.id}</th>
                                            <td>{element.title}</td>
                                            <td>{element.author}</td>
                                            <td>{element.ISBN_Number}</td>
                                            <td>{element.publication_Date}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success rounded-3"
                                                    onClick={() => {
                                                        handleEdit(element.id);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger rounded-3"
                                                    onClick={() => {
                                                        handleDelete(element.id);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <h1 className="text-center">Author Details</h1>
                    <div className="p-1 table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead className="fs-2 text-center">
                                <tr>
                                    <th>Id</th>
                                    <th>Author_Name</th>
                                    <th>DOB</th>
                                    <th>Biography</th>
                                    <th colspan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider fs-4">
                                {books.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{element.id}</th>
                                            <td>{element.author_Name}</td>
                                            <td>{element.birth_Date}</td>
                                            <td>{element.biography}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success rounded-3"
                                                    onClick={() => {
                                                        handleEdit(element.id);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger rounded-3"
                                                    onClick={() => {
                                                        handleDelete(element.id);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Managelibrary;
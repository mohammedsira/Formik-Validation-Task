import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const Addbooks = () => {
    //useNavigate hook for navigation
    const navigate = useNavigate();
    //useRef hook for focus dom element
    const myRef = useRef();
    useEffect(() => {
        myRef.current.focus();
    }, []);
    //useState hook is used for update the state
    const [addBookData, setAddBookData] = useState({
        id: "",
        title: "",
        author: "",
        ISBN_Number: "",
        publication_Date: "",
        author_Name: "",
        birth_Date: "",
        biography: "",
    });
    //this validationSchema is used for validate the form
    const validationSchema = Yup.object().shape({
        id: Yup.string().required("Id should not be empty"),
        title: Yup.string().required("Title should not be empty"),
        author: Yup.string().required("Author should not be empty"),
        ISBN_Number: Yup.string().required("ISBN Number should not be empty"),
        publication_Date: Yup.string().required(
            "Publication Date should not be empty"
        ),
        author_Name: Yup.string().required("Author Name should not be empty"),
        birth_Date: Yup.string().required("Birth Date should not be empty"),
        biography: Yup.string().required("Biography should not be empty"),
    });
    //useFormik hook is used for form validation
    const formik = useFormik({
        initialValues: { addBookData },
        validationSchema,
        onSubmit: async (values) => {
            await axios
                .post("https://6646051751e227f23aad6ba3.mockapi.io/api/books", values)
                .then((res) => console.log(res.data))
                .catch((error) => console.log(error));
            alert("book details successfully created")
            navigate("/");
        },
    });
    return (
        <div>
            <div className="container">
                <h1 className="text-center">Book Details</h1>
                <form className="form-control" onSubmit={formik.handleSubmit}>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            Id
                        </span>
                        <input
                            type="text"
                            name="id"
                            ref={myRef}
                            className="form-control"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.id}</div>
                    <br />
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            Title
                        </span>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.title}</div>
                    <br />
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            Author
                        </span>
                        <input
                            type="text"
                            name="author"
                            className="form-control"
                            value={formik.values.author}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.author}</div>
                    <br />
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            ISBN Number
                        </span>
                        <input
                            type="text"
                            name="ISBN_Number"
                            className="form-control"
                            value={formik.values.ISBN_Number}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.ISBN_Number}</div>
                    <br />
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            Publication Date
                        </span>
                        <input
                            type="date"
                            name="publication_Date"
                            className="form-control"
                            value={formik.values.publiction_Date}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.publication_Date}</div>
                    <h1 className="text-center">Author Details</h1>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            Author Name
                        </span>
                        <input
                            type="text"
                            name="author_Name"
                            className="form-control"
                            value={formik.values.author_Name}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.author_Name}</div>
                    <br />
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">
                            DOB
                        </span>
                        <input
                            type="date"
                            name="birth_Date"
                            className="form-control"
                            value={formik.values.birth_Date}
                            onChange={formik.handleChange}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                    <div className="text-danger">{formik.errors.birth_Date}</div>
                    <br />
                    <div className="input-group input-group-lg">
                        <span className="input-group-text">Biography</span>
                        <textarea
                            className="form-control"
                            name="biography"
                            value={formik.values.biography}
                            onChange={formik.handleChange}
                            aria-label="With textarea"
                        ></textarea>
                    </div>
                    <div className="text-danger">{formik.errors.biography}</div>
                    <br />
                    <div className="text-center">
                        <button
                            className="btn btn-success btn-lg fs-3  rounded-3"
                            type="submit"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addbooks;
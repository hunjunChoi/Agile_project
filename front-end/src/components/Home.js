import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
    /* // Reference to original input element
    const hiddenFileInput = React.useRef(null);

    // Adds input functionality to desired element
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    // Function to handle the user selected file
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        //props.handleFile(fileUploaded);
    }; */

    const [images, setImage] = useState();
    const [error, setError] = useState("");
    const [loaded, setLoad] = useState(false);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState();

    /*  -------------------------------------------------- Attempt 2
     // function to handle the selected file
    const uploadHandler = async (event) => {
        event.preventDefault();

        // Send the file and description to the server

        // create an instance of FormData
        const data = new FormData();

        // just append all of the data that want to send to the object
        data.append("image", file);
        data.append("description", description);

        // send to server with FormData object
        const result = await axios.post("/home", data, {
            headers: { "Content-Type": "multipart/form-data" }, // let server knows the kind of data sending
        });

        console.log(result.data);
        setImage(result.data.imagePath);

    }; --------------------------------------------------
     */

    /* -------------------------------------------Attempt 1
    // appending the file
    data.append("image", event.target.files[0]);
    // see the file details
    console.log(event.target.files[0]);

      axios
        .post("/home", data)
        .then((res) => {
            // res.data --> object with details about the file that was saved
            const imgList = [res.data, ...images];
            setImage(imgList); // add object to a 'images' array
        })
        .catch((err) => {
            console.log("ERROR!!!!!!!");
            setError(err);
        })
        .finally(() => {
            // The response has been received... so remove loading icon
            setLoad(true);
        }); 
        -------------------------------------------*/

    return (
        <div className="homeContent">
            <div>
                <h1>Reverse Image Search</h1>
                <p>
                    {" "}
                    A tool that uses pictures to find pictures on the internet
                </p>
                <p></p>
                <Button variant="secondary" size="lg" href="HowItWorks">
                    Learn how it works!
                </Button>
            </div>
            <div></div>

            <div id="ImageUploadButton">
                {/* ----------------------------------------------------Riley */}
                {/* <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange} // File Explorer pops up
                    style={{ display: "none" }}
                /> */}
                {/* ----------------------------------------------------------End Riley */}

                {/* --------------------------------------------------------button  */}
                {/* <div> */}
                {/* <input type="file" name="image" onChange={uploadHandler} />{" "} */}
                {/* pops open file explorer */}
                {/* </div> */}
                {/* {images.map((img) => (
                    <img src={`http://localhost:3000/${img.filename}`} />
                ))} */}

                {/* <Button
                    class="uploadImageBtn"
                    href="uploadImage"
                    variant="primary"
                    size="lg"
                    // onClick={handleClick} // to /uploadImage
                >
                    Upload an Image
                </Button> */}
                {/* -------------------------------------------------------- end button */}
                <form onSubmit={uploadHandler}>
                    <input
                        filename={file}
                        onChange={(e) => setFile(e.target.files[0])} // store file with useState
                        type="file" // notice the type
                        accept="image/*"
                    ></input>
                    <input
                        onChange={(event) => setDescription(event.target.value)}
                        type="text"
                    ></input>
                    {/* <input type="submit" value="Save" /> */}
                    <button type="submit">Upload an image</button>
                </form>
                {images && <img src={images} />}
            </div>

            <InputGroup className="mb-3">
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="Enter Image URL..."
                />

                <Button variant="outline-secondary" id="button-addon1">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
};

export default Home;

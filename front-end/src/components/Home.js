import React, {useRef} from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import vision from 'google-cloud/vision';

//import { detectWeb } from "./APITest2.js";
//import 'bootstrap/dist/css/bootstrap.min.css';



const  Home = props => {
    

    // Reference to original input element
    const hiddenFileInput = React.useRef(null);
    
    // Adds input functionality to desired element
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Function to handle the user selected file
    const handleChange = event => {
        const fileUploaded = event.target.files[0];

        //console.log(fileUploaded);
        //detectWeb("test");
        //props.handleFile(fileUploaded);

    };

    return (
        <div className="homeContent">
            <div>
                <h1>Reverse Image Search</h1>
                <p> A tool that uses pictures to find pictures on the internet</p>
                <p></p>
                <Button variant="secondary" size="lg" href= "HowItWorks"> 
                    Learn how it works!
                </Button>
            </div>

            <form action="/" method="POST">
                <input type="text" name="your_name" placeholder="Your name" /> <br />
                <input type="text" name="your_email" placeholder="Your email" /> <br />
                <input type="checkbox" name="agree" /><label
                    >I agree to your onerous conditions</label
                >
                <br />
                <input type="submit" value="Submit!!!" />
            </form>
                        

            <div id="ImageUploadButton">
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display: 'none'}}
                />
                <Button class="uploadImageBtn" variant="primary" size="lg" onClick={handleClick}>
                    Upload an Image
                </Button>
            </div>
            
            <InputGroup className="mb-3">
                
                <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder= "Enter Image URL..."
                />
                
                <Button variant="outline-secondary" id="button-addon1">
                Search
                </Button>
            </InputGroup>

                
        </div>
        
        
    );
}

export default Home;
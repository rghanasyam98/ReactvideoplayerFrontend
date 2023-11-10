import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Category from "../components/category";
import { uploadVideo } from "../services/allAPI";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";





function Add({setUploadVideoStatus}) {

const initialState = {
  videoId:'',
  videoCaption:'',
  videoImageUrl:'',
  videoLinkUrl:''
}

 const [videoState,setVideoState]=useState(initialState);

 const [show, setShow] = useState(false);

 const handleClose = () => {
   setShow(false);
   setVideoState(initialState);
 };
 const handleShow = () => setShow(true);

 function handleChange(event){
       let {id,value}=event.target
       if(id === 'videoLinkUrl'){
        console.log("videoLinkUrl");
         value=`https://www.youtube.com/embed/${value.slice(-11)}`
       }
       setVideoState((prevState)=>({
          ...prevState,
           [id]:value
       }))

 }

 async function handleUpload(event){
  // event.preventDefault();
       console.log("upload clicked")
       const {videoId,videoCaption,videoImageUrl,videoLinkUrl}=videoState
       if(!videoId || !videoCaption || !videoImageUrl || !videoLinkUrl){
           toast.warning("Please fill the form completely")
       }
       else{
        console.log("data ok")
        const response=await uploadVideo(videoState);
        // console.log(response)
        if(response.status >=200 && response.status <= 300){
          setUploadVideoStatus(response.data);
          toast.success("Upload successful");
          
          handleClose();

        }
        else{
          toast.error("Upload failed");
        }
       }
 }

  console.log(videoState);

 
  return (
    <>
      <Row className="mt-5">
        <Col></Col>
        <Col lg={3}>
          <h3 style={{ color: "white" }}>
            Upload new video
            <button className="btn" onClick={handleShow}>
              <i class="fa-solid fa-upload ms-2" style={{ color: "white" }}></i>
            </button>
          </h3>
        </Col>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i class="fa-solid fa-film text-warning "></i>Upload videos
            </Modal.Title>
          </Modal.Header>
          <p className="ms-2 mt-2">Please fill the following details</p>
          <Modal.Body>
            <form className="border border-secondary p-3 rounded" >
              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Enter video ID" id="videoId" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Enter video caption" id="videoCaption" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Enter video image url" id="videoImageUrl" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control
                  type="text"
                  placeholder="Enter youtube video link"
                  id="videoLinkUrl"
                  onChange={handleChange}
                />
              </Form.Group>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              cancel
            </Button>
            <Button
              variant="primary"
              
              onClick={handleUpload}
            >
              upload
            </Button>
          </Modal.Footer>
        </Modal>


        <Col lg={5}></Col>
        <Col lg={3}>
          <Link
            to={"/history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>Watch history</h3>
          </Link>
        </Col>
      </Row>

      <ToastContainer position="top-center" theme="colored" autoClose={2000} />

    </>
  );
}

export default Add;


// <iframe width="873" height="491" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
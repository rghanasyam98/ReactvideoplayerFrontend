import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Category from "../components/category";
import { addHistory, getVideos } from "../services/allAPI";
import { useEffect } from "react";
import { deleteVideo } from "../services/allAPI";

export default function View(props) {
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async ({videoCaption,videoLinkUrl}) =>{


    setShow(true);

    console.log(videoCaption,videoLinkUrl);
    let today=new Date();
    let timestamp =new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
    let historyData={
      videoCaption,
      videoLinkUrl,
      timestamp

    }
    const response=await addHistory(historyData);
    
  } 

  const [deleteVideoStatus,setDeleteVideoStatus] =useState(false)

  const deletionChangeHandler=()=>{
    console.log("Deleting..");
    setDeleteVideoStatus(!deleteVideoStatus);
  }

  useEffect(() => {
    getAllUploadedVideos();
  }, [deleteVideoStatus,props.uploadVideoStatus]);



 

  async function getAllUploadedVideos() {
    const response = await getVideos();
    const { data } = response;
    setVideos(data);
  }

  async function deleteThisVideo(id) {
    const response = await deleteVideo(id);
   console.log(response);
   deletionChangeHandler()
 
  }

  function handleDragStart(event,vid){
      //  console.log(vid)
      event.dataTransfer.setData("videoId",vid);
  }


  return (
    <>
      <h3 className="ms-5 mt-3">All videos</h3>
      <Row className="mt-5 ms-2">
        <Col lg={8}>
          <div className="d-flex flex-wrap">
            {videos.length > 0 &&
              videos.map((video) => (
                <div key={video.id} className="mb-3 me-3" style={{ flex: "0 0 calc(33.333% - 1rem)" }}>
                  <Card style={{ width: "18rem" }} draggable onDragStart={(event)=>handleDragStart(event,video.id)} >
                    <Card.Img variant="top" src={video.videoImageUrl} onClick={()=>handleShow(video)} />
                    <Card.Body>
                      <div className="row">
                        <div className="col">
                          <Card.Title>{video.videoCaption}{video.id}</Card.Title>
                        </div>
                        <div className="col">
                          <Button
                            className="ms-5"
                            variant="danger"
                            style={{
                              height: "35px",
                              width: "50px",
                              background: "red",
                              
                            }}
                            onClick={()=>deleteThisVideo(video?.id)}
                          >
                            <span>
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>





                  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.videoCaption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe
              width="450"
              height="350"
              src={`${video.videoLinkUrl}?autoplay=1`}
              title={video.videoCaption}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>


                </div>
              ))}
          </div>

          {videos.length === 0 && <p>No videos found</p>}

        </Col>
        <Col></Col>
        <Col lg={3}>
          <Category />
        </Col>
      </Row>


      
    </>
  );
}

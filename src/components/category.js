import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { addCategory, deleteCategory, getCategory, getOneVideo, updateCategory } from "../services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Category() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [uploadedCategories, setUploadedCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories();
  }, []);

  function inputChangeHandler(category) {
    setCategory(category);
  }

  async function handleSubmit() {
    console.log(category);
    if (category.length === 0) {
      toast.warning("please enter a category");
    } else {
      let body = {
        category,
        allvideos: [],
      };
      const response = await addCategory(body);
      if (response.status >= 200 && response.status <= 300) {
        toast.success("category added successfully");
        setCategory("");
        getAllCategories();
        handleClose();
      } else {
        toast.error("something went wrong");
      }
    }
  }

  async function getAllCategories() {
    const response = await getCategory();
    const { data } = response;
    // console.log(data)
    setUploadedCategories(data);
  }

  async function handleDelete(id) {
    const response = await deleteCategory(id);
    getAllCategories();
  }

  console.log("uploadedCategories", uploadedCategories);

  // we need to prevent the page refresh on droping
  function handleDragOver(event) {
    event.preventDefault();
  }

 async function handleDrop(event,categoryId) {
       console.log("dropped", categoryId);
      //  to retrieve the passed data when the drag event starts
       const vid=event.dataTransfer.getData("videoId")
       console.log(vid)
       const response=await getOneVideo(vid) 
       const {data}=response
       console.log(data);
       const selectedCategory=uploadedCategories.find(category=>category.id === categoryId)
       selectedCategory.allvideos.push(data)
       console.log(selectedCategory);
       const updateResponse=await updateCategory(categoryId,selectedCategory)
      console.log(updateResponse);
      getAllCategories()
      
      
      }

      function deleteThisVideoFromCategory(id){

      }
      


  return (
    <>
      <Button className="w-75" variant="warning" onClick={handleShow}>
        Add new category
      </Button>{" "}
      {uploadedCategories?.length > 0 &&
        uploadedCategories.map((item) => (
          <div className="mt-5 border border-secondary p-3 rounded ">
            <div
              className="d-flex justify-content-between align-items-center"
              droppable
              onDragOver={(event) => handleDragOver(event)}
              onDrop={(event) => handleDrop(event,item.id)}
            >
              <h6>{item.category}</h6>
              <Button
                className="ms-5"
                variant="danger"
                style={{
                  height: "35px",
                  width: "50px",
                  background: "red",
                }}
                onClick={() => handleDelete(item.id)}
              >
                <span>
                  <i className="fa-solid fa-trash-can"></i>
                </span>
              </Button>
            </div>
            <Row>
              <Col>
               {item?.allvideos.length >0 &&
                item.allvideos.map((video)=>(
                  <div className="d-flex flex-wrap">
           
             
                <div key={video.id} className="mb-3 me-3" style={{ flex: "0 0 calc(33.333% - 1rem)" }}>
                  <Card style={{ width: "18rem" }} >
                    <Card.Img variant="top" src={video.videoImageUrl} onClick={()=>handleShow(video)} />
                    <Card.Body>
                      <div className="row">
                        <div className="col">
                          <Card.Title>{video.videoCaption}{video.id}</Card.Title>
                          <div className="col">
                          <Button
                            className="ms-5"
                            variant="danger"
                            style={{
                              height: "35px",
                              width: "50px",
                              background: "red",
                              
                            }}
                            onClick={()=>deleteThisVideoFromCategory(video?.id)}
                          >
                            <span>
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                          </Button>
                        </div>
                        </div>
                        <div className="col">
                          
                     
                         
                        </div>
                      </div>
                    </Card.Body>
                  </Card>





                  


                </div>
         
          </div>
                ))  
              }
              </Col>
            </Row>
          </div>
        ))}
      {uploadedCategories?.length === 0 && (
        <p className="text-danger">No categories found</p>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="fa-solid fa-pencil me-2 text-warning "></i>Add new
            category
          </Modal.Title>
        </Modal.Header>
        <p className="ms-2 mt-2">Please fill the following details</p>
        <Modal.Body>
          <form className="border border-secondary p-3 rounded">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter category name"
                onChange={(event) => inputChangeHandler(event.target.value)}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

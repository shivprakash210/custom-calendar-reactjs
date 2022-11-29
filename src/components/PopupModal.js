import React,{useState} from 'react';
import { CardImg } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import avatarImg from '../image/avatar.jpg'

function MyVerticallyCenteredModal(props) {
    console.log("data:",props.popupdata);
    const btncolor = props.popupdata? props.popupdata.colors:'#000';
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={props.onHide}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{padding:'35px'}}>
        <div className='row'>
            <div className='col-md-8'>
                <h3 style={{fontSize: '36px',fontWeight: 700, color: '#2D224C'}}>Speaking Class</h3>
                <span style={{fontSize: '20px', fontWeight: 500, color: '#2D224C'}}>Topic: {props.popupdata? props.popupdata.topic:''}</span>
            </div>
            <div className='col-md-4'>
                <CardImg src={avatarImg}  style={{width:"72px",borderRadius:"50%"}}/>
                <span style={{marginLeft: '20px',fontSize: '24px',fontWeight: 500, color: '#2D224C'}}>{props.popupdata? props.popupdata.name:''}</span>
            </div>
        </div>

        <div className='row' style={{margin: "30px 0px"}}>
            <div className='col-md-6 p-0' >
                <div style={{fontSize:'20px',fontWeight:500,color:'#2D224C'}}>Data</div>
                <div style={{color:`${btncolor}`,fontSize:'20px',fontWeight:700}}>
                {props.popupdata? props.popupdata.data:''}
                </div>
            </div>
            <div className='col-md-3'>
                <div style={{fontSize:'20px',fontWeight:500,color:'#2D224C'}}>Time</div>
                <div style={{color:`${btncolor}`,fontSize:'20px',fontWeight:700}}>
                    {props.popupdata? props.popupdata.time:''}
                </div>
            </div>
            <div className='col-md-3'>
                <div style={{fontSize:'20px',fontWeight:500,color:'#2D224C'}}>Duration</div>
                <div style={{color:`${btncolor}`,fontSize:'20px',fontWeight:700}}>{props.popupdata? props.popupdata.durations:''}</div>
            </div>
        </div>

        <div className='row' style={{marginBottom:"20px"}}>
            <div className='col-md-12'>
                <button className="btn button" style={{width:'100%', background:`${btncolor}`, color:'#fff',fontSize: '20px', fontWeight: 600,height: '59px'}}>{props.popupdata? props.popupdata.btnlabel:'JOIN'}</button>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-2'>
                <span style={{fontSize: '20px',fontWeight: 500}}>Material:</span>
            </div>
            <div className='col-md-10'>
                <a href='' style={{fontSize: '20px',fontWeight: 400,color:'#2D224C'}}>Video Listening Introduzione</a>
                <br />
                <a href='' style={{fontSize: '20px',fontWeight: 400,color:'#2D224C'}}>Video Listening Introduzione</a>
            </div>
        </div>
        
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function PopupModal(props) {
    return (
    <>
      <MyVerticallyCenteredModal
        show={props.modalShow}
        onHide={props.hidepopup}
        popupdata={props.popupdata}
      />
    </>
  );
}
export default PopupModal;
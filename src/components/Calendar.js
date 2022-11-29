import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import PopupModal from "./PopupModal";

export default function Calendar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [popupdata, setPopupdata] = useState(null);
  const handleDateClick = (data) => {
    setModalShow(true); 
    setPopupdata(data); 
  }

  const handleHideClick = () => {
    setModalShow(false);    
  }

  const renderEventContent = (eventInfo)=> { 
    console.log(eventInfo);   
    return (
      <div onClick={()=>handleDateClick(eventInfo.event._def.extendedProps)} style={{cursor:'pointer',padding:'10px'}}>
        <b>09-10</b>
        <br />
        <b>{eventInfo.event._def.title}</b>
      </div>
    );
  }

  
  return (
    <>
    
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { id: 1,title: "Speaking Class", date: "2022-11-01",topic:"Happiness",time:"09:00",durations:"45 minutes",name:"Liam 1",data:"Tuesday 1st November 2022",btnlabel:"JOIN",colors:"#8065C9" },
          { id: 2,title: "Speaking Class", date: "2022-11-02",topic:"Food",time:"09:00",durations:"45 minutes",name:"Liam 2",data:"Tuesday 2nd November 2022",btnlabel:"WATCH RECORDING",colors:"#D4145A" },
          { id: 2,title: "Speaking Class", date: "2022-11-30",topic:"Food",time:"09:00",durations:"45 minutes",name:"Liam 2",data:"Tuesday 30th November 2022",btnlabel:"WATCH RECORDING",colors:"#D4145A" }  
        ]}
        headerToolbar={{
          left: "prev next, today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        //dateClick={handleDateClick}
        eventContent={renderEventContent}
        timeZone= 'America/New_York'
      />
      <PopupModal modalShow={modalShow} hidepopup={handleHideClick} popupdata={popupdata}/>
      
    </>
  );
}






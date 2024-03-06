

import axios  from "axios";
import { useEffect, useState } from "react";

function Information() {
  const [eventsData, setEventsData] = useState([]);
  const [sponsorshipData, setSponsorshipData] = useState([]);
  const [participantData, setParticipantData] = useState([]);
  const [organizersData, setOrganizersData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Event')
      .then(response => {
        setEventsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/participant')
      .then(response => {
        setParticipantData(response.data);
      })
      .catch(error => {
        console.error('Error fetching participant data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/Sponsorship')
      .then(response => {
        setSponsorshipData(response.data);
      })
      .catch(error => {
        console.error('Error fetching sponsorship data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/Organizes')
      .then(response => {
        setOrganizersData(response.data);
      })
      .catch(error => {
        console.error('Error fetching organizers data:', error);
      });
  }, []);

  return (
    <div>
      <h1 className=" mx-40 my-20 text-3xl text-black font-bold">Informations</h1>
      <div className=" mx-40 my-20 text-1xl text-black font-semibold  ">
      <h2 className=" grid-cols-6 gap-6">EventName EventDate TeamSize EntryFee EventLocation CompanyName</h2>
      {eventsData.map((event) => (
        <div key={event.Ename}>
           <h3 className=" grid-cols-6 gap-6">{event.Ename} {event.Date} {event.Teamsize} {event.EntryFee} {event.Elocation} {event.Cname}</h3>
        </div>
      ))}
    </div>
    <div className=" mx-40 my-20 text-1xl text-black font-semibold ">
      <h2 className=" table-auto">Usn Name Email Phonenumber Ename Year Branch Gender DOB Collegename</h2>
      {participantData.map((participant) => (
        <div key={participant.usn}>
           <h3 className=" table-auto">{participant.usn} {participant.name} {participant.email} {participant.phonenumber} {participant.Ename} {participant.year} {participant.branch} {participant.gender} {participant.dob} {participant.college}</h3>
        </div>
      ))}
    </div>
    <div className=" mx-40 my-20 text-1xl text-black font-semibold ">
      <h2 className=" table-auto">companyName Funds</h2>
      {sponsorshipData.map((sponsorship) => (
        <div key={sponsorship.Cname}>
           <h3 className="">{sponsorship.Cname} {sponsorship.Funds}</h3>
        </div>
      ))}
    </div>
    <div className=" mx-40 my-20 text-1xl text-black font-semibold ">
      <h2 className=" table-auto">Id Contactnumber Organizersname Teamname Eventname</h2>
      {organizersData.map((organizer) => (
        <div key={organizer.id}>
           <h3 className=" table-auto">{organizer.Id} {organizer.ContactNumber} {organizer.Oname} {organizer.Tname} {organizer.Ename}</h3>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Information;

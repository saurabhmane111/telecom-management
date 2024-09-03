import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const CollaborationCommunicationContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const MessageContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const MessageHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const MessageBody = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
`;

const FileContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const FileHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const FileLink = styled.a`
  display: block;
  margin: 5px 0;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MeetingNotesContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const MeetingNotesHeader = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const MeetingNote = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
`;

const CollaborationCommunication = () => {
  // Dummy data for collaboration and communication
  const [messages] = useState([
    {
      id: 1,
      sender: "John Doe",
      content: "Please review the updated network design and provide feedback by EOD.",
      date: "2024-09-01",
    },
    {
      id: 2,
      sender: "Alice Smith",
      content: "The installation team will be on-site at 10 AM tomorrow.",
      date: "2024-09-02",
    },
  ]);

  const [files] = useState([
    {
      id: 1,
      name: "Network_Design_v1.pdf",
      url: "#",
    },
    {
      id: 2,
      name: "Firewall_Configuration_Guide.docx",
      url: "#",
    },
  ]);

  const [meetingNotes] = useState([
    {
      id: 1,
      note: "Discussed the scope of work and set deadlines for each task.",
      date: "2024-08-30",
    },
    {
      id: 2,
      note: "Reviewed the project timeline and allocated resources.",
      date: "2024-09-01",
    },
  ]);

  return (
    <CollaborationCommunicationContainer>
      <h2>Collaboration & Communication</h2>

      {/* Messages Section */}
      <Section>
        <SectionTitle>Team Messages</SectionTitle>
        {messages.map((message) => (
          <MessageContainer key={message.id}>
            <MessageHeader>{message.sender}</MessageHeader>
            <MessageBody>{message.content}</MessageBody>
            <MessageBody><strong>Date:</strong> {message.date}</MessageBody>
          </MessageContainer>
        ))}
      </Section>

      {/* Files Section */}
      <Section>
        <SectionTitle>Shared Files</SectionTitle>
        {files.map((file) => (
          <FileContainer key={file.id}>
            <FileHeader>{file.name}</FileHeader>
            <FileLink href={file.url} target="_blank">Download</FileLink>
          </FileContainer>
        ))}
      </Section>

      {/* Meeting Notes Section */}
      <Section>
        <SectionTitle>Meeting Notes</SectionTitle>
        {meetingNotes.map((note) => (
          <MeetingNotesContainer key={note.id}>
            <MeetingNotesHeader>Note</MeetingNotesHeader>
            <MeetingNote>{note.note}</MeetingNote>
            <MeetingNote><strong>Date:</strong> {note.date}</MeetingNote>
          </MeetingNotesContainer>
        ))}
      </Section>
    </CollaborationCommunicationContainer>
  );
};

export default CollaborationCommunication;

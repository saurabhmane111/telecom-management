import { useState } from "react";
import styled from "styled-components";

// Styled Components
const FormContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 1rem;
`;

const Alert = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;

// FeedbackForm Component
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    installationDate: "",
    status: "",
    challenges: "",
    equipmentStatus: "",
    equipmentExplanation: "",
    clientFeedback: "",
    teamCoordination: "",
    safetyCompliance: "",
    safetyExplanation: "",
    suggestions: "",
    additionalComments: "",
    teamLeaderName: "",
    contactInformation: "",
    reportDate: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation if necessary
    console.log("Form Data:", formData);
    // Simulate form submission success
    setFormSubmitted(true);
    // Reset form
    setFormData({
      projectName: "",
      installationDate: "",
      status: "",
      challenges: "",
      equipmentStatus: "",
      equipmentExplanation: "",
      clientFeedback: "",
      teamCoordination: "",
      safetyCompliance: "",
      safetyExplanation: "",
      suggestions: "",
      additionalComments: "",
      teamLeaderName: "",
      contactInformation: "",
      reportDate: "",
    });
  };

  return (
    <FormContainer>
      <FormTitle>Installation Team Feedback & Status Report</FormTitle>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Label htmlFor="projectName">Project Name/ID</Label>
          <p>Please enter the project name or ID:</p>
          <Input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="installationDate">Installation Date</Label>
          <p>When did the installation start?</p>
          <Input
            type="date"
            name="installationDate"
            value={formData.installationDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <Label>Current Status</Label>
          <p>What is the current status of the installation?</p>
          <RadioGroup>
            <input
              type="radio"
              name="status"
              value="Completed"
              id="completed"
              checked={formData.status === "Completed"}
              onChange={handleChange}
              required
            />
            <label htmlFor="completed">🟢 Completed</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="status"
              value="In Progress"
              id="inProgress"
              checked={formData.status === "In Progress"}
              onChange={handleChange}
              required
            />
            <label htmlFor="inProgress">🟡 In Progress</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="status"
              value="Delayed"
              id="delayed"
              checked={formData.status === "Delayed"}
              onChange={handleChange}
              required
            />
            <label htmlFor="delayed">🔴 Delayed</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="status"
              value="On Hold"
              id="onHold"
              checked={formData.status === "On Hold"}
              onChange={handleChange}
              required
            />
            <label htmlFor="onHold">⏸ On Hold</label>
          </RadioGroup>
        </div>

        <div className="mb-3">
          <Label htmlFor="challenges">Challenges Faced</Label>
          <p>
            Did you encounter any challenges during the installation? If so,
            please describe:
          </p>
          <Textarea
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Label>Equipment Status</Label>
          <p>
            Is all the required equipment installed and functioning properly?
          </p>
          <RadioGroup>
            <input
              type="radio"
              name="equipmentStatus"
              value="Yes"
              id="equipmentYes"
              checked={formData.equipmentStatus === "Yes"}
              onChange={handleChange}
              required
            />
            <label htmlFor="equipmentYes">🟢 Yes</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="equipmentStatus"
              value="No"
              id="equipmentNo"
              checked={formData.equipmentStatus === "No"}
              onChange={handleChange}
              required
            />
            <label htmlFor="equipmentNo">🔴 No</label>
          </RadioGroup>
        </div>

        {formData.equipmentStatus === "No" && (
          <div className="mb-3">
            <Label htmlFor="equipmentExplanation">If no, please explain</Label>
            <Textarea
              name="equipmentExplanation"
              value={formData.equipmentExplanation}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="mb-3">
          <Label htmlFor="clientFeedback">Client Feedback (if any)</Label>
          <p>
            Please share any feedback or concerns received directly from the
            client during the installation:
          </p>
          <Textarea
            name="clientFeedback"
            value={formData.clientFeedback}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Label>Team Coordination</Label>
          <p>
            How well did the team coordinate during the installation process?
          </p>
          <RadioGroup>
            <input
              type="radio"
              name="teamCoordination"
              value="5"
              id="coordination5"
              checked={formData.teamCoordination === "5"}
              onChange={handleChange}
              required
            />
            <label htmlFor="coordination5">⭐⭐⭐⭐⭐ (Excellent)</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="teamCoordination"
              value="4"
              id="coordination4"
              checked={formData.teamCoordination === "4"}
              onChange={handleChange}
              required
            />
            <label htmlFor="coordination4">⭐⭐⭐⭐ (Good)</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="teamCoordination"
              value="3"
              id="coordination3"
              checked={formData.teamCoordination === "3"}
              onChange={handleChange}
              required
            />
            <label htmlFor="coordination3">⭐⭐⭐ (Average)</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="teamCoordination"
              value="2"
              id="coordination2"
              checked={formData.teamCoordination === "2"}
              onChange={handleChange}
              required
            />
            <label htmlFor="coordination2">⭐⭐ (Below Average)</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="teamCoordination"
              value="1"
              id="coordination1"
              checked={formData.teamCoordination === "1"}
              onChange={handleChange}
              required
            />
            <label htmlFor="coordination1">⭐ (Poor)</label>
          </RadioGroup>
        </div>

        <div className="mb-3">
          <Label htmlFor="safetyCompliance">Safety Compliance</Label>
          <p>Did the team follow all safety protocols and guidelines?</p>
          <RadioGroup>
            <input
              type="radio"
              name="safetyCompliance"
              value="Yes"
              id="safetyYes"
              checked={formData.safetyCompliance === "Yes"}
              onChange={handleChange}
              required
            />
            <label htmlFor="safetyYes">🟢 Yes</label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              name="safetyCompliance"
              value="No"
              id="safetyNo"
              checked={formData.safetyCompliance === "No"}
              onChange={handleChange}
              required
            />
            <label htmlFor="safetyNo">🔴 No</label>
          </RadioGroup>
        </div>

        {formData.safetyCompliance === "No" && (
          <div className="mb-3">
            <Label htmlFor="safetyExplanation">If no, please explain</Label>
            <Textarea
              name="safetyExplanation"
              value={formData.safetyExplanation}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="mb-3">
          <Label htmlFor="suggestions">Suggestions for Improvement</Label>
          <p>
            Please provide any suggestions you have for improving the
            installation process:
          </p>
          <Textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="additionalComments">Additional Comments</Label>
          <p>Any other comments or observations:</p>
          <Textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="teamLeaderName">Team Leader's Name</Label>
          <Input
            type="text"
            name="teamLeaderName"
            value={formData.teamLeaderName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="contactInformation">Contact Information</Label>
          <Input
            type="text"
            name="contactInformation"
            value={formData.contactInformation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="reportDate">Report Date</Label>
          <Input
            type="date"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Submit Feedback</Button>
      </form>
      {formSubmitted && <Alert>Feedback Submitted Successfully!</Alert>}
    </FormContainer>
  );
};

export default FeedbackForm;

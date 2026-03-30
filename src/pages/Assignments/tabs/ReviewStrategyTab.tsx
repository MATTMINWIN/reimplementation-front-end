import FormSelect from "components/Form/FormSelect";
import { Col, Row, Form, Button, Modal, FloatingLabel, Stack } from "react-bootstrap";
import FormSelect from "../../components/Form/FormSelect";

const ReviewStrategyTab = () => {
  return (
    <Row className="mt-4">
      <Col>

       <div className="row">

          <div className="col-md-6">

            <Form className="topics-settings-form">
              <Form.Group as={Row} className="mb-3">  
                <Form.Label column sm="3" className="form-label">
                  Review Strategy:
                </Form.Label>
                <Col sm="3">
                  <Form.Select>
                    <option value="1">Static Strategy</option>
                    <option value="2">Dynamic Strategy</option>
                  </Form.Select>
                </Col>
                
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3">  
                <Form.Label column sm="5">
                  Maximum number of reviews per submission:
                </Form.Label>
                <Col sm="2">
                  <Form.Control type = "number" defaultValue="0"/>
                </Col>

              </Form.Group>
              
               
              <Form.Group as={Row} className="mb-3">  
                <Form.Check
                  type="checkbox"
                  id="maximumPartipants"
                  label="Has Max Review Limit?"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5" className="form-label">
                  Set allowed number of reviews per reviewer:
                </Form.Label>
                <Col sm="2">
                  <Form.Control type = "number" defaultValue="0"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5" className="form-label">
                  Set required number of reviews per reviewer:
                </Form.Label>
                <Col sm="2">
                  <Form.Control type = "number" defaultValue="0"/>
                </Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3">
                <Form.Check
                type="checkbox"
                id="anonymous"
                label="Is review anonymous?"
              />
                <Form.Check
                type="checkbox"
                id="teams"
                label="Is review done by teams?"
              />
                <Form.Check
                type="checkbox"
                id="self-review"
                label="Allow self-reviews?"
              />
                <Form.Check
                type="checkbox"
                id="visible"
                label="Reviews visible to other reviewers?"
              />
              </Form.Group>
            </Form>
          </div>

          {/* Footer / Buttons
        This maps to your <Modal.Footer>
        */}
        <div className="mt-4 pt-3 border-top d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary me-2">
            Back
          </button>
          <button type="submit" className="btn btn-outline-success">
            Save
          </button>
        </div>
       </div>
        
      </Col>
    </Row>
  );
};

export default ReviewStrategyTab;

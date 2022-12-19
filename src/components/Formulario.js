import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function Formulario() {
  return (
    <Container >
    <Row>
   
      <Col className="p-5">
      <h4>
        ¿En que podemos Ayudarte?
      </h4>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo" />
        <Form.Text className="text-muted">
          Te responderemos a esta misma dirección
        </Form.Text>
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Mensaje</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
     <br></br>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form></Col>
    </Row>
  </Container>
    
  );
}

export default Formulario;
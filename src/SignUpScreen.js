import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUpScreen() {
  return (
    <Container className="small-container">
      <h1 className="my-3">Sign Up</h1>
      <Form onClick={console.log('Form Submitted')}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>First Name</Form.Label>
          <Form.Control required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">Already have an account? </div>
      </Form>
    </Container>
  );
}

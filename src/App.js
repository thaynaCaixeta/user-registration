import './App.css';
import RegisterForm from './components/RegisterForm';
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">Sign up</Typography>
      <RegisterForm />
    </Container>
  );
}

export default App;

import './App.css';
import RegisterForm from './components/RegisterForm';
import { Container, Typography } from "@material-ui/core";

function onSubmit(dados) {
  console.log(dados);
}

function validateId(identification) {
  if (identification && identification.length <= 11)
    return { valid: false, helperText: "Id must have 11 digits" }
  return { valid: true, helperText:"" };
}

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">Sign up</Typography>
      <RegisterForm onSubmit={onSubmit} onBlur={validateId} />
    </Container>
  );
}

export default App;

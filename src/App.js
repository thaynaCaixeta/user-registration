import './App.css';
import RegisterForm from './components/RegisterForm';
import { Container, Typography } from "@material-ui/core";

function onSubmit(dados) {
  console.log(dados);
}

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">Sign up</Typography>
      <RegisterForm onSubmit={onSubmit} />
    </Container>
  );
}

export default App;

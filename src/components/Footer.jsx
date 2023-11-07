import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar bg="black" data-bs-theme="black">
      <Container>
        <Navbar.Brand href="#home" className='login-cadastro-link'>Fashion Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className='footer-links'>
          <Navbar.Text className='login-cadastro-link'>
            Contato: fashionstore@gmail.com.br
          </Navbar.Text>
          <div className='login-cadastro-link'>
            Endereço: Rua Lins de Vasconcelos, 1222
          </div>
          <div className='login-cadastro-link'> @fashionstore 
          </div>
          <div className='login-cadastro-link'> @fashionstore 
          </div>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
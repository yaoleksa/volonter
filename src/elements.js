import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBarMenu extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
        <Container fluid>
          <Navbar.Brand href="#">Головна</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className="navbar_link" href="./pages/accounts.html" 
              eventKey="accounts"
              id="accounts">Рахунки</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/team.html">Команда</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/docs.html">Документація фонду</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/reports.html">Звітність</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/photo.html">Фотозвіти</Nav.Link>
            </Nav>
            <Form className="d-flex">
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
    }
}

class NavBarMenuAccounts extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
      <Container fluid>
        <Navbar.Brand href="../index.html">Головна</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className="navbar_link" href="./accounts.html" active>Рахунки</Nav.Link>
            <Nav.Link className="navbar_link" href="./team.html">Команда</Nav.Link>
            <Nav.Link className="navbar_link" href="./docs.html">Документація фонду</Nav.Link>
            <Nav.Link className="navbar_link" href="./reports.html">Звітність</Nav.Link>
            <Nav.Link className="navbar_link" href="./photo.html">Фотозвіти</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  }
}

class NavBarMenuTeam extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
      <Container fluid>
        <Navbar.Brand href="../index.html">Головна</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className="navbar_link" href="./accounts.html">Рахунки</Nav.Link>
            <Nav.Link className="navbar_link" href="./team.html" active>Команда</Nav.Link>
            <Nav.Link className="navbar_link" href="./docs.html">Документація фонду</Nav.Link>
            <Nav.Link className="navbar_link" href="./reports.html">Звітність</Nav.Link>
            <Nav.Link className="navbar_link" href="./photo.html">Фотозвіти</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  }
}

class NavBarMenuDocs extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
      <Container fluid>
        <Navbar.Brand href="../index.html">Головна</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className="navbar_link" href="./accounts.html">Рахунки</Nav.Link>
            <Nav.Link className="navbar_link" href="./team.html">Команда</Nav.Link>
            <Nav.Link className="navbar_link" href="./docs.html" active>Документація фонду</Nav.Link>
            <Nav.Link className="navbar_link" href="./reports.html">Звітність</Nav.Link>
            <Nav.Link className="navbar_link" href="./photo.html">Фотозвіти</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  }
}

class NavBarMenuReports extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
      <Container fluid>
        <Navbar.Brand href="../index.html">Головна</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className="navbar_link" href="./accounts.html">Рахунки</Nav.Link>
            <Nav.Link className="navbar_link" href="./team.html">Команда</Nav.Link>
            <Nav.Link className="navbar_link" href="./docs.html">Документація фонду</Nav.Link>
            <Nav.Link className="navbar_link" href="./reports.html" active>Звітність</Nav.Link>
            <Nav.Link className="navbar_link" href="./photo.html">Фотозвіти</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  }
}

class NavBarMenuPhoto extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
      <Container fluid>
        <Navbar.Brand href="../index.html">Головна</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className="navbar_link" href="./accounts.html">Рахунки</Nav.Link>
            <Nav.Link className="navbar_link" href="./team.html">Команда</Nav.Link>
            <Nav.Link className="navbar_link" href="./docs.html">Документація фонду</Nav.Link>
            <Nav.Link className="navbar_link" href="./reports.html">Звітність</Nav.Link>
            <Nav.Link className="navbar_link" href="./photo.html" active>Фотозвіти</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  }
}

class Contant extends React.Component {
  render() {
    return (<div>
           <p className="text">Наші цілі:</p>
           <p className='text'>Вставити відповідний текст</p>
          <img id="image" src="img/Army_SOS_logo.png"/>
        </div>);
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <p id="header">Наші контакти:</p>
        <p className='footer_text'>електронна пошта</p>
        <p className='footer_text'>Телефон</p>
        <p className='footer_text'>Де ми знаходимось:</p>
        <p className='footer_text'>Адреса</p>
      </footer>
    );
  }
}
class FileUploader extends React.Component {
  render() {
    return (
      <div id="inputFile">
        <input type="file" id="get_file_from_pc" multiple></input>
      </div>
    );
  }
}
class PhotoUpload extends React.Component {
  render() {
    return (
      <Button variant="success" onClick={uploadPhoto}>Завантажити фото</Button>
    );
  }
}

function uploadPhoto() {
  const fileButton = document.getElementById('get_file_from_pc');
  fileButton.click();
}

export { Contant, 
  Footer, 
  NavBarMenuAccounts, 
  NavBarMenuTeam, 
  NavBarMenuDocs, 
  NavBarMenuPhoto, 
  NavBarMenuReports, 
  NavBarMenu,
  FileUploader,
  PhotoUpload };
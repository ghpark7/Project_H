import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navibar.css'; // CSS 파일

const Navibar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="custom-brand">HANDICINE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#expert">전문가 Q&A</Nav.Link>
          <Nav.Link href="#board">자유 게시판</Nav.Link>
          <Nav.Link href="#pharmacy">주변 약국 찾기</Nav.Link>
          <Nav.Link href="#disease">전염병 유행정보</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
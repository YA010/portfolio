import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import './content.css';
function Content() {
    return (<>
        <Container id="content">
            <h1 id="bigtext">Front end Developer</h1>
        <Card.Title id="title">My Skills</Card.Title>
        <div id="cont">
        <Image id="skills" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" fluid/>
        <Image id="skills" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" fluid/>
        <Image id="skills" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" fluid/>
        <Image id="skills" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" fluid/>
        </div>
        </Container>
        <Container id="content">
        <Card.Title   id="c1" >Projects</Card.Title>
        <Card
          bg="dark"
          key= "dark"
          text= "white"
          id="cards"
          className="mb-2"
         
        >
          <Card.Header>Developed with Html, Css, Js, Ionic and React

</Card.Header>
          <Card.Body>
            <Card.Title  > Stock market web app </Card.Title>
            <Card.Text>
            Built a stock market app showcasing various forms of data alowing users a vast array of functionality.
            </Card.Text>
            <Button href="https://yusuf.is-a.dev/stocksy/">View app</Button> <Button href="https://github.com/YA010/stocksy/">Github link</Button>
          </Card.Body>
          
        </Card>
        <Card
          bg="dark"
          key= "dark"
          text= "white"
        id="cards"
          className="mb-2"
         
        >
          <Card.Header>Developed with Html, Css , Js, Firebase , Ionic and React</Card.Header>
          <Card.Body>
            <Card.Title  >Full Stack social media app</Card.Title>
            <Card.Text>
            Built a social media app following solidsails course alowing users a vast array of functionality.
            </Card.Text>
            <Button href="https://newz-c60cc.web.app/news">View app</Button> <Button href="https://github.com/YA010/Newzy">Github link</Button>
          </Card.Body>
          
        </Card>
      
        </Container>
        </>
    )
}

export default Content
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import './Blog.css'

const Blog = () => {

    useTitle('Blog')
    return (
        <Container className='blog-container'>
            <h2 className='text-2xl font-bold text-center w-auto rvw-title p-2 mb-10'>Some qusteions-answers:</h2>
            <br></br>
            <Row>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.What are the different ways to manage a state in a React application?</strong></p>
                    <p>Answer :  In React apps, there are some different ways to handle the state.
                        Among Them  first is URL. Keeping data in the URL allows users to share deep links with others
                    </p>
                    <p>Second is ,Web Storage . The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots.
                        Third is Local storage.This is to use store state locally. It is useful when one component needs the state
                    </p>
                    <p>The Fourth option is Lifted State. This is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent.</p>
                    <p>Fifth option is Derived state,This is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing.</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.How does prototypical inheritance work?</strong></p>
                    <p>Answer :  Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    {/* <p>How it works:  In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.The server's protected routes will check for a valid JWT in the</p> */}
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.What is a unit test? Why should we write unit tests?</strong></p>
                    <p>Answer :   Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff</p>
                    <p>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.</p>
                    <p>Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1. React vs. Angular vs. Vue?</strong></p>
                    <p>Answer :</p>
                    <p>  React:  React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.</p>
                    <p>Vue: The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.</p>
                    <p>Angular: AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.</p>
                </Col>


            </Row>
        </Container>
    );
};

export default Blog;
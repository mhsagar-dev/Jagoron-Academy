import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {
    return (
            <section>
                <Row>
                    <Col md={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col md={7} className="offset-md-1">

                    </Col>
                </Row>
        </section>
    );
};

export default Admin;
import React, { Component } from 'react';
import { Card, Col, Row, style } from 'antd';
import Megha from '../images/megha.jpg';
import AboutMe from './aboutMe'


const { Meta } = Card;

class Profile extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="profile_card">
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                className="profile_img_size"
                                alt="example"
                                src={Megha}
                            />
                        }


                    >
                        <div className="name_size_font">
                            <h1>Megha Rani Thakur</h1>
                        </div>
                    </Card>

                    <Row gutter={16} className="my_skill_text">
                        <Col className="gutter-row" span={8}>
                            <a> <AboutMe title="About Me" /></a>

                        </Col>
                        <Col className="gutter-row" span={8}>
                            <a> <AboutMe title="My Project" /></a>

                        </Col>
                        <Col className="gutter-row" span={8}>
                            <a> <AboutMe title="My Skills" /></a>

                        </Col>

                    </Row>
                </div >
            </>
        );
    }
}

export default Profile;
import React, { FC } from 'react';
import { Row, Col, Typography } from 'antd';

interface Link {
    title: string;
    url?: string;
}

const footerLinks: Link[] = [
    {
        title: 'About',
    },
];

const { Title } = Typography;

const Footer: FC = (): JSX.Element => {
    return (
        <div id="footer">
            <Row>
                <Col xs={{ span: 24 }} lg={{ span: 18, offset: 3 }}>
                    <Row gutter={24}>
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <Title level={2}>React Redux Template</Title>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque voluptates iure, illo veritatis ut dolore corrupti quibusdam explicabo dolores fugit illum debitis sapiente exercitationem nam dolor at culpa praesentium!</p>
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <Title level={2}>Company</Title>
                            <ul>
                                {footerLinks.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
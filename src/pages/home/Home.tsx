import React, { Component } from 'react';
import styles from './Home.module.scss';
import { Row, Col } from 'antd';
import { RouteComponentProps } from 'react-router';
import { AnyAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import MetaComponent from '../../components/meta/MetaComponent';

interface HomeProps extends RouteComponentProps {
    dispatch(args: AnyAction): void;
    data: any;
}

class Home extends Component<HomeProps> {

    componentDidMount = (): void => {
        // to do
    }

    render(): JSX.Element {
        return (
            <>
                <MetaComponent />
                <div className={styles.home}>
                    <Row>
                        <Col lg={{ span: 12, offset: 6 }}>
                            <p>Hello home</p>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default connect()(Home);
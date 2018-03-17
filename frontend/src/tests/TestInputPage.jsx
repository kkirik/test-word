import React from 'react';
import { Steps } from 'antd';

import Form from '../core/components/Form';

const Step = Steps.Step;

class TestInputPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Steps
                    current={1}
                    direction='horizontal'
                    size='small'
                    style={{ position: 'absolute', top: 70, left: 20 }}
                >
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                </Steps>
                <Form test={2} />
            </React.Fragment>
        );
    }
}

export default TestInputPage;
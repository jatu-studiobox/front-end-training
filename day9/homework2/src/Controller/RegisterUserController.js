import React, { Component } from 'react';
import { Form, Input, Row, Col, Button, Tooltip, Icon} from 'antd';

const FormItem = Form.Item;

class RegisterUserController extends Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Row gutter={32}>
                <Col span={12} offset={6} style={{ borderColor: 'black', borderWidth: 1, borderStyle: 'solid' }}>
                    <h1>Registration User</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="Password">
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                },
                                {
                                    min: 6, message: 'Please input at least 6 characters'
                                },
                                {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="Confirm Password">
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: 'Please confirm your password!',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label={(
                            <span>
                                Phone Number&nbsp;
                                <Tooltip title="Ex. 081999999">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}>
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true, message: 'Please input your phone number!',
                                },
                                {
                                    pattern: /(?:^|\W)0[0-9]{9}$/, message: 'Please input valid phone number!'
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">Register</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const WrappedRegisterUser = Form.create()(RegisterUserController)
export default WrappedRegisterUser;
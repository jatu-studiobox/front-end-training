import React, { Component } from 'react';
import { Row, Col, Select, Spin } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Tracker.css';

const Option = Select.Option;

class Tracker extends Component {
    state = {
        loading: true,
        loadingHist : false,
        bpi: {},
        history: {},
        currency: 'USD'
    }

    async componentDidMount() {
        const [bpi, history] = await Promise.all([this.fetchLastestPrice(), this.fetchHistory(this.state.currency)]);
        console.log(history);
        this.setState({
            loading: false,
            bpi, 
            history
        });
        this.timer = setInterval(this.priceUpdater, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    priceUpdater = async () => {
        console.log('update');
        const bpi = await this.fetchLastestPrice();
        this.setState({ bpi });
    }

    fetchLastestPrice = async () => {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const { bpi } = await response.json();
        return bpi;
    }

    fetchHistory = async currency => {
        const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`);
        const { bpi: historyData } = await response.json();
        const arrayData = Object.entries(historyData);
        console.log(arrayData);
        return arrayData.map(h => ({ date: h[0], [currency]: h[1] }));
    }

    handleChange = async value => {
        this.setState({ loadingHist : true, currency: value })
        const history = await this.fetchHistory(value);
        this.setState({
            loadingHist: false,
            history
        });
    }

    render() {
        const { loading, loadingHist, bpi, history, currency } = this.state;
        if (loading) {
            return (
                <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
                    <Col span={1}>
                        <Spin tip="Loading..." />
                    </Col>
                </Row>
            );
        }
        return (
            <div>
                <Row gutter={32}>
                    <Col span={12} offset={6} style={{ backgroundColor: '#fff566' }}>
                        <h1>Bitcoin Price Checker</h1>
                    </Col>
                </Row>
                <Row gutter={32} style={{ paddingTop: 10 }}>
                    <Col span={3} offset={6}>
                        <Select defaultValue={currency} style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="USD">USD</Option>
                            <Option value="GBP">GBP</Option>
                            <Option value="EUR">EUR</Option>
                        </Select>
                    </Col>
                    <Col span={9}>
                        <span style={{ float: 'right', fontSize: 22 }}>Current price: {bpi[currency].rate} {currency}</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6} style={{ background: 10 }}>
                        <Spin spinning={loadingHist}>
                            <LineChart width={650} height={280} data={history}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey={currency} stroke="#82ca9d" />
                            </LineChart>
                        </Spin>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tracker;

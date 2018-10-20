import React, { Component } from 'react';
import { Row, Col, Select, Spin } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Option = Select.Option;

function setStrokeColor(value) {
    let color = "#82ca9d";
    if (value === 'USD')
        color = "red";
    else if (value === 'GBP')
        color = "blue";
    else if (value === 'EUR')
        color = "green";
    return color;
}

class BitCoinTrackerController extends Component {
    state = {
        loading: true,
        loadingHist: false,
        bpi: {},
        history: {},
        colorStroke: setStrokeColor(this.props.match.params.cur),
        currency: this.props.match.params.cur
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('--- getDerivedStateFromProps ---');
        console.log('prevState.currency : ' + prevState.currency);
        console.log('nextProps.match.params.cur : ' + nextProps.match.params.cur);
        if (prevState.currency !== nextProps.match.params.cur) {
            console.log('Set new currency state');
            return { 
                currency : nextProps.match.params.cur,
                colorStroke: setStrokeColor(nextProps.match.params.cur) 
            };
        }
        else {
            console.log('return null');
            return null;
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('--- shouldComponentUpdate ---');
    //     console.log('this.props.currency : ' + this.props.currency);
    //     console.log('nextProps.currency : ' + nextProps.currency);
    //     console.log('nextProps.match.params.cur : ' + nextProps.match.params.cur);
    //     console.log('this.state.currency : ' + this.state.currency);
    //     console.log('nextState.currency : ' + nextState.currency);
    //     if (this.state.currency !== nextState.currency) {
    //         console.log('return true');
    //         return true;
    //     }
    //     else {
    //         console.log('return false');
    //         return false;
    //     }
    // }
    
    async componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('--- componentDidUpdate ---');     
        //console.log('prevProps.currency : ' + prevProps.currency);   
        //console.log('this.props.currency : ' + this.props.currency);
        console.log('prevState.currency : ' + prevState.currency);
        console.log('this.state.currency : ' + this.state.currency);
        if (prevState.currency !== this.state.currency) {
            console.log('Do update !!');
            console.log('By currency : ' + this.state.currency);
            const [bpi, history] = await Promise.all([this.fetchLastestPrice(), this.fetchHistory(this.state.currency)]);
            console.log(history);
            this.setState({
                loading: false,
                bpi,
                history
            });
        }
    }

    async componentDidMount() {
        console.log('--- componentDidMount ---');
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
        console.log('--- componentWillUnmount ---');
        clearInterval(this.timer);
    }

    priceUpdater = async () => {
        console.log('--- update ---');
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
        console.log('--- Handle Select Change ---');
        //this.setState({ loadingHist : true, currency: value })
        this.setState({ loadingHist: true, currency: value, colorStroke: setStrokeColor(value) })
        const history = await this.fetchHistory(value);
        this.setState({
            loadingHist: false,
            history
        });
    }

    render() {
        const { loading, loadingHist, bpi, history, currency, colorStroke } = this.state;
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
            <div style={{ marginTop: 10 }}>
                <Row gutter={32}>
                    <Col span={12} offset={6} style={{ backgroundColor: '#fff566' }}>
                        <h1>Bitcoin Price Checker</h1>
                    </Col>
                </Row>
                <Row gutter={32} style={{ paddingTop: 10 }}>
                    <Col span={3} offset={6}>
                        <Select value={currency} defaultValue={currency} style={{ width: 120 }} onChange={this.handleChange}>
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
                                <Line type="monotone" dataKey={currency} stroke={colorStroke} />
                            </LineChart>
                        </Spin>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BitCoinTrackerController;

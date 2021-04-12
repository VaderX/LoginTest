import React from 'react';
import axios from 'axios';
import { Container, Input, InputGroup, InputGroupAddon, InputGroupText, Spinner } from 'reactstrap';

import Result from './../Result/Result';

class Search extends React.Component {

    state = {
        domain: '',
        showData: false,
        data: '',
        load: false,
        showError: false,
    }
    searchBox(event) {
        this.setState({
            domain: event.target.value,
        }, () => {
            if (event.key === 'Enter')
                this.searchHandler()
        })
    }
    searchHandler() {
        this.setState({
            load: true,
        })
        const url = "https://subbuster.cyberxplore.com/api/find?domain=" + this.state.domain;
        axios.get(url).then(res => {
            this.setState(() => {
                return {
                    data: res.data,
                    showData: true,
                    load: false,
                    showError: false,
                }
            })
        }).catch(err => {
            this.setState({
                showData: false,
                load: false,
                showError: true,
            })
        })
    }
    render() {
        return (
            <Container>
                <InputGroup className="SearchContainer">
                    <Input className="Search" placeholder="Enter the Domain" onKeyPress={this.searchBox.bind(this)} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText onClick={this.searchHandler.bind(this)}>
                            <i className="fas fa-search"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                {this.state.load ? <div className="mt-3">
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                </div> : null}
                {this.state.showData ? <Result data={this.state.data} /> : null}
                {this.state.showError ? <div>Too many requests.... Try after a minute</div> : null}
            </Container>

        )
    }
}

export default Search;
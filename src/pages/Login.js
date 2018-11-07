import React, { Component } from 'react';
import './Login.css';
import twitterlogo from '../twitter.svg';

export default class Login extends Component {
    //Toda vez q o state muda, o componente atualiza DOM (executa o render)
    state = {
        username: '',
    };

    handleInputChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username } = this.state;    
        
        if(!username.length) return ;

        localStorage.setItem('@GOTwitter:username', username);

        this.props.history.push('/timeline');
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterlogo} alt="Go Twitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Nome de usuário"
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
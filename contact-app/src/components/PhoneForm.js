import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name : '',
        phone : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); //원래 해야하던 작업을 하지 않게 방지해주ㅁ
        this.props.onCreate(this.state);// onCreate 함수 호출
        this.setState({
            name : '',
            phone : '',
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}> {/*눌러도 새로고침이 되지 않도록*/}
                <input name = 'name' placeholder='이름' onChange={this.handleChange} value={this.state.name}/>
                <input name = 'phone' placeholder='전화번호' onChange={this.handleChange} value={this.state.phone}/>
                <button type = "submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;
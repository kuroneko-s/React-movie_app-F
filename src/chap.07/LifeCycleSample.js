import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정

  constructor(props) {
    super(props);
    console.log('call constructor');
  }

  // state와 props를 동기화 ( 렌더링, 업데이트 시 호출 )
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      console.log('props - ', nextProps.color);
      console.log('color - ', prevState.color);
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // 리렌더링을 결정하는 메서드
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // render() 후 DOM에 반영되기 전에
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 전 색상 - ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = { color: this.props.color };
    return (
      <div>
        {this.state.data.missing}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

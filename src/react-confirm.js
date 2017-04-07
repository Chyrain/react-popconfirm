import React from 'react';
import ReactDOM from 'react-dom';

const confirmable = (Component) => class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
    }
  }
  dismiss() {
    this.setState({
      show: false,
    }, () => {
      this.props.dispose();
    });
  }
  cancel(value) {
    this.setState({
      show: false,
    }, () => {
      this.props.reject(value);
    });
  }
  proceed(value) {
    this.setState({
      show: false,
    }, () => {
      this.props.resolve(value);
    });
  }
  render() {
    return <Component proceed={::this.proceed} cancel={::this.cancel} dismiss={::this.dismiss} show={this.state.show} {...this.props}/>
  }
}

const createConfirmation = (Component) => {
  return (props) => {
    var container = document.getElementById('confirm-container');
    const wrapper = document.body.appendChild(container || document.createElement('div'));
    wrapper.id = 'confirm-container';

    const promise = new Promise((resolve, reject) => {
      try {
        ReactDOM.render(
          <Component
            reject={reject}
            resolve={resolve}
            dispose={dispose}
            {...props}
          />,
          wrapper
        );
      } catch (e) {
        console.error(e);
        throw e;
      }
    })

    function dispose() {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(wrapper);
        setTimeout(() => wrapper.remove());
      }, 1);
    }

    return promise.then((result) => {
      dispose();
      return result;
    }, (result) => {
      dispose();
      return Promise.reject(result);
    });
  }
}

export { confirmable, createConfirmation };
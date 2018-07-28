import React, { Component, Fragment } from 'react'

export {
  LoginModalContext,
  LoginModalWrapper
}

const LoginModalContext = React.createContext({
  open: false,
  value: 1,
  slideIndex: 0,
  registerType : 0,
  REGISTER_TYPES : [],
  toggleModal: () => {},
  handleTabChange: () => {},
  handleModalOpen: () => {},
  changeRegisterType: () => {},
});

class LoginModalWrapper extends Component {
  constructor(props){
    super(props)
    this.toggleModal= this.toggleModal.bind(this);
    this.handleTabChange= this.handleTabChange.bind(this);
    this.handleModalOpen= this.handleModalOpen.bind(this);
    this.changeRegisterType = this.changeRegisterType.bind(this);

    this.state = {
      open: this.props.showSignIn || false,
      value: 1,
      slideIndex: 0,
      registerType : 0,
      // REGISTER_TYPES : ['Candidate' , 'Institution', 'Career Adviser'],
      REGISTER_TYPES : ['Candidate' , 'Employer'],
      toggleModal: this.toggleModal,
      handleTabChange: this.handleTabChange,
      handleModalOpen: this.handleModalOpen,
      changeRegisterType: this.changeRegisterType,
    };
  }

  handleTabChange = (value) => {
    this.setState({slideIndex: value});
  };

  handleModalOpen = () => {
    this.setState({open: true});
  };

  toggleModal = () => {
    this.setState({open: !this.state.open});
  };

  changeRegisterType = (event, index, value) => this.setState({registerType: value});


  render() {
    return <Fragment>
      <LoginModalContext.Provider value={this.state}>
        {this.props.children}
      </LoginModalContext.Provider>
    </Fragment>;
  }
}

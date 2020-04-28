import React from "react";

class DeleteButton extends React.Component {
  deleteButtonClickHandler = () => {
    const { slug } = this.props.session;
    this.props.handleSessionDeletionReport(slug);
  };

  render() {
    return (
      <button className="btn btn-outline-danger session-card-button">
        {this.props.children}
      </button>
    );
  }
}

export default DeleteButton;

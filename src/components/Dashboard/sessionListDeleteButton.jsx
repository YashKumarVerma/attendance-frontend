import React from "react";
import { DeleteSession } from "../../scripts/session";

class DeleteButton extends React.Component {
  deleteButtonClickHandler = () => {
    const { slug } = this.props.session;

    DeleteSession(slug)
      .then(() => this.props.handleSessionDeletionReport(slug))
      .catch((error) => console.log("Error while Deleting Session", error));
  };

  render() {
    return (
      <button
        className="btn btn-outline-danger session-card-button"
        onClick={this.deleteButtonClickHandler}
      >
        {this.props.children}
      </button>
    );
  }
}

export default DeleteButton;

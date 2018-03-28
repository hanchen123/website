import React from "react";
import PropTypes from "prop-types";

class SubPortfolio extends React.PureComponent {
  render() {
    const {
      match
    } = this.props;

    return (
      <div>SubPortfolio: {match.params.id}</div>
    );
  }
}

SubPortfolio.propTypes = {
  match: PropTypes.object
};

export default SubPortfolio;
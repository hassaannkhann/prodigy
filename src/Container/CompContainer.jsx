import React from "react";
import Header from "../Components/Header/Header";


class CompContainer extends React.Component {
    render() {
      return <div><Header />{props.children}</div>;
    }
}

export default CompContainer;
import { Component } from "react";

import ApiDataItem from "../ApiDataItem";

class ApiDataList extends Component {
  state = {
    apiData: [],
  };
  componentDidMount() {
    this.getApiData();
  }
  getApiData = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    this.setState({ apiData: data.results });
    this.setState({ apiData: data.info });
  };
  render() {
    const { apiData } = this.state;
    return (
      <>
        {apiData.map((eachItem) => (
          <ApiDataItem apiDetails={eachItem} />
        ))}
      </>
    );
  }
}

export default ApiDataList;

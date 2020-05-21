import React, { Component } from 'react';
import { Empty } from 'antd';

class EmptyData extends Component {
  render() {
    return (
      <Empty description="không có phim cần tìm" />
    );
  }
}

export default EmptyData;
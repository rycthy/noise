import React from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

export class P5Wrapper extends React.Component {

  componentDidMount() {
    const { sketch, ...rest } = this.props;
    this.canvas = new p5(sketch(rest), this.wrapper);
  }

  componentWillReceiveProps(newProps) {
    const { sketch, ...rest } = newProps;

    if (this.props.sketch !== newProps.sketch) {
      this.canvas.remove();
      this.canvas = new p5(newProps.sketch(rest), this.wrapper);
    }

    if (typeof this.canvas.onNewProps === "function") {
      this.canvas.onNewProps(newProps);
    }
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return <div id="sketch" ref={(wrapper) => this.wrapper = wrapper} />;
  }
}
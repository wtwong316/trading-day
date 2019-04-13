import React, { useContext } from "react";
import * as d3 from "d3";
import { withScreenSize } from "@vx/vx";
import { Segment } from "semantic-ui-react";

const width = 1600,
  height = 900;

/*FORCE LAYOUT SIMULATION*/
var simulation = d3
  .forceSimulation()
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("charge", d3.forceManyBody().strength(-2))
  .force("collide", d3.forceCollide(1.1))
  .stop();
class MarketForces extends React.Component {
  state = {
    svgRef: React.createRef()
  };

  componentWillMount() {
    this.container = d3.select(this.state.svgRef.Current);
    this.renderCircles();
    simulation.on("tick", this.forceTick);
  }

  componentDidMount() {
    this.getData();
    this.renderCircles();
  }

  componentDidUpdate() {
    simulation
      .nodes(this.state.data)
      .alpha(1)
      .restart();
    this.renderCircles();
  }

  renderCircles() {
    const circles = this.container
      .selectAll("circle")
      .data(this.state.data, data => data.symbol);

    // exit
    circles.exit().remove();
    // enter+update
    this.circles = circles
      .enter()
      .append("circle")
      .attr("r", d => this.state.marketCapScale(d["Market Cap"]))
      .attr("opacity", 0.5)
      .attr("fill", d => this.state.sectorScale(d.Sector));
  }
  forceTick = () => {
    this.circles.attr("cx", d => d.x).attr("cy", d => d.y);
  };

  getData = async () => {
    const sp500 = await d3.json(
      `https://cors-anywhere.herokuapp.com/datahub.io/core/s-and-p-500-companies-financials/r/constituents-financials.json`
    );

    this.setState({
      data: sp500,
      sectorScale: d3
        .scaleOrdinal()
        .domain([...new Set(sp500.map(item => item.Sector))])
        .range([...d3.schemeCategory10]),
      marketCapScale: d3
        .scaleLinear()
        .domain(d3.extent(sp500, d => d["Market Cap"]))
        .range([1, 50])
    });
  };

  render() {
    return this.state.data ? (
      <svg ref={this.state.svgRef} height={height} width={width} />
    ) : null;
  }
}

export default MarketForces;

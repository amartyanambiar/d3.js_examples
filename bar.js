const data = [
  { fruit: "apples", count: 20 },
  { fruit: "bananas", count: 15 },
  { fruit: "oranges", count: 10 },
  { fruit: "grapes", count: 26 },
  { fruit: "pineapple", count: 22 },
  { fruit: "guava", count: 12 },
];
const width = 800;
const height = 500;
var originalText = d3.select("#data").text();
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "#000");

const xScale = d3
  .scaleBand()
  .domain(data.map((d) => d.fruit))
  .range([0, width])
  .padding(0.2);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.count)])
  .range([height, 0]);

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("id", (d) => d.fruit)
  .attr("x", (d) => xScale(d.fruit))
  .attr("y", (d) => yScale(d.count))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => height - yScale(d.count))
  .attr("fill", "steelblue")
  .on("mouseover", (d) => {
    console.log(d.target.__data__.fruit, d.target.__data__.count);
    d3.select(`#${d.target.id}`).attr("fill", "red");
    console.log(d.target.id);
    d3.select("#data")

      .style("font-size", "15px")
      .style("font-weight", "bold")
      .style("text-transform", "uppercase")
      .text(d.target.__data__.fruit + " : " + d.target.__data__.count);
  })

  .on("mouseout", (d) => {
    d3.select(`#${d.target.id}`).attr("fill", "steelblue");
    d3.select("#data").text(originalText);
  });

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

svg.append("g").call(yAxis);

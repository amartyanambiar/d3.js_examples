var svg = d3.select("svg");
for (var k = 1; k < 20; k += 1) {
  for (var i = 1; i < 20; i += 1) {
    svg
      .append("circle")
      .attr("id", "circle" + (i + 1) * 2 + k + "a")
      .attr("class", "circles")
      .attr("cx", 50 + 17 * i)
      .attr("cy", k * 15)
      .attr("r", 8)

      .style("fill", "red")
      .on("mouseover touchstart touchmove", (d) => {
        console.log(`#${d.target.id}`);
        d3.select(`#${d.target.id}`).style("fill", "blue");
      });
  }
}
d3.selectAll(".circles").on("click", (d) => {
  console.log(d.target.id);
  var randomnumber = Math.floor(Math.random() * 16777215).toString(16); // bing power
  d3.select(`#${d.target.id}`).style("fill", `#${randomnumber}`);
});
d3.select("button").on("click", (d) => {
  if (d3.selectAll(".circles").style("fill") == "blue") {
    console.log("Succes");
  }
  d3.selectAll(".circles").style("fill", "red");
});

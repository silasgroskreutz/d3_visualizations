const data = [{ width: 200, height: 400, fill: 'red' }];

const svg = d3.select('svg');

const rect = svg
  .select('rect')
  .data(data)
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

//watch what you are binding 'this' with arrow functions

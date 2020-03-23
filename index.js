const data = [{ width: 200, height: 400, fill: 'red' }];

const svg = d3.select('svg');

const rect = svg
  .select('rect')
  .data(data)
  .attr('width', function(d, i, n) {
    console.log(i);
    console.log(n);
    return d.width;
  })
  .attr('height', function(d) {
    return d.height;
  })
  .attr('fill', function(d) {
    return d.fill;
  });

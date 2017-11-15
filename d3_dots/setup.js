svg = {}

setup = () => {
  var gradientId = 'gradient_id'
  var circlesId  = 'circles_id'
  var gradientSteps = 72
  var gradientStep = 360/gradientSteps
  var gradientData = Array(gradientSteps).fill(gradientStep).map((e,i)=>e*i)

  svg = d3
  .select('#svg')
  .append('svg')

  svg
  .attr('width' , '100%')
  .attr('height', '100%')
  .attr ('viewBox','-1 -1 2 2')

  var gradient = svg
  .append('radialGradient')
  .attr( 'id', gradientId)
  .attr( 'cx', '0')
  .attr( 'cy', '0')
  .attr( 'r' , '50%')
  .attr('gradientUnits', 'userSpaceOnUse')

  gradient
  .selectAll('stop')
  .data(gradientData)
  .enter()
  .append('stop')
  .attr( 'offset', (d,i)=> i / gradientSteps)
  .attr( 'no_real_attribute', function (d) {
    this.animate(
      // frames
      (()=>
      gradientData.map(
        (_,i)=>({'stopColor': 'hsl(' + (d - i * gradientStep)  + ', 100%, 50%)'})
      )
      )(),
      // end frames
      {
        duration: 3000,
        iterations: Infinity
    })
  })

  svg
  .append('circle')
  .attr('r', '50%')
  .attr( 'fill'    , 'url(#' + gradientId + ')')
  .attr('clip-path', 'url(#' + circlesId  + ')')

  svg = svg
  .append('clipPath')
  .attr('id', circlesId)

///*
  svg
  .append('animateTransform')
  .attr('attributeType', 'xml')
  .attr("attributeName", "transform")
  .attr("type", "rotate")
  .attr("repeatCount", "indefinite")
  .attr("dur", '40s')
  .attr("from", "0   0 0")
  .attr("to"  , "360 0 0")
//*/
}

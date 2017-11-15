loop = () => {

var data = generateData (parameters.rounds, parameters.degr || 1)



var circle = svg
.selectAll('circle')
.data(data)

circle
.enter()
.append('circle')

circle
.exit()
.remove()

circle
//.attr('transform', d => 'rotate(' + d.angle + ')')
.attr('r'        , d => d.fragment * 1  + '%')
.attr('cx'       , d => d.fragment * 50 + '%' )

///*
circle
.append('animateTransform')
.attr('attributeType', 'xml')
.attr("attributeName", "transform")
.attr("type", "rotate")
.attr("repeatCount", "indefinite")
.attr("dur", '10s')
//.attr("from", d => d.angle - d.fragment*100)
//.attr("to"  , d => d.angle + d.fragment*100)
.attr("values", d =>
(d.angle - d.fragment*100) + ';' +
(d.angle + d.fragment*100) + ';' +
(d.angle - d.fragment*100)
)
/*
circle
.append('animateTransform')
.attr('attributeType', 'xml')
.attr("attributeName", "transform")
.attr("type", "rotate")
//.attr("repeatCount", "indefinite")
.attr("begin", '5s')
.attr("dur", '5s')
.attr("from", d => d.angle + d.fragment*100)
.attr("to"  , d => d.angle - d.fragment*100)

//*/
}//

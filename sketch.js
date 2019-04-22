//TENNIS BAR GRAPH

var chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'x',
    columns: [ //the 'x' is how I wrote the coordinates on the x axis 
      ['x', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
      ['wimbledon_women', .43, .4625, .486, .535, .5605, .600, .625, .700, .750, .850, 1, 1.1, 1.15, 1.6, 1.76, 1.88]
    ],
      type: 'bar'
  },
  bar: {
    // or
    width: 25 // this makes bar width 100px
  },
  axis: { //labeling the axis
    x: {
      label: 'Years'
    },
    y: {
      label: 'Wimbledon Championship Prize in Millions of Dollars'
    }
  }

});

setTimeout(function () { //this makes the men's data come up second
  chart.load({
    columns: [
      ['wimbledon_men', .4775, .500, .525, .575, .6025, .630, .655, .70, .75, .85, 1.00, 1.10, 1.15, 1.60, 1.76, 1.88]
    ]
  })
}, 1000);


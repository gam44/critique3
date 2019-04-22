//SOCCER BAR GRAPH
var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      x: 'x',
      columns: [ //the 'x' is how I wrote the coordinates on the x axis 
        ['x', '2015', '2016', '2017', '2018'],
        ['NWSL_salarycap', .265, .278, .30, .315]
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
        label: 'Salary Cap in Millions of Dollars'
      }
    }
  });
  
  setTimeout(function () { //this makes the men's data come up second
    chart2.load({
      columns: [
        ['MLS_salarycap', 3.49, 3.66, 3.845, 4.035]
      ]
    })
  }, 1000);
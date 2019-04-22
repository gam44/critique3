//BASKETBALL BAR GRAPH
var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
      x: 'x',
      columns: [ //the 'x' is how I wrote the coordinates on the x axis 
        ['x', '2014', '2015', '2016', '2017', '2018'],
        ['WNBA_salarycap', .1075, .1095, .1115, .1135, .1155]
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
    chart3.load({
      columns: [
        ['NBA_salarycap', 63.065, 70, 94.143999, 99.093000, 99.093000]
      ]
    })
  }, 1000);

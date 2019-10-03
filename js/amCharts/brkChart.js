am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("brkChartdiv", am4plugins_forceDirected.ForceDirectedTree);
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    
    chart.data = [
      {
        name: "Berkshire Hathaway",
        children: [
          {
            name: "Insurance",
            children: [
              { name: "Geico", value: 100 },
              { name: "Reinsurance", value: 60 },
              { name: "Re-reinsurance", value: 60 }
            ]
          },
          {
            name: "Equities",
            children: [
              { name: "Apple", value: 26 },
              { name: "Amazon", value: 24 },
              { name: "Visa", value: 18 },
              { name: "JPMorgan Chase", value: 15 },
              { name: "Johnson & Johnson", value: 14 },
              { name: "Proctor Gamble", value: 13 },
              { name: "Mastercard", value: 10 },
              { name: "Bank of America", value: 10 },
              { name: "Coca Cola", value: 10 },
              { name: "Wells Fargo", value: 10 },
              { name: "Costco", value: 10 },
              { name: "UPS", value: 9.8 },
              { name: "American Express", value: 9.7 },
              { name: "Charter Communications", value: 9.4 },
              { name: "US Bancorp", value: 9.3 },
              { name: "Mondelez International", value: 8.6 }
            ]
          },
          {
            name: "Subsidiaries",
            children: [
              {
                name: "Midamerican Energy",
                children: [
                  { name: "EE1", value: 130 },
                  { name: "EE2", value: 87 },
                  { name: "EE3", value: 55 }
                ]
              },
              { name: "See's Candies", value: 148 },
              {
                name: "C3", children: [
                  { name: "CC1", value: 53 },
                  { name: "CC2", value: 30 }
                ]
              },
              { name: "Burlington Northern", value: 26 }
            ]
          },
          {
            name: "Fourth",
            children: [
              { name: "D1", value: 415 },
              { name: "D2", value: 148 },
              { name: "D3", value: 89 }
            ]
          },
          {
            name: "Fifth",
            children: [
              {
                name: "E1",
                children: [
                  { name: "EE1", value: 33 },
                  { name: "EE2", value: 40 },
                  { name: "EE3", value: 89 }
                ]
              },
              {
                name: "E2",
                value: 148
              }
            ]
          }
    
        ]
      }
    ];
    
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.children = "children";
    networkSeries.nodes.template.tooltipText = "{name}:{value}";
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.manyBodyStrength = -20;
    networkSeries.links.template.strength = 0.8;
    networkSeries.minRadius = am4core.percent(2);
    
    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 10;
    
    }); // end am4core.ready()
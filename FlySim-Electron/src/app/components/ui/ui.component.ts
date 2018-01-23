import { Component, OnInit, ElementRef, AsyncPipe } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent implements OnInit {
  constructor() {

  }


  ngOnInit() {
    //show ats pane instead of horizon for ats (use ats query parameter)
    var isATS = /ats/.test(window.location.search);
    // document.querySelector('.ats').style.display = (isATS ? 'flex' : 'none');
    // document.querySelector('.horizon').style.display = (isATS ? 'none' : 'grid');

    //build the ats chart
    if(isATS) {
        this.buildChart();
    }
  }

  buildChart() {
  //   var ctx = document.getElementById("ats-chart").getContext('2d');
  //   var myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ["Plane 1", "Plane 2", "Plane 3"],
  //       datasets: [{
  //         label: 'Altitude',
  //         data: [12, 19, 3],
  //         backgroundColor: ['white', 'white', 'white']
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   })
  }
}

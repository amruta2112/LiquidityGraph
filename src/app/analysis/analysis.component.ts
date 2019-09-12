import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";

  @Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.css']
  })
 
  export class AnalysisComponent implements OnInit {
    // currencies: Currency[];
    // selectedCurrency: Currency;

    data1: any;
    data2: any;
    data3: any;

    ngOnInit() { }
      constructor(private messageService: MessageService) {

        // this.currencies = [
        //     {name: 'USD Transaction Analysis'},
        //     {name: 'EUR Transaction Analysis'},
        //     {name: 'GBP Transaction Analysis'}
        // ]

        this.data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'USD Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        }

        this.data2 = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'EUR Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#4bc0c0'
              }
          ]
      }

      this.data3 = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'GBP Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#4bc0c0'
              }
          ]
      }

    }
   
    selectData(event) {
        this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data1.datasets[event.element._datasetIndex].data[event.element._index]});
        this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data2.datasets[event.element._datasetIndex].data[event.element._index]});
        this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data3.datasets[event.element._datasetIndex].data[event.element._index]});
    
      }
          
      }

    // interface Currency {
    //     name : string;
    // }
import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 12781, name: 'Brandon', weight: 'SAGB990213HNLRNR06', symbol: 8211110434},
  {position: 12762, name: 'Jonathan', weight: 'COPJ040126HVZRRNA4', symbol: 8287686734},
  {position: 12780, name: 'Yeretzi', weight: 'SAVY040926MNLNZRA0', symbol: 5628414013},
  {position: 12772, name: 'Alejandra', weight: 'LUZA010301MNLCXLA2', symbol: 8212116688},
  {position: 12753, name: 'Carlos Alberto', weight: 'AAMC041101HNLLNRA0', symbol: 8443107971},
  {position: 12752, name: 'Karen', weight: 'AAMK030619MNLLRRB6', symbol: 8211066839},
  {position: 12781, name: 'Brandon', weight: 'SAGB990213HNLRNR06', symbol: 8211110434},
];


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})

export class TablaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}

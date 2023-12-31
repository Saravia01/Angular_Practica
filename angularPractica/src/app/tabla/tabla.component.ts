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
  {position: 12755, name: 'Gustavo', weight: 'BORG040523HNLRMSA7', symbol: 8211202886},
  {position: 12761, name: 'Carlos', weight: 'COLC010315HCHRPRA2', symbol: 6761141373},
  {position: 12763, name: 'Bryan', weight: 'ROMB041124HNLSDRA9', symbol: 8211028403},
  {position: 12765, name: 'Jose Manuel', weight: 'FUIM050817HNLNRNA0', symbol: 6761141373},
  {position: 12782, name: 'José Reynaldo', weight: 'SIGR040605HNLLRYA8', symbol: 8135585770},
  
];


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})


export class TablaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  openPopup() {

    const popupWindow = window.open('', '_blank', 'width=500,height=500');
    
    if (popupWindow) {
  
      const popupContent = `
        <html>
        <head>
          <title>Ventana Emergente</title>
        </head>
        <body style="background-color: #16A45B;">
          <h2>Insertar Datos del Alumno</h2>
          <form>
            <input type="text" class="txt" placeholder="Nombre">
            <br><br>
            <input type="text" class="txt" placeholder="Matricula">
            <br><br>
            <input type="text" class="txt" placeholder="Curp">
            <br><br>
            <input type="number" class="txt" placeholder="Telefono">
            <br><br>
            <button type="submit" class="center">Enviar Formulario</button>
          </form>
          <style>
          .txt{
            height: 35px;
            width: 100%;
          }
          .center{
            position: relative;
            left:calc(50% - 64px);
         }
          </style>
        </body>
        </html>
      `;
  
      popupWindow.document.open();
      popupWindow.document.write(popupContent);
      popupWindow.document.close();
    } else {
  
      console.error('No se pudo abrir la ventana emergente.');
      }
    }
}



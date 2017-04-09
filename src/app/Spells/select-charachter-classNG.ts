import {Component ,  EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: 'app/Spells/select-charachter-classNG.html',
   styleUrls: [ 'app/Spells/select-charachter-classNG.css' ]
})
export class SelectCharactherClassNG  {
  selected: string;
  open: boolean;
  counter = 0;
  buttonToggle = 0;
  buttonOpen = 0;

  items = [
    { value: 'cleric' , name: 'Cleric'},
    { value: 'wiz',     name: 'Wizard'},
    { value: 'sor' ,     name: 'Sorcer'},
  ];

  onToggle($event: Event) {
    $event.stopPropagation();
    this.open = true;
  }

  onVoted($event: Event) {
    this.counter++;
  }

  onClickOpen($event: Event) {
    this.buttonOpen++;
  }

  onClickToggle($event: Event) {
    this.buttonToggle++;
  }
}


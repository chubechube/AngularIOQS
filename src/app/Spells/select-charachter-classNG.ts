import {Component} from '@angular/core';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: 'app/Spells/select-charachter-classNG.html',
})
export class SelectCharactherClassNG  {
  selected: string;
  open: boolean;

  items = [
    { value: 'cleric' , name: 'Cleric'},
    { value: 'wiz',     name: 'Wizard'},
    { value: 'sor' ,     name: 'Sorcer'},
  ];

  onToggle($event: Event) {
    $event.stopPropagation();
    this.open = true;
  }
}


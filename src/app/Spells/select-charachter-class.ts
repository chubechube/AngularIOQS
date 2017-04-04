import {Component} from '@angular/core';


@Component({
  selector: 'select-charachter-class',
  templateUrl: 'app/Spells/select-charachter-class.html',
})
export class SelectCharactherClass {
  classUsers = [
    {value: 'cleric', viewValue: 'cleric'},
    {value: 'sor', viewValue: 'sor'},
    {value: 'wiz', viewValue: 'wiz'}
  ];
}
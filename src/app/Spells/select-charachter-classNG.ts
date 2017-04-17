import { Component ,  EventEmitter, Input, Output} from '@angular/core';
import { SpellsService } from './SpellsService';
import { Spell         } from './Spell';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: 'app/Spells/select-charachter-classNG.html',
   styleUrls: [ 'app/Spells/select-charachter-classNG.css' ]
})
export class SelectCharactherClassNG  {
    errorMessage: string;
    spells: Spell[];
    mode = 'Observable';
    selectedRow : Number;
    setClickedRow : Function;
    selectedSpell : String;
    imagePath = "/assets/button_cleric.gif";

  constructor(
    private spellsService: SpellsService) { 

      this.setClickedRow = function(index : Number){
            this.selectedRow = index;
        }
    }
   
  selected: string;
  open: boolean;
  counter = 0;
  buttonToggle = 0;
  buttonOpen = 0;
  apiSpells =" Vuoto ";

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

  callSpell($event: Event){
    
  }

  getSpells() {
    this.spellsService.getSpellSub()
                     .subscribe(
                       spells => this.spells = spells,
                       error =>  this.errorMessage = <any>error);
  }

  

  

}


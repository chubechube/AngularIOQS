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

  
  getSpells(event : any) {
    console.log(event); 
    console.log(event.target.attributes.id.value); 
    this.spellsService.getSpellSub("cleric",event.target.attributes.id.value)
                     .subscribe(
                       spells => this.spells = spells,
                       error =>  this.errorMessage = <any>error);
                       
}

  

  

}


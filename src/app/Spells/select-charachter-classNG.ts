import { Component ,  EventEmitter, Input, Output} from '@angular/core';
import { SpellsService } from '../Services/SpellsService';
import { Spell         } from './Spell';


@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: 'app/Spells/select-charachter-classNG.html',
   styleUrls: [ 'app/Spells/select-charachter-classNG.css' ]
})
export class SelectCharactherClassNG  {
    status:{isopen:boolean} = {isopen: false};
 
  
 
    dropdownMenu($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    mode = 'Observable';
    errorMessage      : String;
    spells            : Spell[];
    selectedRow       : Number;
    setClickedRow     : Function;
    setSelectedClass  : Function ;
    selectedSpell     : String;
    selectedClass  = {name : "Select a Class" , value : "Select a Class"};
    getSelectedClass  : Function;
  

  constructor(
    private spellsService: SpellsService) { 

      this.setClickedRow = function(index : Number){
            this.selectedRow = index;
        }

      this.setSelectedClass = function(classSeleceted : any){
            this.selectedClass = classSeleceted;
            console.log("CLASSE " + this.selectedClass);
        }

        this.getSelectedClass = function(){
          return this.selectedClass.name;
        }
    }
   
  
  open: boolean;
  
   classes = [
    { value: 'cleric'       , name: 'Cleric'},
    { value: 'wiz'          , name: 'Wizard'},
    { value: 'sor'          , name: 'Sorcer'},
    { value: 'shaman'       , name: 'Shaman'},
    { value: 'oracle'       , name: 'Oracle'},      
    { value: 'druid'        , name: 'Druid'},
    { value: 'ranger'       , name: 'Ranger'},
    { value: 'magus'        , name: 'Magus'},
    { value: 'antipaladin'  , name: 'Antipaladin'},
    { value: 'inquisitor'   , name: 'Inquisitor'},
    { value: 'summoner'     , name: 'Summonrer'},
    { value: 'paladin'      , name: 'Paladin'},
    { value: 'alchemist'    , name: 'Alchemist'},
    { value: 'bloodrager'   , name: 'Bloodrager'},
    { value: 'psychic'      , name: 'Psychic'},
    { value: 'medium'       , name: 'Medium'},
    { value: 'mesmerist'    , name: 'Mesmerist'},
    { value: 'occultist'    , name: 'Occultist'},
    { value: 'spiritualist' , name: 'Spiritualist'},
    { value: 'skald'        , name: 'Skald'},
    { value: 'investigator' , name: 'Investigartor'},
    { value: 'hunter'       , name: 'Hunter'},
    { value: 'bard'         , name: 'Bard'}

  ];

  
  getSpells(event : any) {
    console.log("QUERY " +this.selectedClass.value + " " +event.target.attributes.id.value); 
    this.spellsService.getSpellSub(this.selectedClass.value,event.target.attributes.id.value)
                     .subscribe(
                       spells => this.spells = spells,
                       error =>  this.errorMessage = <any>error);
                       
}

  

  

}


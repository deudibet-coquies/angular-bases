import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character-interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewChatacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  }


  emitCharacter():void{
    console.log('este es mi objeto',this.character);
    if(this.character.name.length === 0) return;
    this.onNewChatacter.emit({...this.character});
    this.character.name = "";
    this.character.power = 0;
  }

}

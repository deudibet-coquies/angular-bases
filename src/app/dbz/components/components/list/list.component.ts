import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  @Input()
  public CharacterList: Character[] = [{
    name: "Trunks",
    power: 5000
  }];


  onDeleteCharacter(id?:string):void{
    if (!id) return 
    this.onDelete.emit(id);
  }



}

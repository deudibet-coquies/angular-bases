import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character-interface';
import { v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 500
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegueta",
      power: 7500
  }];

  addCharacter(character:Character):void{  
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter(id:string):void{
  //   console.log('asi llega a el servicio',id);
  //   this.characters.filter(character.id,1)
  // }

  deleteCharacterById(id:string):void{
   this.characters = this.characters.filter(character => character.id != id)
  }

}

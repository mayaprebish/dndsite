import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-orderer',
  templateUrl: './init-orderer.component.html',
  styleUrls: ['./init-orderer.component.css']
})
export class InitOrdererComponent implements OnInit {
  characters = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCharacter(c: string, r: number, m: number) {
    this.characters.push([c, r, m]);
    this.characters.sort((char1, char2) => {

      if (char2[1] - char1[1] == 0) {
        return (char2[2] - char1[2]);
      }
      return char2[1] - char1[1];
    });
  }

  clearCharacters() {
    this.characters = [];
  }

}

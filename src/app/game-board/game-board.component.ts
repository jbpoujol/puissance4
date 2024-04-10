import { Component } from '@angular/core';
import { GameLogicService } from '../game-logic.service';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgClass],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  board$ = this.gaemLogic.getBoardObservable();

  constructor(private gaemLogic: GameLogicService) {}

  addToken(col: number): void {
    this.gaemLogic.addToken(col);
  }
}

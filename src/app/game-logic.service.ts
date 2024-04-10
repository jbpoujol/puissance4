import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  private rows = 6;
  private cols = 7;
  private currentPlayer = new BehaviorSubject<string>('Red');
  private board = new BehaviorSubject<string[][]>(this.createInitialBoard());

  createInitialBoard(): string[][] {
    return Array(this.rows)
      .fill(null)
      .map(() => Array(this.cols).fill(null));
  }

  initializeGame(): void {
    this.board.next(this.createInitialBoard());
  }

  getBoardObservable(): Observable<string[][]> {
    return this.board.asObservable();
  }

  getCurrentPlayerObservable(): Observable<string> {
    return this.currentPlayer.asObservable();
  }

  getCurrentPlayer(): string {
    return this.currentPlayer.value;
  }

  addToken(colIndex: number): void {
    const currentBoard = this.board.value;
    for (let i = this.rows - 1; i >= 0; i--) {
      if (!currentBoard[i][colIndex]) {
        currentBoard[i][colIndex] = this.currentPlayer.value;
        this.board.next(currentBoard);
        if (this.checkforWin(i, colIndex)) {
          timer(200)
            .pipe(take(1))
            .subscribe(() => {
              alert(`${this.currentPlayer.value} wins !`);
              this.initializeGame();
            });
        } else if (this.isBoardFull()) {
          timer(200)
            .pipe(take(1))
            .subscribe(() => {
              alert("It's a draw !");
              this.initializeGame();
            });
        } else {
          this.switchPlaer();
        }
        break;
      }
    }
  }

  private switchPlaer(): void {
    const nextPlayer = this.currentPlayer.value === 'Red' ? 'Yellow' : 'Red';
    this.currentPlayer.next(nextPlayer);
  }

  checkforWin(row: number, col: number): boolean {
    return (
      this.checkHorizontalWin(row) ||
      this.checkVerticalWin(col) ||
      this.checkDiagonalRightWin(row, col) ||
      this.checkDiagonalLeftWin(row, col)
    );
  }

  private checkHorizontalWin(row: number): boolean {
    let count = 0;
    const currentBoard = this.board.value;
    const currentPlayer = this.currentPlayer.value;
    for (let j = 0; j < this.cols; j++) {
      count = currentBoard[row][j] === currentPlayer ? count + 1 : 0;
      if (count >= 4) return true;
    }
    return false;
  }

  private checkVerticalWin(col: number): boolean {
    let count = 0;
    const currentBoard = this.board.value;
    const currentPlayer = this.currentPlayer.value;
    for (let i = 0; i < this.rows; i++) {
      count = currentBoard[i][col] === currentPlayer ? count + 1 : 0;
      if (count >= 4) return true;
    }
    return false;
  }

  private checkDiagonalRightWin(row: number, col: number): boolean {
    let count = 0;
    const currentBoard = this.board.value;
    const currentPlayer = this.currentPlayer.value;
    let shift = Math.min(row, col);
    for (
      let i = row - shift, j = col - shift;
      i < this.rows && j < this.cols;
      i++, j++
    ) {
      count = currentBoard[i][j] === currentPlayer ? count + 1 : 0;
      if (count >= 4) return true;
    }
    return false;
  }

  private checkDiagonalLeftWin(row: number, col: number): boolean {
    let count = 0;
    const currentBoard = this.board.value;
    const currentPlayer = this.currentPlayer.value;
    let shift = Math.min(row, this.cols - col - 1);
    for (
      let i = row - shift, j = col + shift;
      i < this.rows && j >= 0;
      i++, j--
    ) {
      count = currentBoard[i][j] === currentPlayer ? count + 1 : 0;
      if (count >= 4) return true;
    }
    return false;
  }

  isBoardFull(): boolean {
    return !this.board.value.some((row) => row.some((cell) => cell === null));
  }
}

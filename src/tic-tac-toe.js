class TicTacToe {
    constructor() {
        this.fieldSize = 3;
        this.marks = [];
        for (var i = 0; i < this.fieldSize; i++){
            this.marks[i] = [];
            for (var j = 0; j < this.fieldSize; j++){
               this.marks[i][j] = null;
            }
        }

        this.isXCurrent = true;
    }

    getCurrentPlayerSymbol() {
        return this.isXCurrent?"x":"o";
    }

    getWinner() {
        if (this.marks[0][0] == this.marks[0][1] && this.marks[0][0] == this.marks[0][2]) return this.marks[0][0];
        if (this.marks[1][0] == this.marks[1][1] && this.marks[1][0] == this.marks[1][2]) return this.marks[1][0];
        if (this.marks[2][0] == this.marks[2][1] && this.marks[2][0] == this.marks[2][2]) return this.marks[2][0];
        if (this.marks[0][0] == this.marks[1][0] && this.marks[0][0] == this.marks[2][0]) return this.marks[0][0];
        if (this.marks[0][1] == this.marks[1][1] && this.marks[0][1] == this.marks[2][1]) return this.marks[0][1];
        if (this.marks[0][2] == this.marks[1][2] && this.marks[0][2] == this.marks[2][2]) return this.marks[0][2];
        if (this.marks[0][0] == this.marks[1][1] && this.marks[0][0] == this.marks[2][2]) return this.marks[0][0];
        if (this.marks[0][2] == this.marks[1][1] && this.marks[0][2] == this.marks[2][0]) return this.marks[0][2];
        return null;
    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex < this.fieldSize && columnIndex < this.fieldSize){
            if (this.marks[rowIndex][columnIndex] == null){
                this.marks[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
                 this.isXCurrent = !this.isXCurrent;
            }
        }
    }

    print(){
        for (var i = 0; i < this.fieldSize; i++){
            var str = "";
            for (var j = 0; j < this.fieldSize; j++){
                if (this.marks[i][j] == null)
                    str +=  "- ";
                else
                    str += this.marks[i][j] + " ";
            }
            console.log(str + "\n");
        }

    }

    isFinished() {
        return (this.getWinner()|| this.isDraw())?true:false;
    }

    noMoreTurns() {
        for (var i = 0; i < this.fieldSize; i++){
            for (var j = 0; j < this.fieldSize; j++){
                if (this.marks[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns()&&(this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex < this.fieldSize && colIndex < this.fieldSize){
            return this.marks[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;

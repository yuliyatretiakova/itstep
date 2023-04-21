class GameController{

    game; // объект Game

    login(){
        document.forms.start_form.classList.add("d-none");
        document.forms.login_form.classList.remove("d-none");
        return false;
    }

    createGame(){

    }

    start(){
        document.forms.login_form.classList.add("was-validated");
        if(document.forms.login_form.checkValidity())
            {
            document.forms.login_form.classList.remove("was-validated");
            document.forms.login_form.classList.add("d-none");
            
            //this.createGame();
            let utils = new Utils();
        
            let player1, player2;
    
            if(utils.getRandomNumber(1,2) == 1){

                player1 = new Player(document.forms.login_form.player1_name.value);
                player2 = new Player(document.forms.login_form.player2_name.value);
            } else{

                player1 = new Player(document.forms.login_form.player2_name.value);
                player2 = new Player(document.forms.login_form.player1_name.value);
            }
    
            this.game = new Game(player1, player2);

            let table = document.createElement("table");
            for(let i = 0; i < 3; i++){
                let row = document.createElement("tr");
                    
                for(let j = 0; j < 3; j++){
                    let data = document.createElement("td");
                    row.append(data)
                    } 
                table.append(row);  
            }
                    
            table.addEventListener("click", (event) => {

                if(document.querySelector(".current").innerHTML == ""){
                    return false;
                }
                let td = event.target;
            
                if(td.tagName != "TD")
                    return false;  
            
                let x = td.cellIndex;    
                let y = td.parentNode.rowIndex;
                
                if(this.game.field.cells[x][y] != 0)
                    return false;
            
                if(this.game.currentPlayer == 1){
                    this.game.logs.addMove(this.game.getCurrentPlayerName(),x,y,1); // this.game.logs.moves
                    td.classList.add("k");
                    this.game.field.addX(x,y);
                    
                } else {
                    this.game.logs.addMove(this.game.getCurrentPlayerName(),x,y,-1);
                    td.classList.add("n");
                    this.game.field.addO(x,y);         
                }



                let winner = this.game.checkWinner();
                if(winner > 0){
                    document.querySelector(".result").innerHTML = `Победил игрок <b>${this.game.getCurrentPlayerName()}</b>`;
                    this.game.logs.addString(`Победил игрок <b>${this.game.getCurrentPlayerName()}</b>`);
                    document.querySelector(".current").innerHTML = ``;
                } else if(this.game.checkDraw()){
                    document.querySelector(".current").innerHTML = ``;
                    document.querySelector(".result").innerHTML = `Ничья`;
                    this.game.logs.addString(`Ничья`);
                } else {
                    if(this.game.currentPlayer == 1){
                        this.game.currentPlayer = 2;
                    } else {
                        this.game.currentPlayer = 1;
                    }
                    document.querySelector(".current").innerHTML = `Ходит игрок <b>${this.game.getCurrentPlayerName()}</b>`;
                }  
                
                let logsBlock = document.querySelector(".logs");
                logsBlock.innerHTML = ""; 
                this.game.logs.moves.forEach(element => {
                    logsBlock.innerHTML += `<p>${element}</p>`; 
                });     
            });
            document.querySelector(".field").append(table);

            document.querySelector(".current").innerHTML = `Ходит игрок <b>${this.game.getCurrentPlayerName()}</b>`;
            document.querySelector(".game_form").classList.remove("d-none");
            }
            
        return false;
    }

    createField(){

    }

    showLog(){

    }
}
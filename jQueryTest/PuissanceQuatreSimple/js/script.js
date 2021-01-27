 $(function(){
 	function Game(){
 		this.player="R";
 		this.initialize = function(){
    		this.grid = [
      			[null, null, null, null, null, null],
      			[null, null, null, null, null, null],
      			[null, null, null, null, null, null],
      			[null, null, null, null, null, null],
      			[null, null, null, null, null, null],
      			[null, null, null, null, null, null],
      			[null, null, null, null, null, null],
    			];
		}
		this.play = function(col){
			var lgn=this.validCase(col);
			if (this.validColumn(col)){
				if(this.player==="R"){
					this.grid[col][lgn] = "R";
					$(".tokenHead").css("background-color","yellow");
					this.display();
					var scoreCoup = this.scorePlay(col,lgn,this.player,this.grid); //evalue le score du coup joué
					if (scoreCoup>=4){
						$("#dialogBox").html("Le joueur rouge a gagné!!");
					}else{
						$("#dialogBox").html("A vous de jouer joueur jaune");
						//$(".ligne:nth-child("+(lgn+1)+") .token:nth-child("+(col+1)+")").html(scoreCoup);
					} 
					this.player="Y";
				}else{
					this.grid[col][lgn] = "Y";
					$(".tokenHead").css("background-color","red");
					this.display();
					var scoreCoup = this.scorePlay(col,lgn,this.player,this.grid);
					if (scoreCoup>=4){
						$("#dialogBox").html("Le joueur jaune a gagné!!");
					}else{
						$("#dialogBox").html("A vous de jouer joueur rouge");
					}
					this.player="R";
				}	
			}
		}

		//--------------FCT QUI DETERMINE LA CASE JOUABLE D'UNE COLONNE ==> un n° de ligne --
		this.validCase = function(col){
			for (var i=0; i<5; i+=1){
				if (this.grid[col][i]===null && this.grid[col][i+1]!==null){
					return i;
				}
			}
			if (this.grid[col][5] === null){
				return 5;
			}
		}
		//--------------FCT QUI DETERMINE SI LA COLONNE EST PLEINE ==> true/false----
		this.validColumn = function(col){
			if (this.grid[col][0]!==null){
				return false; // la colonne n'est pas jouable
			}else{
				return true;  //la colonne est jouable
			}
		}
		//--------------fct qui calcul le score du coup joué!!------------------------
		this.scorePlay = function(col,lgn,player,grid){
			// Check Horizontal---------------------------
			var scoreH=1;
			var i=col;
			while ((i<6)&&(grid[i+1][lgn]===player)){
				scoreH+=1;
				i+=1;
			}
			i=col;
			while ((i>0)&&(grid[i-1][lgn]===player)){
				scoreH+=1;
				i-=1;
			}
			// Check Vertical------------------------------
			var scoreV=1;
			var j=lgn;
			while ((j<5)&&(grid[col][j+1]===player)){
				scoreV+=1;
				j+=1;
			}
			j=lgn;
			while ((j>0)&&(grid[col][j-1]===player)){
				scoreV+=1;
				j-=1;
			}
			// Check Diagonal haut gauche------------------------------
			var scoreHG=1;
			var i=col;
			var j=lgn;
			while ((i<6)&&(j<5)&&(grid[i+1][j+1]===player)){
				scoreHG+=1;
				i+=1;
				j+=1;
			}
			i=col;
			j=lgn;
			while ((i>0)&&(j>0)&&(grid[i-1][j-1]===player)){
				scoreHG+=1;
				i-=1;
				j-=1;
			}
			// Check diagonale haut droite-------------------------------
			var scoreHD=1;
			var i=col;
			var j=lgn;
			while ((i<6)&&(j<5)&&(grid[i+1][j-1]===player)){
				scoreHD+=1;
				i+=1;
				j-=1;
			}
			var i=col;
			var j=lgn;
			while ((i>0)&&(j>0)&&(grid[i-1][j+1]===player)){
				scoreHD+=1;
				i-=1;
				j+=1;
			}
			return Math.max(scoreV,scoreH,scoreHD,scoreHG);
		}


		//--------------fct display : Affiche la grille-------------------------------
		this.display = function(){
			for (var col=0;col<7;col+=1){
				for (var lgn=0; lgn<6; lgn+=1){
							var lgnPos=lgn+1;
							var colPos=col+1;
					switch (this.grid[col][lgn]){
						case null:
							$(".ligne:nth-child("+lgnPos+") .token:nth-child("+colPos+")").css("background-color","grey");
						break;
						case "R":
							$(".ligne:nth-child("+lgnPos+") .token:nth-child("+colPos+")").css("background-color","red");
						break;
						case "Y":
							$(".ligne:nth-child("+lgnPos+") .token:nth-child("+colPos+")").css("background-color","yellow");
						break;

					}
				}
			}
		}
	this.initialize();
 	this.display();
 	}
	$("#tokenHead1").click(function(){
		game.play(0);
	});	
	$("#tokenHead2").click(function(){
		game.play(1);
	});	
	$("#tokenHead3").click(function(){
		game.play(2);
	});	
	$("#tokenHead4").click(function(){
		game.play(3);
	});	
	$("#tokenHead5").click(function(){
		game.play(4);
	});	
	$("#tokenHead6").click(function(){
		game.play(5);
	});	
	$("#tokenHead7").click(function(){
		game.play(6);
	});
 	//TEST ICI
 	var game= new Game();
});
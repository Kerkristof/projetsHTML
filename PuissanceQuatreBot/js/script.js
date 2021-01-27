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
				this.grid[col][lgn] = "R";
				this.display();
				var scoreCoup = this.scorePlay(col,lgn,this.player,this.grid); //evalue le score du coup joué
				if (scoreCoup>=4){
				$("#dialogBox").html("Bravo, bien joué!! C'est super!!");
				$(".tokenHead").remove();
				$("#gridHead").append("Le joueur rouge a gagné!!");
				$("#gridHead").css("color","red");
				}else{
					this.botPlay(this.grid);
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
		//------------------fct check si le coup donne un coup gagnant à l'adversaire---

		//-------------- fct bot : jaune les jaunes ------------------------------------
		this.botPlay = function (grid){
			this.grid=grid;
			// Algo de reponse de l'algoBot--------------------------
			var checkStep=true; // controle la progression dans l'algo
			//-------1) check si un coup gagnant est possible-----------
			if (checkStep===true){
				for(var col=0; col<7; col+=1){
				var lgn=this.validCase(col)
					if (this.validColumn(col)){
						var score = this.scorePlay(col,lgn,"Y",this.grid);
						if(score===4){
						this.grid[col][lgn] = "Y";
						checkStep=false;
						break;
						}
					}
				}	
			}
			//--------2) check si les rouges ont un coup gagnant possible---------------
			if (checkStep===true){
				for(var col=0; col<7; col+=1){
				var lgn=this.validCase(col)
					if (this.validColumn(col)){
						var score = this.scorePlay(col,lgn,"R",this.grid);
						if(score===4){
						this.grid[col][lgn] = "Y";
						checkStep=false;
						break;
						}
					}
				}	
			}
			//--------3) si les rouges ont deux coups a score vaut 3 possible
			if(checkStep ===true){
				var compt=0;
				for(var col=0; col<7; col+=1){
					var lgn=this.validCase(col);
					if (this.validColumn(col)){
						var score = this.scorePlay(col,lgn,"R",this.grid);
						if(score===3){
							compt+=1;
							if(compt===2){
								this.grid[col][lgn] = "Y";
								checkStep=false;
								break;
							}
						}
					}
				}
			}
			//--------4) joue une case valide random------------------
			if(checkStep === true){
				while(checkStep===true){
					var col=Math.floor(Math.random()*7);
					var lgn=this.validCase(col)
					if (this.validColumn(col)){
						this.grid[col][lgn] = "Y";
						checkStep=false
						break;
					}
				}
			}
			//---------4) a suivre---------------------

			//check si gagné ----------------------------
			var score = this.scorePlay(col,lgn,"Y",this.grid);
			if (score===4){
				$("#dialogBox").html("Pas trop déçu d'avoir perdu?");
				$(".tokenHead").remove();
				$("#gridHead").append("Le joueur jaune a gagné!!");
				$("#gridHead").css("color","yellow");
			}	
			// Fin de l'algoBot -----------------------------------------------------
			this.display();
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
	// $("#dialogBox").click(function(){
	// 	var game=new Game;
	// });
 	//TEST ICI
 	var game= new Game();
});
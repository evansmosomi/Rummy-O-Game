var tiles = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var colours = ["yellow", "blue", "red", "green"];
var deck = new Array();

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < colours.length; i++)
	{
		for(var x = 0; x < tiles.length; x++)
		{
			var tile = {Value: tiles[x], colour: colours[i]};
			deck.push(tile);
		}
	}
		
	return deck;
}

function startGame () 
{
 
	deck = getDeck();
	shuffle();
	renderDeck(2);
	
}

function deal()
{
	 
	shuffle();
	renderDeck(14);
}

function shuffle()
{
	
	for (var i = 0; i < 1200; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var temp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = temp;
	}

	//renderDeck();
}

function renderDeck(num)
{
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < num ; i++)
	{
		var tile = document.createElement("div");
		var value = document.createElement("div");
		var colour = document.createElement("div");
		tile.className = "tile";
		value.className = "value";
		colour.className = "colour " + deck[i].colour;

		value.innerHTML = deck[i].Value;
		tile.appendChild(value);
		tile.appendChild(colour);

		document.getElementById("deck").appendChild(tile);
	}
}


                
            
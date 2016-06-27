var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    //  tiles are 16x16 each
    game.load.image('tiles', 'assets/images/sci-fi-tiles.png');

}

var cursors;

function create() {

    //  Create some map data dynamically
    //  Map size is 128x128 tiles
    var data = '';
	var arr = [];
    var num = 12
	
	for (var y = 0; y < num; y++)
    {
		var ar = []
        for (var x = 0; x < num; x++)
        {	
			ar[x] = game.rnd.between(0, 20).toString();
           
			
		} arr[y] = ar;
    }
	
	
	for (var y = 0; y < num; y++)
    {
        for (var x = 0; x < num; x++)
        {
            data += arr[y][x];

            if (x < num - 1)
            {
                data += ',';
            }
        }

        if (y < num -1)
        {
            data += "\n";
        }
    }

    console.log(data);

    //  Add data to the cache
    game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);

    //  Create our map (the 16x16 is the tile size)
    map = game.add.tilemap('dynamicMap', 16, 16);

    //  'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('tiles', 'tiles', 16, 16);

    //  0 is important
    layer = map.createLayer(0);

    //  Scroll it
    layer.resizeWorld();

    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    if (cursors.left.isDown)
    {
        game.camera.x--;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x++;
    }

    if (cursors.up.isDown)
    {
        game.camera.y--;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y++;
    }

}


function mark (){
	
}
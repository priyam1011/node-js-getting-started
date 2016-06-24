var express = require('express');
var Discord = require("discord.js");
var bot = new Discord.Client();
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  bot.on("message", function(message)
 {
	var input = message.content.toLowerCase();
	if(input === "trkappaline")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkAppaline.png");
	}
	if(input === "trkbronze")
	{
		//audio.src = "2016 Projects//Discord Bot//audio//snoopdoge.mp3";
		//audio.loop = false;
		//audio.play();
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkBronze.png");
	}
	if(input === "trkdoge")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkDoge.png");
	}if(input === "trkdorito")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkDorito.png");
	}if(input === "trkfail")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkFail.png");
	}if(input === "trkgood")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkGood.png");
	}
	if(input === "trkhorsey")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkHorsey.png");
	}
	if(input === "trklata")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkLata.png");
	}
	if(input === "trklegend")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkLegend.png");
	}
	if(input === "trklyfe")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkLyfe.png");
	}
	if(input === "trkpcane")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkPcane.png");
	}
	if(input === "trkpleb")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkPleb.png");
	}
	if(input === "trkrip")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkRip.png");
	}
	if(input === "trksalt")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkSalt.png");
	}
	if(input === "trkwave")
	{
		bot.sendFile(message, "2016 Projects//Discord Bot//emotes//trkWave.png");
	}

 });
 bot.login("patelpriyam1011@gmail.com", "juugo123");
});



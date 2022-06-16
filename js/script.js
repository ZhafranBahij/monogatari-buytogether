/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  city: "City_Morning.png",
  warteg: "Cafeteria_Day.png",
});

// Define the Characters
monogatari.characters({
  ren: {
    name: "Ren",
    color: "#5bcaff",
    sprites: {
      angry: "./Ren/Sumi_WinterUni_Open_Blush.png",
      // happy: "happy.png",
      normal: "./Ren/Sumi_WinterUni_Smile.png",
      sad: "./Ren/Sumi_WinterUni_Frown.png",
      surprised: "./Ren/Sumi_WinterUni_Open.png",
    },
  },
});

monogatari.script({
  // The game starts here.
  Start: [
    "show scene city with fadeIn",
    "show notification Welcome",
    "show character ren angry at center with fadeIn",
    "ren Why are you late?",
    "ren One hour ago, we supposed to meet each other in here, but you didn't come.",
    "ren I thought, you forgot about our promise.",
    {
      Choice: {
        Dialog: "Why i am late?",
        game: {
          Text: "Playing game",
          Do: "jump gameExcuse",
        },
        lost: {
          Text: "I'm lost",
          Do: "jump lostExcuse",
        },
      },
    },
  ],

  gameExcuse: [
    "Well, of course I'm playing some game. I forgot that our promise did it one hour ago",
    "ren Hffttt... For this time, I forgive you for this.",
    "show character ren sad at center with fadeIn",
    "ren However, if you repeat it again, I don't want to meet you for 1 month.",
    "(So Scary)",
    "jump Second",
  ],

  lostExcuse: [
    "I lost. 15 minutes before the time we promised, I was going to this place, but I can't find it the exactly place",
    "show character ren surprised at center with fadeIn",
    "ren Are you kidding? You get lost in 1 hour.",
    "show character ren normal at center with fadeIn",
    "ren Hffttt... It's unbelievable.",
    "ren For now, I want to trust you for that reason.",
    "Thank You!",
    "jump Second",
  ],

  Second: [
    "show character ren normal at center with fadeIn",
    "ren Okay...",
    "ren We will go to warteg, so prepare yourself.",
    "(Warteg? What is warteg? I didn't hear that for a long time)",
    "end",
  ],

  Warteg: [
    "show scene warteg with fadeIn",
    "ren Maybe, it's different from warteg that you know.",
    "ren Normally, warteg is a mini restaurant that sell some food.",
    "ren We can choose food by pointing the food we want.",
    "ren But, it will be better if you say the name of the food.",
    "ren Well, this place is not same as a warteg that we know",
    "ren but, you can choose the food in second floor and eat the food in first floor.",
    "Hmmm, so, if we want to take some food, we can go to second floor and eat the food in first floor, right?",
    "ren Yeahh, you're right.",
    "ren So, who want to buy the food?",
    "end",
  ],
});

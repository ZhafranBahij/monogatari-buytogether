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
monogatari.configuration("credits", {
  Developers: {
    Programmer: "<a href='https://github.com/ZhafranBahij'>Zhafran Bahij</a>",
    "Scenario Writer":
      "<a href='https://twitter.com/RainfogM'>Rainfog Muzaba</a>",
  },
  Art: {
    Character:
      "<a href='https://noranekogames.itch.io/sumifreecharactersprite'>Noranekogames</a>",
    Background:
      "<a href='https://noranekogames.itch.io/yumebackground'>Noranekogames</a>",
  },
  "Special Thanks to": {
    "My tomodachi": ["Friends"],
  },
});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
  normalMusic: "./normal-theme.mp3",
  lastMusic: "./dead-by-daylight-10243.mp3",
  romanceMusic: "./beautiful-piano-115480.mp3",
  sadMusic: "./emotional-piano-sad-background-music-for-videos-5688.mp3",
});

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
  cityNight: "City_Night.png",
  warteg: "Cafeteria_Day.png",
});

// Define the Characters
monogatari.characters({
  ren: {
    name: "Ren",
    color: "#5bcaff",
    sprites: {
      angry: "./Ren/Sumi_WinterUni_Open_Blush.png",
      happy: "./Ren/Sumi_WinterUni_Smile_Blush.png",
      normal: "./Ren/Sumi_WinterUni_Smile.png",
      sad: "./Ren/Sumi_WinterUni_Frown.png",
      embarrassed: "./Ren/Sumi_WinterUni_Frown_Blush.png",
      surprised: "./Ren/Sumi_WinterUni_Open.png",
    },
  },
  player: {
    name: "Shien",
    color: "#5bcaff",
  },
});

class MyAction extends Monogatari.Action {
  static matchString([action]) {
    return action === "myaction";
  }

  constructor([myaction, ...args]) {
    super();
  }

  apply() {
    monogatari.storage({
      player: {
        name: "",
        trust: 10,
      },
    });
  }

  revert() {
    monogatari.storage({
      player: {
        name: "",
        trust: 10,
      },
    });
  }
}

MyAction.id = "MyAction";

monogatari.registerAction(MyAction);

monogatari.script({
  // The game starts here.
  Start: [
    "play music normalMusic with loop with fade 2",
    "show scene city with fadeIn",
    // "show notification Welcome",
    // "myaction something",
    "show character ren angry at center with fadeIn",
    "ren Why are you late?",
    "ren One hour ago, we supposed to meet each other in here, but you didn't come.",
    "ren I thought, you forgot about our promise.",
    {
      Choice: {
        Dialog: "player Why i am late?",
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
    "player Well, of course I'm playing some game. I forgot that our promise did it one hour ago",
    "ren Hffttt... For this time, I forgive you for this.",
    "show character ren sad at center with fadeIn",
    "ren However, if you repeat it again, I don't want to meet you for 1 month.",
    "player (So Scary)",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 2,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 2,
            },
          });
        },
      },
    },

    "After this, your trust points with Ren is {{player.trust}}",
    "jump Second",
  ],

  lostExcuse: [
    "player I lost. 15 minutes before the time we promised, I was going to this place, but I can't find it the exactly place",
    "show character ren surprised at center with fadeIn",
    "ren Are you kidding? You get lost in 1 hour.",
    "show character ren normal at center with fadeIn",
    "ren Hffttt... It's unbelievable.",
    "ren For now, I want to trust you for that reason.",
    "player Thank You!",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 1,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 1,
            },
          });
        },
      },
    },
    "After this, your trust points with Ren is {{player.trust}}",
    "jump Second",
  ],

  Second: [
    "show character ren normal at center with fadeIn",
    "ren Okay...",
    "ren We will go to warteg, so prepare yourself.",
    "player (Warteg? What is warteg? I didn't hear that for a long time)",
    "jump Warteg",
  ],

  Ending: ["end"],
});

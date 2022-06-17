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
monogatari.assets("music", {
  normalMusic: "./normal-theme.mp3",
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
});
function trustIssues(minus) {
  monogatari.storage().player.trust = monogatari.storage().player.trust - minus;

  // We add the 20 points and update the value
  // in a single step
  // monogatari.storage({
  //   player: {
  //     trust: trust - minus,
  //   },
  // });

  // console.log(trust);

  return true;
}
monogatari.script({
  // The game starts here.
  Start: [
    // "play music normalMusic with loop",
    "show scene city with fadeIn",
    // "show notification Welcome",
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
    "I lost. 15 minutes before the time we promised, I was going to this place, but I can't find it the exactly place",
    "show character ren surprised at center with fadeIn",
    "ren Are you kidding? You get lost in 1 hour.",
    "show character ren normal at center with fadeIn",
    "ren Hffttt... It's unbelievable.",
    "ren For now, I want to trust you for that reason.",
    "Thank You!",
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
    "(Warteg? What is warteg? I didn't hear that for a long time)",
    "jump Warteg",
  ],

  Warteg: [
    "show scene warteg with fadeIn",
    "show character ren normal at center with fadeIn",
    "ren Maybe, it's different from warteg that you know.",
    "ren Normally, warteg is a mini restaurant that sell some food.",
    "ren We can choose food by pointing the food we want.",
    "ren But, it will be better if you say the name of the food.",
    "ren In this warteg, you can choose the food in second floor and eat the food in first floor.",
    "Hmmm, so, if we want to take some food, we can go to second floor and eat the food in first floor, right?",
    "ren Yeahh, you're right.",
    "jump WartegChoice",
  ],

  WartegChoice: [
    {
      Choice: {
        Dialog: "ren So, who want to buy the food?",
        me: {
          Text: "Me",
          Do: "jump Me",
        },
        you: {
          Text: "You",
          Do: "jump You",
        },
        we: {
          Text: "Let's Together",
          Do: "jump Together",
        },
        ask: {
          Text: "ask",
          Do: "jump Ask",
        },
      },
    },
  ],

  Me: [
    "I wanna buy it for you!",
    "ren Thanks",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 1,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 1,
            },
          });
        },
      },
    },
    "After this, your trust points with Ren is {{player.trust}}",
    {
      Choice: {
        Dialog: "Ren give me some money.",
        take: {
          Text: "Take It",
          Do: "jump Take",
        },
        reject: {
          Text: "Reject It",
          Do: "jump Reject",
        },
      },
    },
  ],

  Take: [
    "Do you want to buy our lunch with your money? Thank you very much",
    "ren Don't mind",
  ],

  Reject: [
    "Thank you, but I have some money to buy our lunch!",
    "ren Do you have enough money?",
    "show character ren angry at center with fadeIn",
    "ren Because, my food's price is 10k. I won't burden you too take some responsbility to buy me a food.",
    "Ok-ok, I'll take your money, but I just want to take 10k.",
    "I want to buy my food with my money and I don't want to burden you too.",
    "show character ren happy at center with fadeIn",
    "ren Thanks.",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 1,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 1,
            },
          });
        },
      },
    },
    "After this, your trust points with Ren is {{player.trust}}",
    "end",
  ],

  You: [
    "...",
    "...",
    "show character ren embarrassed at center with fadeIn",
    "ren Ok-oke, I'll buy it for you. So please, don't stare me like that.",
    "Thank you so much, Ren!",
    "show character ren angry at center with fadeIn",
    "ren Yeahh, but don't forget to get a place, right?",
    "Ok-ok, leave it to me!",
    "end",
  ],

  Ask: [
    "Hmm, if I buy it, am I buy the meal for you too?",
    "ren Hmm.... maybe yes or no. You buy some food for you and me, but you can buy it by my money.",
    "ren I can give you some money to buy the meal.",
    "ren Well, if you choose me to buy it, you must find a place to take a lunch before there is no empty place to eat.",
    "jump WartegChoice",
  ],

  Together: [
    "Let's go together. Because I wanna be with you.",
    "In this res- warteg, it's not crowded at all. So, we don't need to take a place before buy some lunch.",
    "show character ren surprised at center with fadeIn",
    "ren ....",
    "ren ....",
    "show character ren happy at center with fadeIn",
    "ren T-thanks, maybe your suggestion is right.",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 3,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 3,
            },
          });
        },
      },
    },

    "After this, your trust points with Ren is {{player.trust}}",
    "end",
  ],
});

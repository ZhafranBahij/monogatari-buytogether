monogatari.script({
  Warteg: [
    "show scene warteg with fadeIn",
    "show character ren normal at center with fadeIn",
    "ren Maybe, it's different from warteg that you know.",
    "ren Normally, warteg is a mini restaurant that sell some food.",
    "ren We can choose food by pointing the food we want.",
    "ren But, it will be better if you say the name of the food.",
    "ren In this warteg, you can choose the food in second floor and eat the food in first floor.",
    "player Hmmm, so, if we want to take some food, we can go to second floor and eat the food in first floor, right?",
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
        // ask: {
        //   Text: "ask",
        //   Do: "jump Ask",
        // },
      },
    },
  ],

  Me: [
    "player I wanna buy it for you!",
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
    "player Do you want to buy our lunch with your money? Thank you very much",
    "ren Don't mind",
    "jump Lunch",
  ],

  Reject: [
    "player Thank you, but I have some money to buy our lunch!",
    "ren Do you have enough money?",
    "show character ren angry at center with fadeIn",
    "ren Because, my food's price is 10k. I won't burden you too take some responsbility to buy me a food.",
    "player Ok-ok, I'll take your money, but I just want to take 10k.",
    "player I want to buy my food with my money and I don't want to burden you too.",
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
    "jump Lunch",
  ],

  You: [
    "player ...",
    "wait 1000",
    "player ...",
    "show character ren embarrassed at center with fadeIn",
    "ren Ok-oke, I'll buy it for you. So please, don't stare me like that.",
    "player Thank you so much, Ren!",
    "show character ren angry at center with fadeIn",
    "ren Yeahh, but don't forget to get a place, right?",
    "player Ok-ok, leave it to me!",
    "jump Lunch",
  ],

  Ask: [
    "player Hmm, if I buy it, am I buy the meal for you too?",
    "ren Hmm.... maybe yes or no. You buy some food for you and me, but you can buy it by my money.",
    "ren I can give you some money to buy the meal.",
    "ren Well, if you choose me to buy it, you must find a place to take a lunch before there is no empty place to eat.",
    "jump WartegChoice",
  ],

  Together: [
    "player Let's go together. Because I wanna be with you.",
    "stop music normalMusic with fade 1",
    "wait 500",
    "play music romanceMusic with loop with fade 1",
    "player In this res- warteg, it's not crowded at all. So, we don't need to take a place before buy some lunch.",
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
    "stop music romanceMusic with fade 1",
    "wait 500",
    "jump Lunch",
  ],
});

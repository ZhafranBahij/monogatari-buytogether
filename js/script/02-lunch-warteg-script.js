monogatari.script({
  Lunch: [
    "stop music",
    "play music normalMusic with loop with fade 1",
    "The narrator to lazy to build some narration in some choice, so we continue to the part that Shien and Ren eating together.",
    "player Let's ea-",
    "show character ren angry at center with fadeIn",
    "ren Ehemm!!",
    "player What's wrong, Ren?",
    "show character ren normal at center with fadeIn",
    "ren Maybe, we can pray before we eat something. It's so rude that we eat without pray before that.",
    "player Well, you're right. So, let's pray.",
    "ren *node*",
    "player (We pray together before we eat).",
    "After that, we eat the food we want.",
    "stop music",
    "play music romanceMusic with loop with fade 1",
    "player (Sometimes, I see her face when she eats.)",
    "player (Her face is so cute and she is so kind to me.",
    "player (I didn't know the reason, why she bring me to this place).",
    "player (It's like, She treat me specially than anyone).",
    "show character ren happy at center with fadeIn",
    "ren The food is great! You know when the rice, sambal, and orek tempe combine to each other.",
    "ren It will be perfect lunch!",
    {
      Choice: {
        disagree: {
          Text: "Disagree",
          Do: "jump Disagree",
        },
        agree: {
          Text: "Agree",
          Do: "jump Agree",
        },
      },
    },
  ],

  Agree: [
    "player Yeahh, i like it too! I'm surprised that some cheap food can be super delicious food!!!",
    "ren So so, you're right! The food is superb!!",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 2,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 2,
            },
          });
        },
      },
    },
    "After this, your trust points with Ren is {{player.trust}}",
    "jump nextLunch",
  ],

  Disagree: [
    "stop music",
    "play music sadMusic with loop with fade 1",
    "player I didn't expect you to say that. Because, the food's price is cheap. I don't know that you like some cheap food.",
    "show character ren sad at center with fadeIn",
    "ren The perfect food is the food that you convinent with the price and delicious.",
    "ren Besides, you can take pay some cheap price for a large portion.",
    "ren I like some cheap food that take more portion than an expensive food with small portion.",
    {
      Function: {
        Apply: () => {
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
    "jump nextLunch",
  ],
});

monogatari.script({
  yosh: [
    "show scene cityNight with fadeIn",

    "jump trueEnd",
    {
      Conditional: {
        Condition: function () {
          if (this.storage().trust >= 9) {
            return "happy end";
          } else if (this.storage().trust <= 0) {
            return "true end";
          } else {
            return "normal end";
          }
        },
        "happy end": "jump happyEnd",
        "normal end": "jump normalEnd",
        "true end": "jump trueEnd",
      },
    },
  ],

  normalEnd: [
    "ren So...",
    "wait 3000",
    "ren Bye bye, Shien...",
    "player Bye bye, Ren...",
    "player (Ren and I just a normal friend.)",
    "player (Yep, like a normal friend. There is no special feeling to her.)",
    "end",
  ],

  trueEnd: [
    "show character ren normal at center with fadeIn",
    "ren So...",
    "show character ren angry at center with fadeIn",
    "ren WHY YOU SO ANNOYING TO ME!",
    "show character ren sad at center with fadeIn",
    "ren Some interaction in the warteg, it's just like you didn't have any sympathize.",
    "ren WH-",
    "player Because...",
    "wait 1500",
    "player You and I are not real anymore.",
    "player This world is full of lie.",
    "player For Example...",
    "player *tick*",
    "show scene warteg with fadeIn",
    "player Normally, you can't teleport to the place you want, but..",
    "player You can do this in this world",
    "show character ren surprised at center with fadeIn",
    "ren Wh-what? What are you doing!? It's so crazy!!!",
    "player Well, did you know? There is another existence beside you and me.",
    "wait 1500",
    "show character ren sad at center with fadeIn",
    "ren Who? I didn't see anyone.",
    "ren You are so scary....",
    "player You can't see him, but he can see you. It's a fact you must know.",
    "ren Maybe a G-",
    "player It's just a merely human like me, but he lives in another dimension.",
    "player But first",
    "show scene #000000",
    "player *Push Ren into dark room*",
    "player Your memories will be lose and good bye REN!",
    "wait 1500",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          monogatari.storage({
            player: {
              name: "",
              trust: 5,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          monogatari.storage({
            player: {
              name: "",
              trust: 5,
            },
          });
          s;
        },
      },
    },
    "jump Start",
    "end",
  ],
});

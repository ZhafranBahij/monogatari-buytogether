monogatari.script({
  yosh: [
    "show scene cityNight with fadeIn",

    "jump happyEnd",
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

  happyEnd: [
    "show character ren happy at center with fadeIn",
    "ren Shien, I didn't know you're an amazing person!",
    "player Nope, i'm not amazing at all. You're greater than me in any aspect.",
    "ren You're too exageratted. I'm not so amazing.",
    "ren But, thanks.... I didn't know this day can be so beautiful.",
    "ren ...",
    "wait 1000",
    "ren Maybe, I have one request for you. Do you wanna fulfill it?",
    "player It depends on your request, but if I can, I wanna do it.",
    "ren Are you sure?",
    "player *node*",
    "ren Can you join to my study group? For now until 6 months later.",
    "ren from Interaction that we did before went to warteg until now.",
    "ren You're a reliable person. So...",
    "ren See you tomorrow!",
    "hide character ren with fadeOut",
    "player (But ren...)",
    "player (This world is full of lie, so I'm just show you a good side from me)",
    "player (I make you happy not for you)",
    "player (It because...)",
    "player (I wanna reach the happy ending in this game)",
    "end",
  ],

  normalEnd: [
    "show character ren normal at center with fadeIn",
    "ren So...",
    "wait 1000",
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
    "show character ren sad at center with fadeIn",
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
    "show character ren sad at center with fadeIn",
    "player *Push Ren into dark room*",
    "hide character ren with fadeOut",
    "player Your memories will be lose and good bye...",
    "wait 750",
    "player This Fake World",
    "end",
  ],
});

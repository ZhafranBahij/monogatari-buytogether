monogatari.script({
  nextLunch: [
    "stop music",
    "play music normalMusic with loop with fade 1",
    "After some conversation, we finished eating and than...",
    {
      Choice: {
        tidy: {
          Text: "Tidy the table",
          Do: "jump Tidy",
        },
        ignore: {
          Text: "Ignore",
          Do: "jump Ignore",
        },
      },
    },
  ],

  Tidy: [
    "player (I tidy up the table because it's a moral value in society).",
    "show character ren normal at center with fadeIn",
    "ren Let me help you!",
    "player (Ren and I tidy up the table together.)",
    "After that, we leave from the warteg.",
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
    "jump yosh",
  ],

  Ignore: [
    "show character ren normal at center with fadeIn",
    "stop music",
    "play music sadMusic with loop with fade 1",
    "ren Maybe, before we leave, I think we could tidying up the table.",
    "player Why we do that? I don't think it's useful and it is a jobdesc for the waiter and employer in here, right?",
    "ren Well, that's true, but it will lighten up the job of employer, right?",
    "player (I don't understand about this. Why we tidying up the table who aren't our job?)",
    "show character ren sad at center with fadeIn",
    "ren Hfftt...",
    "ren Somehow, my parents always say to me to tidy up the table after eat in a restaurant.",
    "show character ren normal at center with fadeIn",
    "ren In first time, I didn't know why we must do it. I asked to my parents the purpose of do this thing, but they didn't give me a answer.",
    "ren They said I must find the answer with myself.",
    "show character ren sad at center with fadeIn",
    "ren Hfftt..., The answer was same as the manga I read.",
    "player So, do you know the answer?",
    "show character ren surprised at center with fadeIn",
    "ren Wh-what!?",
    "ren Did you forget it? I just say it several minutes ago.",
    "player Yeah, I know, but...",
    "player Maybe, I wanna know about the answer why we lighten up their job?",
    "show character ren normal at center with fadeIn",
    "ren Well, maybe it's not logic, but...",
    "ren When you help people, someday the path you choose will be easier.",
    "ren Maybe, That is the only thing that I want to say to you. So, can you help me to tidying up the table?",
    {
      Choice: {
        tidy: {
          Text: "Yes",
          Do: "jump Tidyyes",
        },
        ignore: {
          Text: "No",
          Do: "jump Tidyno",
        },
      },
    },
  ],

  Tidyyes: [
    "stop music",
    "play music normalMusic with loop with fade 1",
    "player Okay, I'll help you.",
    "show character ren happy at center with fadeIn",
    "ren Thanks!",
    "player (Ren and I tidy up the table together.)",
    "After that, we leave from the warteg.",
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
    "jump yoshs",
  ],
  Tidyno: [
    "player Honestly, you can do this alone, right?",
    "player Logically, you can do this alone just in 10 seconds, right?",
    "player So, you can do this alone.",
    "show character ren angry at center with fadeIn",
    "ren BAKA!!",
    {
      Function: {
        Apply: () => {
          // We'll overwrite the player's name but save the old one in a new
          // value so that we can roll back and restore it if needed.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust - 3,
            },
          });
        },
        Revert: () => {
          // When rolling back, we'll restore the name to what it was before.
          const trust = monogatari.storage("player").trust;
          monogatari.storage({
            player: {
              name: "",
              trust: trust + 3,
            },
          });
        },
      },
    },
    "After this, your trust points with Ren is {{player.trust}}",
    "jump yosh",
  ],
});

monogatari.script({
  // The game starts here.
  Start: [
    "show scene #f7f6f6 with fadeIn",
    "show notification Welcome",
    {
      Input: {
        Text: "What is your name?",
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          this.storage({
            player: {
              name: input,
            },
          });
          return true;
        },
        Revert: function () {
          this.storage({
            player: {
              name: "",
            },
          });
        },
        Warning: "You must enter a name!",
      },
    },
    "y Hi {{player.name}} Welcome to Monogatari!",
    {
      Choice: {
        Dialog: "y Have you already read some documentation?",
        Yes: {
          Text: "Yes",
          Do: "jump Yes",
        },
        No: {
          Text: "No",
          Do: "jump No",
        },
      },
    },
  ],

  Yes: [
    "y Thats awesome!",
    "y Then you are ready to go ahead and create an amazing Game!",
    "y I can’t wait to see what story you’ll tell!",
    "end",
  ],

  No: [
    "y You can do it now.",

    "show message Help",

    "y Go ahead and create an amazing Game!",
    "y I can’t wait to see what story you’ll tell!",
    "end",
  ],
});

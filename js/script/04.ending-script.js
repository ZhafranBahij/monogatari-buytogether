monogatari.script({
  ending: [
    "end",
    {
      Conditional: {
        Condition: function () {
          if (this.storage().trust >= 9) {
            return "happy end";
          } else if (this.storage().trust <= 0) {
            return "true end";
            s;
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
});

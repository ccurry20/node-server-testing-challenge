exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("candy")
    .truncate()
    .then(function() {
      return knex("candy").insert([
        { name: "starburst" },
        { name: "werthers" },
        { name: "gummy worms" },
        { name: "cowtails" }
      ]);
    });
};

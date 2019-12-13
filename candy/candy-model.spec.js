const Candys = require("./candy-model.js");
const db = require("../data/db-config.js");

describe("candys model", () => {
  describe("insert", () => {
    it("should insert the candy into the db", async () => {
      await Candys.insert({ name: "jolly rancher" });
      await Candys.insert({ name: "skittles" });

      const candys = await db("candy");
      expect(candys).toHaveLength(2);
    });

    it("should return the candy inserted", async () => {
      let candy = await Candys.insert({ name: "jolly rancher" });
      expect(candy.name).toBe("jolly rancher");

      candy = await Candys.insert({ name: "gummy bears" });
      expect(candy.name).toBe("gummy bears");
    });

    beforeEach(async () => {
      await db("candy").truncate();
    });
  });
});

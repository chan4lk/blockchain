import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Hello = await ethers.getContractFactory("HelloWorld");
    const hello = await Hello.deploy();

    return { hello, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should get 1 as output", async function () {
      const { hello } = await loadFixture(deployOneYearLockFixture);

      expect(await hello.one()).to.equal(1);
    });   
  });

});

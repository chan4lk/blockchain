import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Inherit", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const A = await ethers.getContractFactory("A");
    const B = await ethers.getContractFactory("B");
    const a = await A.deploy();
    const b = await B.deploy();

    return { a, b, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should get 42 as from base", async function () {
      const { a } = await loadFixture(deployOneYearLockFixture);

      expect(await a.f()).to.equal(42);
    });   
    it("Should get 42 as from child", async function () {
      const { b } = await loadFixture(deployOneYearLockFixture);

      expect(await b.f2()).to.equal(42);
    }); 
  });

});

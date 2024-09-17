import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("NxCertify", function () {

  async function deployOneYearLockFixture() {
   
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const NxCertify = await hre.ethers.getContractFactory("NxCertify");
    const nxcertify = await NxCertify.deploy();

    return { nxcertify,  owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { nxcertify } = await loadFixture(deployOneYearLockFixture);

      expect(await nxcertify.gen("TESTE"))
      .to
      .emit(nxcertify, "NewCertify")
      .withArgs(console.log, console.log);
      
      expect(await nxcertify.codeStart()).to.equal(10001);

      const checkResponse = await nxcertify.check(10001);

      console.log(checkResponse);

    });
  });
});

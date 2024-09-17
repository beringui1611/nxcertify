import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NxModule = buildModule("NxCertify", (m) => {

  const nx = m.contract("NxCertify");

  return { nx };
});

export default NxModule;

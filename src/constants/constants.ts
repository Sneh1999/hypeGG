export enum HypeForm {
  CREATE_HYPE = 1,
  DISTRIBUTE_HYPE,
  REVIEW_HYPE,
}

export const contractAddress: string =
  "0xAC60CFD771B1Bf4F6f06945e57688004f86Fc58D";

export const abi = [
  "function getSupplyClaimedByWallet(address claimer) public view returns (uint256);",
];

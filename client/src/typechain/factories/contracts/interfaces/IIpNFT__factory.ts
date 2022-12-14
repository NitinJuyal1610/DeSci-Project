/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IIpNFT,
  IIpNFTInterface,
} from "../../../contracts/interfaces/IIpNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IIpNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IIpNFTInterface {
    return new utils.Interface(_abi) as IIpNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IIpNFT {
    return new Contract(address, _abi, signerOrProvider) as IIpNFT;
  }
}

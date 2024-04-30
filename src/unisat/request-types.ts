/**
 * Types used to exchange messages with Essentials.
 */

import { DABMessagePayload } from "../dab-message";

export type Request = {
  message: DABMessagePayload;
  resolver: (result: any) => void;
  rejecter: (error: Error) => void;
}

export type SendBitcoinRequestPayload = {
  payAddress: string; // BTC address that receives the payment
  satAmount: number; // Number of sats to pay.
  satPerVB: number; // Integer number (not decimal)
}

export type SignBitcoinDatatPayload = {
  rawData: string;
  prevOutScript: string;
  inIndex: number; // the index of input
  value: number; // value of the input
}

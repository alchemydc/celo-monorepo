/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from 'web3/eth/contract'
import { TransactionObject, BlockType } from 'web3/eth/types'
import { Callback, EventLog } from 'web3/types'
import { EventEmitter } from 'events'
import { Provider } from 'web3/providers'

export class MockReserve extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions)
  _address: string
  options: contractOptions
  methods: {
    tokens(arg0: string): TransactionObject<boolean>

    burnToken(arg0: string): TransactionObject<boolean>

    mintToken(arg0: string, arg1: string, arg2: number | string): TransactionObject<boolean>

    setGoldToken(goldTokenAddress: string): TransactionObject<void>

    transferGold(to: string, value: number | string): TransactionObject<boolean>

    addToken(token: string): TransactionObject<boolean>

    goldToken(): TransactionObject<string>
  }
  deploy(options: { data: string; arguments: any[] }): TransactionObject<Contract>
  events: {
    allEvents: (
      options?: {
        filter?: object
        fromBlock?: BlockType
        topics?: (null | string)[]
      },
      cb?: Callback<EventLog>
    ) => EventEmitter
  }
  getPastEvents(
    event: string,
    options?: {
      filter?: object
      fromBlock?: BlockType
      toBlock?: BlockType
      topics?: (null | string)[]
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>
  setProvider(provider: Provider): void
  clone(): MockReserve
}
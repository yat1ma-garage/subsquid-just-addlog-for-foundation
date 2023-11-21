import {assertNotNull} from '@subsquid/util-internal'
import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import * as abi from './abi/CollectionContract'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in Subsquid registry
        // See https://docs.subsquid.io/evm-indexing/supported-networks/
        archive: lookupArchive('eth-mainnet'),
        // Chain RPC endpoint is required for
        //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
        //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
        chain: {
            // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
            // https://docs.subsquid.io/deploy-squid/env-variables/
            url: assertNotNull(process.env.RPC_ENDPOINT),
            // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
            rateLimit: 10,
        },
    })
    .setFinalityConfirmation(75)
    .setFields({
        transaction: {
            from: true,
            value: true,
            hash: true,
        },
    })
    .setBlockRange({
        from: 13531391,
    })
    .addLog({
        // we have to set undefined because there is no dynamic template in squid-sdk
        // address: new Array(50_000).fill("0x3b3ee1931dc30c1957379fac9aba94d1c48a5405"),
        address: undefined,
        topic0: [
            // needed topics in foundation migration
            abi.events.Approval.topic,
            abi.events.ApprovalForAll.topic,
            abi.events.BaseURIUpdated.topic,
            abi.events.Minted.topic,
            abi.events.Transfer.topic,
            abi.events.TokenCreatorPaymentAddressSet.topic,
            abi.events.NFTOwnerMigrated.topic,
            abi.events.PaymentAddressMigrated.topic,
            abi.events.SelfDestruct.topic,
        ],
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>

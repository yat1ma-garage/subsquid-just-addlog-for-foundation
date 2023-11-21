import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './CollectionContract.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    BaseURIUpdated: new LogEvent<([baseURI: string] & {baseURI: string})>(
        abi, '0x6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad'
    ),
    CreatorMigrated: new LogEvent<([originalAddress: string, newAddress: string] & {originalAddress: string, newAddress: string})>(
        abi, '0xd5286a572483e672fa07ed52b04659a654cf04fe22abba157a9551857adaa681'
    ),
    MaxTokenIdUpdated: new LogEvent<([maxTokenId: bigint] & {maxTokenId: bigint})>(
        abi, '0x5633fd1915094f39ec7d395ea541662e957f3fffdcaf492b661373bf00da98fd'
    ),
    Minted: new LogEvent<([creator: string, tokenId: bigint, indexedTokenCID: string, tokenCID: string] & {creator: string, tokenId: bigint, indexedTokenCID: string, tokenCID: string})>(
        abi, '0xe2406cfd356cfbe4e42d452bde96d27f48c423e5f02b5d78695893308399519d'
    ),
    NFTOwnerMigrated: new LogEvent<([tokenId: bigint, originalAddress: string, newAddress: string] & {tokenId: bigint, originalAddress: string, newAddress: string})>(
        abi, '0xde55f075ebd46256cd6bd57d8fb53e0406f687db372e90ae8c18e72be46f5c16'
    ),
    PaymentAddressMigrated: new LogEvent<([tokenId: bigint, originalAddress: string, newAddress: string, originalPaymentAddress: string, newPaymentAddress: string] & {tokenId: bigint, originalAddress: string, newAddress: string, originalPaymentAddress: string, newPaymentAddress: string})>(
        abi, '0x806ccd3ad4c360726b134c8c9d1ce9842006fbcf915e66449802d74b608bed84'
    ),
    SelfDestruct: new LogEvent<([owner: string] & {owner: string})>(
        abi, '0xd3747e9bfbfe48316cef75f276e53ab68e800a3fa1a0d4540245a64b85c25988'
    ),
    TokenCreatorPaymentAddressSet: new LogEvent<([fromPaymentAddress: string, toPaymentAddress: string, tokenId: bigint] & {fromPaymentAddress: string, toPaymentAddress: string, tokenId: bigint})>(
        abi, '0x296490d14aadeb9208962e029edf126e34fe835b4ed9dc8c91602df4d0476695'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    adminAccountMigration: new Func<[ownedTokenIds: Array<bigint>, originalAddress: string, newAddress: string, signature: string], {ownedTokenIds: Array<bigint>, originalAddress: string, newAddress: string, signature: string}, []>(
        abi, '0x4d670663'
    ),
    adminAccountMigrationForPaymentAddresses: new Func<[paymentAddressTokenIds: Array<bigint>, paymentAddressFactory: string, paymentAddressCallData: string, addressLocationInCallData: bigint, originalAddress: string, newAddress: string, signature: string], {paymentAddressTokenIds: Array<bigint>, paymentAddressFactory: string, paymentAddressCallData: string, addressLocationInCallData: bigint, originalAddress: string, newAddress: string, signature: string}, []>(
        abi, '0x3d78bede'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    baseURI: new Func<[], {}, string>(
        abi, '0x6c0360eb'
    ),
    burn: new Func<[tokenId: bigint], {tokenId: bigint}, []>(
        abi, '0x42966c68'
    ),
    collectionFactory: new Func<[], {}, string>(
        abi, '0xcf25a2fd'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getFeeBps: new Func<[_: bigint], {}, Array<bigint>>(
        abi, '0x0ebd4c7f'
    ),
    getFeeRecipients: new Func<[tokenId: bigint], {tokenId: bigint}, Array<string>>(
        abi, '0xb9c4d9fb'
    ),
    getHasMintedCID: new Func<[tokenCID: string], {tokenCID: string}, boolean>(
        abi, '0xfe102cda'
    ),
    getRoyalties: new Func<[tokenId: bigint], {tokenId: bigint}, ([recipients: Array<string>, feesInBasisPoints: Array<bigint>] & {recipients: Array<string>, feesInBasisPoints: Array<bigint>})>(
        abi, '0xbb3bafd6'
    ),
    getTokenCreatorPaymentAddress: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xec5f752e'
    ),
    initialize: new Func<[_creator: string, _name: string, _symbol: string], {_creator: string, _name: string, _symbol: string}, []>(
        abi, '0x90657147'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    latestTokenId: new Func<[], {}, bigint>(
        abi, '0x8c0e8349'
    ),
    maxTokenId: new Func<[], {}, bigint>(
        abi, '0x91ba317a'
    ),
    mint: new Func<[tokenCID: string], {tokenCID: string}, bigint>(
        abi, '0xd85d3d27'
    ),
    mintAndApprove: new Func<[tokenCID: string, operator: string], {tokenCID: string, operator: string}, bigint>(
        abi, '0x6933e79a'
    ),
    mintWithCreatorPaymentAddress: new Func<[tokenCID: string, tokenCreatorPaymentAddress: string], {tokenCID: string, tokenCreatorPaymentAddress: string}, bigint>(
        abi, '0xd2c0fa5a'
    ),
    mintWithCreatorPaymentAddressAndApprove: new Func<[tokenCID: string, tokenCreatorPaymentAddress: string, operator: string], {tokenCID: string, tokenCreatorPaymentAddress: string, operator: string}, bigint>(
        abi, '0x7860ca2d'
    ),
    mintWithCreatorPaymentFactory: new Func<[tokenCID: string, paymentAddressFactory: string, paymentAddressCallData: string], {tokenCID: string, paymentAddressFactory: string, paymentAddressCallData: string}, bigint>(
        abi, '0x29f87c38'
    ),
    mintWithCreatorPaymentFactoryAndApprove: new Func<[tokenCID: string, paymentAddressFactory: string, paymentAddressCallData: string, operator: string], {tokenCID: string, paymentAddressFactory: string, paymentAddressCallData: string, operator: string}, bigint>(
        abi, '0x9b78fdd9'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    royaltyInfo: new Func<[tokenId: bigint, salePrice: bigint], {tokenId: bigint, salePrice: bigint}, ([receiver: string, royaltyAmount: bigint] & {receiver: string, royaltyAmount: bigint})>(
        abi, '0x2a55205a'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, _data: string], {from: string, to: string, tokenId: bigint, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    selfDestruct: new Func<[], {}, []>(
        abi, '0x9cb8a26a'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenCreator: new Func<[_: bigint], {}, string>(
        abi, '0x40c1a064'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    updateBaseURI: new Func<[baseURIOverride: string], {baseURIOverride: string}, []>(
        abi, '0x931688cb'
    ),
    updateMaxTokenId: new Func<[_maxTokenId: bigint], {_maxTokenId: bigint}, []>(
        abi, '0x686db1c2'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    baseURI(): Promise<string> {
        return this.eth_call(functions.baseURI, [])
    }

    collectionFactory(): Promise<string> {
        return this.eth_call(functions.collectionFactory, [])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getFeeBps(arg0: bigint): Promise<Array<bigint>> {
        return this.eth_call(functions.getFeeBps, [arg0])
    }

    getFeeRecipients(tokenId: bigint): Promise<Array<string>> {
        return this.eth_call(functions.getFeeRecipients, [tokenId])
    }

    getHasMintedCID(tokenCID: string): Promise<boolean> {
        return this.eth_call(functions.getHasMintedCID, [tokenCID])
    }

    getRoyalties(tokenId: bigint): Promise<([recipients: Array<string>, feesInBasisPoints: Array<bigint>] & {recipients: Array<string>, feesInBasisPoints: Array<bigint>})> {
        return this.eth_call(functions.getRoyalties, [tokenId])
    }

    getTokenCreatorPaymentAddress(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getTokenCreatorPaymentAddress, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    latestTokenId(): Promise<bigint> {
        return this.eth_call(functions.latestTokenId, [])
    }

    maxTokenId(): Promise<bigint> {
        return this.eth_call(functions.maxTokenId, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    royaltyInfo(tokenId: bigint, salePrice: bigint): Promise<([receiver: string, royaltyAmount: bigint] & {receiver: string, royaltyAmount: bigint})> {
        return this.eth_call(functions.royaltyInfo, [tokenId, salePrice])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenCreator(arg0: bigint): Promise<string> {
        return this.eth_call(functions.tokenCreator, [arg0])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}

# シャトルブリッジ

！[シャトルバナー](/resources/banner.png)

シャトルはテラ-イーサリアム橋です。現在、TerraアセットはTerraネットワークとEthereumネットワーク間でのみ送信でき、[ホワイトリスト](#erc20-contracts)アセットの転送のみをサポートしています。

## 目次

-[シャトルブリッジ](#shuttle-bridge)
  -[目次](#table-of-contents)
  -[実装](#implementations)
  -[コンポーネント](#components)
  -[中継料](#relaying-fee)

## 実装

-[イーサリアム契約](./Contracts)
-[イーサリアムサイドシャトル](./eth)
-[テラサイドシャトル](./terra)

## コンポーネント

-[Ethereum Asset](./ETH_ASSET.md)
-[Terra Asset](./TERRA_ASSET.md)

## 中継料
シャトルは、TerraからEthereum/BSCにアセットを転送する場合にのみ料金を請求し、数量は「max($ 1、0.1％* amount)」として計算されます。 ** $ 1の値よりもわずかな金額の取引は無視されます。**

## トークンを追加する方法は？

### テラトークンのサポート
1. [Ethereum] WrappedTokenコントラクトをデプロイし、コントラクトコードを確認します
2. [Ethereum]所有権を適切なミンターアドレスに譲渡します(ミンターアドレスは[ここ](TERRA_ASSET.md#erc20-契約)にあります)

### イーサリアムトークンのサポート
1. [Ethereum] [vETH](contracts/vETH.sol)や[bETH](contracts/bETH.sol)などのShuttleVaultコントラクトをERC20トークンアドレスでデプロイします
2. [Ethereum]所有権を適切なミンターアドレスに譲渡します(ミンターアドレスは[ここ](TERRA_ASSET.md#erc20-契約)にあります)
3. [Terra] minterをトラッキングアドレスに設定してcw20トークンコントラクトをデプロイします(トラッキングアドレスは[ここ](TERRA_ASSET.md#terra--ethereum--bsc--hmy)にあります)
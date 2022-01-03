# イーサリアムアセットブリッジ

ERC20トークンは、対応するボールトコントラクトがデプロイされている場合にのみTerraネットワークに中継できます。

## Table of Contents

- [Ethereum Asset Bridge](#ethereum-asset-bridge)
  - [Table of Contents](#table-of-contents)
  - [ERC20 Contracts](#erc20-contracts)
  - [ETH Vault Contracts](#eth-vault-contracts)
  - [Terra CW20 Contracts](#terra-cw20-contracts)
  - [Usage Instructions](#usage-instructions)
    - [Terra => Ethereum](#terra--ethereum)
      - [CW20 Tokens](#cw20-tokens)
    - [Ethereum => Terra](#ethereum--terra)


## ERC20 Contracts
| asset | mainnet                                    | ropsten                                    |
| ----- | ------------------------------------------ | ------------------------------------------ |
| bETH  | 0x707F9118e33A9B8998beA41dd0d46f38bb963FC8 | 0xA60100d5e12E9F83c1B04997314cf11685A618fF |

## ETH Vault Contracts

| asset | mainnet                                    | ropsten                                    |
| ----- | ------------------------------------------ | ------------------------------------------ |
| bETH  | 0xF9dcf31EE6EB94AB732A43c2FbA1dC6179c98965 | 0xDD7e8f8047D78bB103FAb4bAc1259Da207Da3861 |

## Terra CW20 Contracts

| asset | mainnet                                      | bombay-12                                    |
| ----- | -------------------------------------------- | -------------------------------------------- |
| bETH  | terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun | terra19mkj9nec6e3y5754tlnuz4vem7lzh4n0lc2s3l |

## 使用説明書

**注:**シャトルで使用できるのは、認識された(上記の)アセットのみです。 このドキュメントに記載されていない資産を送信すると、資金が永久に失われます。

### テラ=>イーサリアム

シャトルを使用してTerraからEthereumにアセットを転送するには、メモフィールドが宛先チェーンの受信者アドレスに設定されているトランザクション内でアセットを書き込みます。

#### CW20トークン

ラップされたERC20(= CW20)アセットは、 `MsgExecuteContract`を使用してトークンコントラクトを呼び出すことによって送信する必要があります。

** HandleMsg JSON:**

```json
{
  "burn": {
    "amount": "100000000"
  }
}
```

** MsgExecuteContractを含むトランザクション**:

次のトランザクションは、100個のvETHトークンを `bombay-12`の` terra1t849fxw7e8ney35mxemh4h3ayea4zf77dslwna`からEthereumメインネットの `0x320bc76961fb4e2a0e2e86d43d4b9d13b4985b8f`に書き込みます。

```json
{
  "type": "core/StdTx",
  "value": {
    "msg": [
      {
        "type": "wasm/MsgExecuteContract",
        "value": {
          "sender": "terra1t849fxw7e8ney35mxemh4h3ayea4zf77dslwna",
          "contract": "terra10wtgtg7m22e9hpyhqmfj7zvapnp2uv5m44x375",
          "execute_msg": "eyJidXJuIjogeyJhbW91bnQiOiAiMTAwMCJ9fQ==",
          "coins": []
        }
      }
    ],
    "fee": { ... },
    "signatures": [ ... ],
    "memo": "0x320bc76961fb4e2a0e2e86d43d4b9d13b4985b8f"
  }
}
```

トランザクションの例:

-Terra Tx:

  https://finder.terra.money/bombay-12/tx/9B25831560D88B021C97496B63D0B849112945F81AFE1FE0023F4F1B25FD51DC

  https://bombay-lcd.terra.dev/txs/9B25831560D88B021C97496B63D0B849112945F81AFE1FE0023F4F1B25FD51DC

-イーサリアムTx:

  https://ropsten.etherscan.io/tx/0x348e30304506b05ac4c3b42670cd568b4d6d630e3e6816803e92e462df41b10e

### イーサリアム=>テラ

>シャトルは、txを中継する前に7ブロックの確認を待ちます。

**ボールトコントラクトの「書き込み」操作を実行する前に、まずERC20トークン転送許容量を増やす必要があります。**

bech32でデコードされたテラアドレスを使用して、対応するボールトコントラクトの `burn(uint256 amount、bytes32 to)`を実行します
`burn( '1000000000000000000'、 '0x890d71d9e7031a9a09b82c214dba08a413e133a5000000000000000000000000')`。

Terraアドレスは20バイトの定数長であるため、 `burn( 'amount'、 'unbech32(TerraAddress)' + '0' * 24)`を意味します。

元)

-イーサリアムTx:

  https://ropsten.etherscan.io/tx/0x8c0142615f290369d7dd7c95c105ca40368fc3b64db97c7523427ab13ce86236

-Terra Tx:

  https://finder.terra.money/bombay-12/tx/53E4270D0C87AA663E524973FB26614A5601013D22EE292096514702C1622B82
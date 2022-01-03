# 以太坊资产桥

ERC20 代币只有在部署了相应的金库合约后才能中继到 Terra 网络。

## 目录

- [以太坊资产桥](#ethereum-asset-bridge)
   - [目录](#table-of-contents)
   - [ERC20 合约](#erc20-contracts)
   - [ETH Vault 合约](#eth-vault-contracts)
   - [Terra CW20 合约](#terra-cw20-contracts)
   - [使用说明](#usage-instructions)
     - [Terra => Ethereum](#terra--ethereum)
       - [CW20 代币](#cw20-tokens)
     - [以太坊 => Terra](#ethereum--terra)

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

## 使用说明

**注意:** 只有经认可的资产(如上所列)才能与 Shuttle 一起使用。 发送本文档中未提及的资产将导致资金永久损失。

### Terra => 以太坊

要使用 Shuttle 将资产从 Terra 转移到以太坊，请在将备注字段设置为目标链上的收件人地址的交易中销毁资产。

#### CW20 Tokens

包装的 ERC20(= CW20) 资产必须通过使用 `MsgExecuteContract` 调用代币合约来发送。

**HandleMsg JSON:**

```json
{
  "burn": {
    "amount": "100000000"
  }
}
```

**包含 MsgExecuteContract 的交易**:

以下交易从`bombay-12`上的`terra1t849fxw7e8ney35mxemh4h3ayea4zf77dslwna`到`0x320bc76961fb4e2a0e2e86d43d4b9d18b495`上的100个vETH代币在以太坊mainb495上燃烧

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

交易示例:

- Terra Tx:

  https://finder.terra.money/bombay-12/tx/9B25831560D88B021C97496B63D0B849112945F81AFE1FE0023F4F1B25FD51DC

  https://bombay-lcd.terra.dev/txs/9B25831560D88B021C97496B63D0B849112945F81AFE1FE0023F4F1B25FD51DC

- 以太坊交易:

  https://ropsten.etherscan.io/tx/0x348e30304506b05ac4c3b42670cd568b4d6d630e3e6816803e92e462df41b10e

### 以太坊 => Terra

> Shuttle 在中继 tx 之前等待 7 个区块确认。

**在执行金库合约的‘销毁’操作之前，需要先增加ERC20代币转移额度。**

使用 bech32 解码的 terra 地址执行相应保险库合约的 `burn(uint256 amount, bytes32 to)`
`烧伤('1000000000000000000'，'0x890d71d9e7031a9a09b82c214dba08a413e133a5000000000000000000000000')`。

Terra 地址有 20 个字节的恒定长度，因此它意味着 `burn('amount', 'unbech32(TerraAddress)' + '0' * 24)`。

前任)

- 以太坊交易:

  https://ropsten.etherscan.io/tx/0x8c0142615f290369d7dd7c95c105ca40368fc3b64db97c7523427ab13ce86236

- Terra Tx:

  https://finder.terra.money/bombay-12/tx/53E4270D0C87AA663E524973FB26614A5601013D22EE292096514702C1622B82
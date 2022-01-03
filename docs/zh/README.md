# 穿梭桥

![穿梭旗帜](/resources/banner.png)

Shuttle 是一个 Terra-Ethereum 桥。目前只允许在 Terra 和 Ethereum 网络之间发送 Terra 资产，并且只支持转移 [whitelisted](#erc20-contracts) 资产。

## 目录

- [穿梭桥](#shuttle-bridge)
  - [目录](#table-of-contents)
  - [实现](#implementations)
  - [组件](#components)
  - [中继费](#relaying-fee)

## 实现

- [以太坊合约](./contracts)
- [以太坊侧穿梭机](./eth)
- [Terra side Shuttle](./terra)

## 组件

- [以太坊资产](./ETH_ASSET.md)
- [Terra Asset](./TERRA_ASSET.md)

## 中继费
Shuttle 仅收取从 Terra 到 Ethereum/BSC 的资产转移费用，数量计算为`max($1, 0.1% * amount)`。 **金额小于 1 美元的交易将被忽略。**

## 如何添加令牌？

### Terra 令牌支持
1.【以太坊】部署WrappedToken合约并验证合约代码
2. [Ethereum] 将所有权转移到适当的铸币厂地址(铸币厂地址可以在 [这里](TERRA_ASSET.md#erc20-contracts) 中找到)

### 以太坊代币支持
1. [Ethereum] 使用您的 ERC20 代币地址部署 ShuttleVault 合约，如 [vETH](contracts/vETH.sol) 或 [bETH](contracts/bETH.sol)
2. [Ethereum] 将所有权转移到适当的铸币厂地址(铸币厂地址可以在 [这里](TERRA_ASSET.md#erc20-contracts) 中找到)
3. [Terra] 部署cw20代币合约，设置minter为追踪地址(追踪地址可以在[这里](TERRA_ASSET.md#terra--ethereum--bsc--hmy))
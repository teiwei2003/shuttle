# 穿梭以太坊合约

## 设置环境
```
$ cp ./.env_example ./.env
```

## 如何部署
```
$ npm install truffle -g
$ npm install

# Deploy contracts
$ truffle migrate --network ropsten
```

## 如何互动
```
$ truffle console --network ropsten

# In truffle console
>> const wLuna = await WrappedLuna.deployed();
>> wLuna.mint('0xabed2612bdd59218e72edda5cc69ddc429937407', '10000000000000000000000')
>> wLuna.balanceOf('0xabed2612bdd59218e72edda5cc69ddc429937407')
>> wLuna.burn('1000000000000000000', '0x59ea5499dec9e792469b36777ade3d267b5127de')

```
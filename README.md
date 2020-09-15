<h1 align="center">Monorepo-apigee :arrows_counterclockwise: </h1>
<br/><br/>

This is a simple monorepo to test [Apigee](https://cloud.google.com/apigee) token validaton

## :pushpin: Technologies:
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [Typescript](https://www.typescriptlang.org/)

## :clipboard: Usage:

### Local config

Use YARN

``` 
git clone https://github.com/Luryy/monorepo-apigee
cd monorepo-apigee
```

Starting login

```
cd packages/ms-login
yarn dev:server
```

Starting private
```
ycd packages/ms-lprivate
yarn dev:server
```

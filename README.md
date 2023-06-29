# designsystem-icons

[GitHub](https://github.com/xpadev-net/designsystem-icons) [npm](https://www.npmjs.com/package/@xpadev-net/designsystem-icons)

デジタル庁が提供している[行政文脈向けのアイコンセット](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons/)をReactコンポーネント化したライブラリです

[イラストレーション・アイコン素材利用規約](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons/terms_of_use/) の元で提供されているアイコンの構造を一部Reactコンポーネント用に修正したものです

## インストール

```bash
npm install @xpadev-net/designsystem-icons
```
```bash
yarn add @xpadev-net/designsystem-icons
```
```bash
pnpm add @xpadev-net/designsystem-icons
```

## 使い方
各アイコンはnamed exportされています  
アイコン名は元ファイル名に基づいており、末尾が `hoge_fill.icon` の場合は `HogeIcon` 、 `huga_line.svg` の場合は `HugaOutlinedIcon` となります  

propsはSVG標準のpropsに加え、`color`を指定でき、`color`は`style`属性の`fill`プロパティとして適用されます

## 例
```tsx
import { ArrowLeftIcon } from "@xpadev-net/designsystem-icons";

const Component = () => {
  return (
    <div>
      <ArrowLeftIcon color={"red"}/>
    </div>
  );
};
```

## ライセンス
アイコンはデジタル庁の [イラストレーション・アイコン素材利用規約](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons/terms_of_use/) の元で提供されています  
このライブラリ自体はMITライセンスで公開しています  

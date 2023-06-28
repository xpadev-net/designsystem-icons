# designsystem-icons

デジタル庁が提供している行政文脈向けのアイコンセットをReactコンポーネント化したライブラリです

アイコンは [イラストレーション・アイコン素材利用規約](https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons/terms_of_use/) の元で提供されているものをReactコンポーネント用に構造を一部修正したものです

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
propsは `className` と `color` を指定でき、 `className` は svg に直接適用され、`color` は `style` プロパティの ます

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
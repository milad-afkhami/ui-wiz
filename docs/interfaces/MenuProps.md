[UIWiz](../README.md) / [Exports](../modules.md) / MenuProps

# Interface: MenuProps

## Hierarchy

- `Pick`\<[`PopoverProps`](PopoverProps.md), `"isOpen"` \| `"handleClose"`\>

  ↳ **`MenuProps`**

## Table of contents

### Properties

- [handleClose](MenuProps.md#handleclose)
- [isOpen](MenuProps.md#isopen)
- [items](MenuProps.md#items)

### Methods

- [onClickItem](MenuProps.md#onclickitem)

## Properties

### handleClose

• **handleClose**: `NoneToVoidFunction`

#### Inherited from

Pick.handleClose

#### Defined in

[src/components/Popover/index.tsx:10](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Popover/index.tsx#L10)

---

### isOpen

• **isOpen**: `boolean`

#### Inherited from

Pick.isOpen

#### Defined in

[src/components/Popover/index.tsx:9](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Popover/index.tsx#L9)

---

### items

• **items**: `MenuItemParams`[]

#### Defined in

[src/components/Menu/index.tsx:14](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Menu/index.tsx#L14)

## Methods

### onClickItem

▸ **onClickItem**(`item`): `void`

#### Parameters

| Name   | Type                 |
| :----- | :------------------- |
| `item` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/components/Menu/index.tsx:13](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Menu/index.tsx#L13)

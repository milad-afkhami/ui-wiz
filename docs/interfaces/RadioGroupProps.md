[UIWiz](../README.md) / [Exports](../modules.md) / RadioGroupProps

# Interface: RadioGroupProps

## Table of contents

### Properties

- [direction](RadioGroupProps.md#direction)
- [items](RadioGroupProps.md#items)
- [name](RadioGroupProps.md#name)
- [onChange](RadioGroupProps.md#onchange)
- [selected](RadioGroupProps.md#selected)
- [title](RadioGroupProps.md#title)

## Properties

### direction

• `Optional` **direction**: `Nullishable`\<`undefined` \| `FlexDirection`\>

#### Defined in

[src/components/RadioGroup/index.tsx:12](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L12)

---

### items

• **items**: `Omit`\<`RadioGroupItemProps`, `"onClick"` \| `"name"` \| `"selected"`\>[]

#### Defined in

[src/components/RadioGroup/index.tsx:9](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L9)

---

### name

• **name**: `string`

#### Defined in

[src/components/RadioGroup/index.tsx:8](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L8)

---

### onChange

• **onChange**: (`value`: `Nullable`\<`string` \| `number`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name    | Type                               |
| :------ | :--------------------------------- |
| `value` | `Nullable`\<`string` \| `number`\> |

##### Returns

`void`

#### Defined in

[src/components/RadioGroup/index.tsx:11](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L11)

---

### selected

• **selected**: `Nullable`\<`string` \| `number`\>

#### Defined in

[src/components/RadioGroup/index.tsx:10](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L10)

---

### title

• `Optional` **title**: `string`

#### Defined in

[src/components/RadioGroup/index.tsx:7](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L7)

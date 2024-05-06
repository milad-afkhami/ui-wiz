[UIWiz](../README.md) / [Exports](../modules.md) / InputProps

# Interface: InputProps

## Hierarchy

- `Partial`\<`Omit`\<`HTMLInputElement`, `"size"` \| `"type"`\>\>

  ↳ **`InputProps`**

## Table of contents

### Properties

- [endAdornment](InputProps.md#endadornment)
- [hasSuccessState](InputProps.md#hassuccessstate)
- [hideCaret](InputProps.md#hidecaret)
- [label](InputProps.md#label)
- [onBlur](InputProps.md#onblur)
- [onChange](InputProps.md#onchange)
- [onClear](InputProps.md#onclear)
- [onFocus](InputProps.md#onfocus)
- [onIconClick](InputProps.md#oniconclick)
- [onSubmit](InputProps.md#onsubmit)
- [size](InputProps.md#size)
- [startAdornment](InputProps.md#startadornment)
- [state](InputProps.md#state)
- [type](InputProps.md#type)

## Properties

### endAdornment

• `Optional` **endAdornment**: `string` \| [`IconProps`](IconProps.md) \| `FC`\<{}\>

#### Defined in

[src/components/Input/props.ts:30](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L30)

---

### hasSuccessState

• `Optional` **hasSuccessState**: `boolean`

#### Defined in

[src/components/Input/props.ts:28](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L28)

---

### hideCaret

• `Optional` **hideCaret**: `boolean`

#### Defined in

[src/components/Input/props.ts:27](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L27)

---

### label

• `Optional` **label**: `string`

#### Defined in

[src/components/Input/props.ts:15](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L15)

---

### onBlur

• `Optional` **onBlur**: `EventHandler`

#### Defined in

[src/components/Input/props.ts:21](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L21)

---

### onChange

• `Optional` **onChange**: `ChangeEventHandler`

#### Defined in

[src/components/Input/props.ts:20](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L20)

---

### onClear

• `Optional` **onClear**: `NoneToVoidFunction`

#### Defined in

[src/components/Input/props.ts:25](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L25)

---

### onFocus

• `Optional` **onFocus**: `EventHandler`

#### Defined in

[src/components/Input/props.ts:22](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L22)

---

### onIconClick

• `Optional` **onIconClick**: `NoneToVoidFunction`

#### Defined in

[src/components/Input/props.ts:26](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L26)

---

### onSubmit

• `Optional` **onSubmit**: (`value`: `string`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

##### Returns

`void`

#### Defined in

[src/components/Input/props.ts:24](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L24)

---

### size

• `Optional` **size**: `"lg"` \| `"md"` \| `"sm"`

#### Defined in

[src/components/Input/props.ts:13](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L13)

---

### startAdornment

• `Optional` **startAdornment**: `string` \| [`IconProps`](IconProps.md) \| `FC`\<{}\>

#### Defined in

[src/components/Input/props.ts:29](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L29)

---

### state

• `Optional` **state**: `Object`

#### Type declaration

| Name       | Type                    |
| :--------- | :---------------------- |
| `message?` | `string`                |
| `type?`    | `"error"` \| `"helper"` |

#### Defined in

[src/components/Input/props.ts:16](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L16)

---

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

#### Defined in

[src/components/Input/props.ts:14](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/props.ts#L14)

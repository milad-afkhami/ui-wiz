[UIWiz](README.md) / Exports

# UIWiz

## Table of contents

### Interfaces

- [AlertProps](interfaces/AlertProps.md)
- [BottomSheetProps](interfaces/BottomSheetProps.md)
- [ButtonGroupProps](interfaces/ButtonGroupProps.md)
- [ButtonProps](interfaces/ButtonProps.md)
- [CheckboxProps](interfaces/CheckboxProps.md)
- [ClickableAreaProps](interfaces/ClickableAreaProps.md)
- [DividerProps](interfaces/DividerProps.md)
- [DrawerProps](interfaces/DrawerProps.md)
- [IconButtonProps](interfaces/IconButtonProps.md)
- [IconProps](interfaces/IconProps.md)
- [InputProps](interfaces/InputProps.md)
- [MenuProps](interfaces/MenuProps.md)
- [PopoverProps](interfaces/PopoverProps.md)
- [RadioGroupProps](interfaces/RadioGroupProps.md)
- [ToastProps](interfaces/ToastProps.md)

### Type Aliases

- [AccordionItemProps](modules.md#accordionitemprops)
- [AccordionProps](modules.md#accordionprops)
- [AgentBasedOverlayProps](modules.md#agentbasedoverlayprops)
- [BreadcrumbProps](modules.md#breadcrumbprops)
- [ChipProps](modules.md#chipprops)
- [ModalProps](modules.md#modalprops)
- [SpinnerProps](modules.md#spinnerprops)
- [SwitchProps](modules.md#switchprops)
- [TabProps](modules.md#tabprops)
- [TextAreaProps](modules.md#textareaprops)

### Variables

- [toast](modules.md#toast)

### Functions

- [Accordion](modules.md#accordion)
- [AccordionItem](modules.md#accordionitem)
- [AgentBasedOverlay](modules.md#agentbasedoverlay)
- [Alert](modules.md#alert)
- [BottomSheet](modules.md#bottomsheet)
- [Breadcrumb](modules.md#breadcrumb)
- [Button](modules.md#button)
- [ButtonGroup](modules.md#buttongroup)
- [Checkbox](modules.md#checkbox)
- [Chip](modules.md#chip)
- [ClickableArea](modules.md#clickablearea)
- [Divider](modules.md#divider)
- [Drawer](modules.md#drawer)
- [Icon](modules.md#icon)
- [IconButton](modules.md#iconbutton)
- [Input](modules.md#input)
- [Menu](modules.md#menu)
- [Modal](modules.md#modal)
- [Popover](modules.md#popover)
- [RadioGroup](modules.md#radiogroup)
- [Spinner](modules.md#spinner)
- [Switch](modules.md#switch)
- [Tab](modules.md#tab)
- [TextArea](modules.md#textarea)
- [Toast](modules.md#toast-1)

## Type Aliases

### AccordionItemProps

Ƭ **AccordionItemProps**: `Object`

#### Type declaration

| Name              | Type                 |
| :---------------- | :------------------- |
| `__isOpen__?`     | `boolean`            |
| `label`           | `string`             |
| `onClick?`        | `NoneToVoidFunction` |
| `secondaryLabel?` | `string`             |

#### Defined in

[src/components/Accordion/atoms/Item.tsx:14](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Accordion/atoms/Item.tsx#L14)

---

### AccordionProps

Ƭ **AccordionProps**: `Object`

#### Type declaration

| Name             | Type                                                                      |
| :--------------- | :------------------------------------------------------------------------ |
| `children`       | `ReactElement`\<[`AccordionItemProps`](modules.md#accordionitemprops)\>[] |
| `openItemIndex?` | `number`                                                                  |

#### Defined in

[src/components/Accordion/index.tsx:6](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Accordion/index.tsx#L6)

---

### AgentBasedOverlayProps

Ƭ **AgentBasedOverlayProps**: [`ModalProps`](modules.md#modalprops) & [`BottomSheetProps`](interfaces/BottomSheetProps.md)

#### Defined in

[src/components/AgentBasedOverlay/index.tsx:8](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/AgentBasedOverlay/index.tsx#L8)

---

### BreadcrumbProps

Ƭ **BreadcrumbProps**: `Object`

#### Type declaration

| Name    | Type                            |
| :------ | :------------------------------ |
| `items` | [`Item`, ...Item[], `LastItem`] |

#### Defined in

[src/components/Breadcrumb/index.tsx:6](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Breadcrumb/index.tsx#L6)

---

### ChipProps

Ƭ **ChipProps**: `Object`

#### Type declaration

| Name             | Type                                                                                                                                                                                                                                                                         |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon?`          | \{ `color`: [`IconProps`](interfaces/IconProps.md)[``"color"``] ; `name`: [`IconProps`](interfaces/IconProps.md)[``"name"``] ; `size`: [`IconProps`](interfaces/IconProps.md)[``"size"``] ; `type`: `"icon"` } \| \{ `alt`: `string` ; `src`: `string` ; `type`: `"image"` } |
| `onCancelClick?` | `VoidFunction`                                                                                                                                                                                                                                                               |
| `text`           | `string`                                                                                                                                                                                                                                                                     |
| `variant`        | `"filled"` \| `"outlined"`                                                                                                                                                                                                                                                   |

#### Defined in

[src/components/Chip/index.tsx:6](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Chip/index.tsx#L6)

---

### ModalProps

Ƭ **ModalProps**: \{ `cta?`: [`ButtonProps`](interfaces/ButtonProps.md) \| [`ButtonProps`](interfaces/ButtonProps.md)[] ; `isOpen`: `boolean` ; `onClose?`: `NoneToVoidFunction` ; `panelProps?`: `DivProps` ; `size?`: `"sm"` \| `"md"` ; `title?`: `string` } & \{ `onBackClick`: `NoneToVoidFunction` ; `step`: `number` } \| \{ `onBackClick?`: `never` ; `step?`: `never` }

#### Defined in

[src/components/Modal/props.ts:5](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Modal/props.ts#L5)

---

### SpinnerProps

Ƭ **SpinnerProps**: `Object`

#### Type declaration

| Name        | Type                                  |
| :---------- | :------------------------------------ |
| `contrast?` | `boolean`                             |
| `size?`     | `"xsm"` \| `"sm"` \| `"md"` \| `"lg"` |

#### Defined in

[src/components/Spinner/index.tsx:4](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Spinner/index.tsx#L4)

---

### SwitchProps

Ƭ **SwitchProps**: `Object`

#### Type declaration

| Name        | Type                             |
| :---------- | :------------------------------- |
| `checked?`  | `boolean`                        |
| `disabled?` | `boolean`                        |
| `onChange?` | (`checked`: `boolean`) => `void` |
| `text?`     | `string`                         |

#### Defined in

[src/components/Switch/index.tsx:10](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Switch/index.tsx#L10)

---

### TabProps

Ƭ **TabProps**: `Object`

#### Type declaration

| Name                        | Type                          |
| :-------------------------- | :---------------------------- |
| `defaultSelectedItemIndex?` | `number`                      |
| `items`                     | `TabItem`[]                   |
| `onChange?`                 | (`index`: `number`) => `void` |

#### Defined in

[src/components/Tab/index.tsx:18](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Tab/index.tsx#L18)

---

### TextAreaProps

Ƭ **TextAreaProps**: `TextareaHTMLAttributes`\<`unknown`\> & `Pick`\<[`InputProps`](interfaces/InputProps.md), `"name"` \| `"value"` \| `"state"` \| `"label"` \| `"size"` \| `"placeholder"` \| `"onChange"` \| `"onBlur"`\> & \{ `rows?`: `number` }

#### Defined in

[src/components/TextArea/props.ts:4](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/TextArea/props.ts#L4)

## Variables

### toast

• `Const` **toast**: `Toast`

#### Defined in

[src/utils/toast.ts:9](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/utils/toast.ts#L9)

## Functions

### Accordion

▸ **Accordion**(`props`): `Element`

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `props` | [`AccordionProps`](modules.md#accordionprops) |

#### Returns

`Element`

#### Defined in

[src/components/Accordion/index.tsx:11](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Accordion/index.tsx#L11)

---

### AccordionItem

▸ **AccordionItem**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                                                         | Description                                                                                                                           |
| :------------------------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | `PropsWithChildren`\<[`AccordionItemProps`](modules.md#accordionitemprops)\> | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                                        | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Accordion/atoms/Item.tsx:21](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Accordion/atoms/Item.tsx#L21)

---

### AgentBasedOverlay

▸ **AgentBasedOverlay**(`props`, `deprecatedLegacyContext?`): `ReactNode`

A kit that decides to render a content inside of a **Modal** or a **BottomSheet** Kit based on user agent.

#### Parameters

| Name                       | Type                                                                                 | Description                                                                                                                           |
| :------------------------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | `PropsWithChildren`\<[`AgentBasedOverlayProps`](modules.md#agentbasedoverlayprops)\> | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                                                | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/AgentBasedOverlay/index.tsx:11](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/AgentBasedOverlay/index.tsx#L11)

---

### Alert

▸ **Alert**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                     | Description                                                                                                                           |
| :------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`AlertProps`](interfaces/AlertProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                    | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Alert/index.tsx:11](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Alert/index.tsx#L11)

---

### BottomSheet

▸ **BottomSheet**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                                                        | Description                                                                                                                           |
| :------------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | `PropsWithChildren`\<[`BottomSheetProps`](interfaces/BottomSheetProps.md)\> | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                                       | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/BottomSheet/index.tsx:12](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/BottomSheet/index.tsx#L12)

---

### Breadcrumb

▸ **Breadcrumb**(`props`): `Element`

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `props` | [`BreadcrumbProps`](modules.md#breadcrumbprops) |

#### Returns

`Element`

#### Defined in

[src/components/Breadcrumb/index.tsx:10](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Breadcrumb/index.tsx#L10)

---

### Button

▸ **Button**(`props`): `ReactNode`

#### Parameters

| Name    | Type                                                                                |
| :------ | :---------------------------------------------------------------------------------- |
| `props` | [`ButtonProps`](interfaces/ButtonProps.md) & `RefAttributes`\<`HTMLButtonElement`\> |

#### Returns

`ReactNode`

#### Defined in

[src/components/Button/index.tsx:10](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Button/index.tsx#L10)

---

### ButtonGroup

▸ **ButtonGroup**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                                 | Description                                                                                                                           |
| :------------------------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`ButtonGroupProps`](interfaces/ButtonGroupProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/ButtonGroup/index.tsx:18](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/ButtonGroup/index.tsx#L18)

---

### Checkbox

▸ **Checkbox**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                           |
| :--------------- | :--------------------------------------------- |
| `«destructured»` | [`CheckboxProps`](interfaces/CheckboxProps.md) |

#### Returns

`Element`

#### Defined in

[src/components/Checkbox/index.tsx:13](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Checkbox/index.tsx#L13)

---

### Chip

▸ **Chip**(`props`): `Element`

#### Parameters

| Name    | Type                                |
| :------ | :---------------------------------- |
| `props` | [`ChipProps`](modules.md#chipprops) |

#### Returns

`Element`

#### Defined in

[src/components/Chip/index.tsx:20](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Chip/index.tsx#L20)

---

### ClickableArea

▸ **ClickableArea**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                                                            |
| :--------------- | :------------------------------------------------------------------------------ |
| `«destructured»` | `PropsWithChildren`\<[`ClickableAreaProps`](interfaces/ClickableAreaProps.md)\> |

#### Returns

`Element`

#### Defined in

[src/components/ClickableArea.tsx:12](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/ClickableArea.tsx#L12)

---

### Divider

▸ **Divider**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                         | Description                                                                                                                           |
| :------------------------- | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`DividerProps`](interfaces/DividerProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                        | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Divider/index.tsx:11](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Divider/index.tsx#L11)

---

### Drawer

▸ **Drawer**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                                              | Description                                                                                                                           |
| :------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | `PropsWithChildren`\<[`DrawerProps`](interfaces/DrawerProps.md)\> | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                             | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Drawer/index.tsx:14](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Drawer/index.tsx#L14)

---

### Icon

▸ **Icon**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                   | Description                                                                                                                           |
| :------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`IconProps`](interfaces/IconProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                  | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Icon/index.tsx:8](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Icon/index.tsx#L8)

---

### IconButton

▸ **IconButton**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                               | Description                                                                                                                           |
| :------------------------- | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`IconButtonProps`](interfaces/IconButtonProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                              | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/IconButton/index.tsx:20](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/IconButton/index.tsx#L20)

---

### Input

▸ **Input**(`props`): `ReactNode`

#### Parameters

| Name    | Type                                                                                  |
| :------ | :------------------------------------------------------------------------------------ |
| `props` | [`InputProps`](interfaces/InputProps.md) & {} & `RefAttributes`\<`HTMLInputElement`\> |

#### Returns

`ReactNode`

#### Defined in

[src/components/Input/index.tsx:17](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Input/index.tsx#L17)

---

### Menu

▸ **Menu**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                   | Description                                                                                                                           |
| :------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`MenuProps`](interfaces/MenuProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                  | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Menu/index.tsx:17](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Menu/index.tsx#L17)

---

### Modal

▸ **Modal**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                                         | Description                                                                                                                           |
| :------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | `PropsWithChildren`\<[`ModalProps`](modules.md#modalprops)\> | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                        | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Modal/index.tsx:13](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Modal/index.tsx#L13)

---

### Popover

▸ **Popover**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                                                | Description                                                                                                                           |
| :------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | `PropsWithChildren`\<[`PopoverProps`](interfaces/PopoverProps.md)\> | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                                               | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Popover/index.tsx:13](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Popover/index.tsx#L13)

---

### RadioGroup

▸ **RadioGroup**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                               | Description                                                                                                                           |
| :------------------------- | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`RadioGroupProps`](interfaces/RadioGroupProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                              | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/RadioGroup/index.tsx:15](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/RadioGroup/index.tsx#L15)

---

### Spinner

▸ **Spinner**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                      | Description                                                                                                                           |
| :------------------------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`SpinnerProps`](modules.md#spinnerprops) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                     | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Spinner/index.tsx:10](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Spinner/index.tsx#L10)

---

### Switch

▸ **Switch**(`props`): `Element`

#### Parameters

| Name    | Type                                    |
| :------ | :-------------------------------------- |
| `props` | [`SwitchProps`](modules.md#switchprops) |

#### Returns

`Element`

#### Defined in

[src/components/Switch/index.tsx:20](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Switch/index.tsx#L20)

---

### Tab

▸ **Tab**(`props`): `Element`

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `props` | [`TabProps`](modules.md#tabprops) |

#### Returns

`Element`

#### Defined in

[src/components/Tab/index.tsx:24](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Tab/index.tsx#L24)

---

### TextArea

▸ **TextArea**(`props`): `ReactNode`

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                         |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | `TextareaHTMLAttributes`\<`unknown`\> & `Pick`\<[`InputProps`](interfaces/InputProps.md), `"size"` \| `"onBlur"` \| `"onChange"` \| `"name"` \| `"label"` \| `"value"` \| `"placeholder"` \| `"state"`\> & \{ `rows?`: `number` } & {} & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactNode`

#### Defined in

[src/components/TextArea/index.tsx:9](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/TextArea/index.tsx#L9)

---

### Toast

▸ **Toast**(`props`, `deprecatedLegacyContext?`): `ReactNode`

#### Parameters

| Name                       | Type                                     | Description                                                                                                                           |
| :------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `props`                    | [`ToastProps`](interfaces/ToastProps.md) | -                                                                                                                                     |
| `deprecatedLegacyContext?` | `any`                                    | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

#### Defined in

[src/components/Toast/index.tsx:25](https://github.com/milad-afkhami/ui-wiz/blob/2a8f5d9551e165b307f5679441be984038f224a2/src/components/Toast/index.tsx#L25)

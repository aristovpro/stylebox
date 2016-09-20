## Spacing

### Connecting

```scss
@include space(margin,    1);
@include space(padding, 0.5);
```

### Usage

Class name | Property
-----------|-----------
`.space-out-1`                      | `{ margin: 1rem }`
`.space-out-1-t`                    | `{ margin-top: 1rem }`
`.space-out-1-l`                    | `{ margin-left: 1rem }`
`.space-out-1-b`                    | `{ margin-bottom: 1rem }`
`.space-out-1-r`                    | `{ margin-right: 1rem }`
`.space-out-1-v`                    | `{ margin: 1rem 0 }`
`.space-out-1-h`                    | `{ margin: 0 1rem }`
`.space-out-1-l-children`           | `> * { margin-left: 1rem }`
`.space-out-1-l-children-not_first` | `> :not(:first-child) { margin-left: 1rem }`
`.space-in-1`                       | `{ padding: 1rem }`
...                                 | ...

## Shadows

### Connecting

```scss
@include shadow('black', #000);
@include shadow('black', #000, inset);
```

### Usage

```scss
  .shadow-[direction]-[color]-[side]
```

Option | Required | Values
-------|----------|-------
Direction | `true`  | in / out
Color     | `true`  | Color name from first mixin argument
Side      | `false` | t (top) / r (right) / b (bottom) / l (left) / v (vertical) / h (horizontal)

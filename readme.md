## Spacing

### Connecting
```scss
@include space(margin,    1);
@include space(padding, 0.5);
```
### Usage
Class name | Property
-----------|-----------
`.space-out-1`                   | `{ margin: 1rem }`
`.space-out-1-t`                 | `{ margin-top: 1rem }`
`.space-out-1-l`                 | `{ margin-left: 1rem }`
`.space-out-1-b`                 | `{ margin-bottom: 1rem }`
`.space-out-1-r`                 | `{ margin-right: 1rem }`
`.space-out-1-v`                 | `{ margin: 1rem 0 }`
`.space-out-1-h`                 | `{ margin: 0 1rem }`
`.space-out-1-l-child`           | `> * { margin-left: 1rem }`
`.space-out-1-l-child-not_first` | `> :not(:first-child) { margin-left: 1rem }`
...                              | ...

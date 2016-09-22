## Spacing

### Connecting

```scss
@include space($min, $max, $step: 0.25);
```

### Usage

```scss
  .space-[direction]-[value]-[side]
  .space-children-[value]-[side]
```

Option | Required | Values
-------|----------|-------
Direction       | `true`  | in / out
Value           | `false` | Value of margin or padding (rem)
Side            | `false` | t (top) / r (right) / b (bottom) / l (left) / v (vertical) / h (horizontal)
Side (children) | `true`  | v (vertical) / h (horizontal)

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

## Buttons

### Connecting

```scss
@include button($name, $background, $color, $radius) {
  @include button--hover($background, $color) {
    ...
  }
  @include button--active($background, $color) {
    ...
  }
  @include button--disabled($background, $color) {
    ...
  }
  @include button--icon($normal, $hover, $active, $disabled) {
    ...
  }
}
@include button-size($size, $padding) {
  ...
}
@include button-reduction($size, $name);
```

`button` — base mixin

`button--hover`, `button--active`, `button--disabled`, `button--icon` — optional mixins,
determines button style and behavior

`button-size` — defines button size variant

`button-reduction` — defines reduction for combination of size and name

### Example

#### SCSS code

```scss
@include button('orange', #FF8D00, #FFF, 0.25rem) {
  @include button--hover(#FFA445);
  @include button--active(#E57700);
  @include button--disabled(null, #000) {
    box-shadow: 0 0 0 1px #F00;
  }
  @include button--icon(#000, null, null, #FFF);
}
@include button-size('m', 0.5rem 1rem);
@include button-reduction('m', 'orange');
```

#### Available class names

```html
.button-orange
.button-size-m
.btn-m-orange
```

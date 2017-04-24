## Spacing

### Configuration

```scss
@include sb-space($min, $max, $step: 0.25);
```

### Usage

```scss
  .margin-[value]-[side]
  .padding-[value]-[side]
  .children-margin-[value]-[side]
```

Option          | Required | Values
----------------|----------|-------
Value           | `false`  | Value of margin or padding (rem)
Side            | `false`  | t (top) / r (right) / b (bottom) / l (left) / v (vertical) / h (horizontal)
Side (children) | `true`   | v (vertical) / h (horizontal)

## Shadows

### Configuration

```scss
@include sb-shadow('black', #000);
@include sb-shadow('black', #000, inset);
```

### Usage

```scss
  .shadow-[direction]-[color]-[side]
```

Option    | Required | Values
----------|----------|-------
Direction | `true`   | in / out
Color     | `true`   | Color name from first mixin argument
Side      | `false`  | t (top) / r (right) / b (bottom) / l (left) / v (vertical) / h (horizontal)

## Buttons

### Configuration

```scss
@include sb-button($name, $background, $color, $radius) {
  @include sb-button--hover($background, $color) {
    ...
  }
  @include sb-button--active($background, $color) {
    ...
  }
  @include sb-button--disabled($background, $color) {
    ...
  }
  @include sb-button--icon($normal, $hover, $active, $disabled) {
    ...
  }
}
@include sb-button-size($size, $padding) {
  ...
}
@include sb-button-reduction($size, $name);
```

`button` — base mixin

`button--hover`, `button--active`, `button--disabled`, `button--icon` — optional mixins,
determines button style and behavior

`button-size` — defines button size variant

`button-reduction` — defines reduction for combination of size and name

### Example

#### SCSS code

```scss
@include sb-button('orange', #FF8D00, #FFF, 0.25rem) {
  @include sb-button--hover(#FFA445);
  @include sb-button--active(#E57700);
  @include sb-button--disabled(null, #000) {
    box-shadow: 0 0 0 1px #F00;
  }
  @include sb-button--icon(#000, null, null, #FFF);
}
@include sb-button-size('m', 0.5rem 1rem);
@include sb-button-reduction('m', 'orange');
```

#### Available class names

```html
.button-orange
.button-size-m
.btn-m-orange
```

## Layout

### Usage

```scss
.[direction]-[main]-[cross]
```

Option    | Required | Values
----------|----------|-------
Direction |  `true`  | row / col
Main      |  `true`  | start / center / end / around / between
Cross     |  `true`  | start / center / end / stretch

## Spacing

### Configuration

```scss
$sb-space-start: 0    !default;
$sb-space-end:   8    !default;
$sb-space-step:  0.25 !default;
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

## Background, foreground, edge

### Configuration

```scss
@include sb-color('black', #000);
```

### Usage

```scss
.fg-[color]
.fg-hover-[color]
.fg-links-[color]
.fg-links-hover-[color]

.bg-[color]
.bg-hover-[color]

.edge-[direction]-[color]-[side]
```

Option    | Required | Values
----------|----------|-------
Direction | `true`   | in / out
Color     | `true`   | Color name from first mixin argument
Side      | `false`  | t (top) / r (right) / b (bottom) / l (left) / v (vertical) / h (horizontal)

## Sizing

### Configuration

```scss
$sb-width-start: 0   !default;
$sb-width-end:   8   !default;
$sb-width-step:  0.5 !default;
```

### Usage

```scss
.width-[value]
```

Option | Required | Values
-------|----------|-------
Width  |  `true`  | Value of width (rem)

## Position

### Usage

```scss
.[position]-[main]-[cross]
```

Option    | Required | Values
----------|----------|-------
Position  | `true`   | abs / fix
Main      | `false`  | t (top) / r (right) / b (bottom) / l (left) / fit / center
Cross     | `false`  | l (left) / r (right)

## Radius

### Configuration

```scss
$sb-radius: 3px !default;
```

### Usage

```scss
.radius-[main]-[cross]
```

Option    | Required | Values
----------|----------|-------
Main      | `false`  | t (top) / r (right) / b (bottom) / l (left)
Cross     | `false`  | l (left) / r (right)

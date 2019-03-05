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
$sb-space-start:    0;
$sb-space-end:      8;
$sb-space-step:  0.25;
```

### Usage

```scss
.margin-[side]-[value]
.padding-[side]-[value]
.gaps-[side]-[value]
```

Option          | Required | Values
----------------|----------|-------
Value           | `true`  | Value of margin or padding (rem)
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
$sb-width-start:   0;
$sb-width-end:     8;
$sb-width-step:  0.5;
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
$sb-radius: 3px;
```

### Usage

```scss
.radius-[main]-[cross]
```

Option    | Required | Values
----------|----------|-------
Main      | `false`  | t (top) / r (right) / b (bottom) / l (left)
Cross     | `false`  | l (left) / r (right)

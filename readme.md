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

## Edges

### Configuration

```scss
@include sb-edge('black', #000, ['inset']);
```

### Usage

```scss
.edge-[direction]-[color]-[side]
```

Option    | Required | Values
----------|----------|-------
Direction | `true`   | in / out
Color     | `true`   | Color name from first mixin argument
Side      | `false`  | t (top) / r (right) / b (bottom) / l (left) / v (vertical) / h (horizontal)

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

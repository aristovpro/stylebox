## About

**Stylebox** — is a CSS library based on SCSS. It was developed for creating flexible and extendable web applications without the writing of numerous style classes. Stylebox based on 2 main conceptions:

- Convenient layouting with classes based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox);
- Inheritance of Atomic CSS principles that imply using of classes consisting of minimum CSS properties.

## Motivation

Stylebox's set of classes was build according to experience based on the development of plenty of web applications. It helps to reduce the amount of CSS code and allows to reuse styles with minimum efforts, that goes well with such frameworks as React.

For better understanding, let's create a simple user card with Stylebox. Firstly let's create a common layout without styles:

```html
<div>
  <div>Photo</div>
  <div>
    <p><strong>User Name</strong></p>
    <p>@nickname</p>
  </div>
</div>
```

As the next step, let's add styles from Stylebox:

```html
<div class="row-start-center gaps-h-0x5 padding-0x5">
  <div class="circle bg-cover" style="width: 2.5rem; background-image: url(images/photo.jpg);"></div>
  <div class="col-start-stretch">
    <p><strong>Winnie The Pooh</strong></p>
    <p>@winnie</p>
  </div>
</div>
```

The result:

<div class="row-start-center gaps-h-0x5">
  <div class="circle bg-cover" style="width: 2.5rem; background-image: url(images/photo.jpg);"></div>
  <div class="col-start-stretch">
    <p><strong>Winnie The Pooh</strong></p>
    <p>@winnie</p>
  </div>
</div>

---

## Docs

### Atomic classes

```css
.relative             { position: relative }
.absolute             { position: absolute }
.static               { position: static }
.fixed                { position: fixed }
.block                { display: block }
.inline               { display: inline }
.inline-block         { display: inline-block }
.inline-table         { display: inline-table }
.table                { display: table }
.table-row            { display: table-row }
.table-column         { display: table-column }
.table-cell           { display: table-cell }
.flex                 { display: flex }
.float-none           { float: none }
.float-left           { float: left }
.float-right          { float: right }
.clear-none           { clear: none }
.clear-both           { clear: both }
.clear-left           { clear: left }
.clear-right          { clear: right }
.visibility-hidden    { visibility: hidden }
.visibility-visible   { visibility: visible }
.visibility-collapse  { visibility: collapse }
.table-fixed          { table-layout: fixed }
.valign-top           { vertical-align: top }
.valign-middle        { vertical-align: middle }
.valign-bottom        { vertical-align: bottom }
.valign-baseline      { vertical-align: baseline }
.text-left            { text-align: left }
.text-right           { text-align: right }
.text-center          { text-align: center }
.text-justify         { text-align: justify }
.text-decoration-none { text-decoration: none }
.text-overline        { text-decoration: overline }
.text-underline       { text-decoration: underline }
.text-line-through    { text-decoration: line-through }
.text-transform-none  { text-transform: none }
.text-uppercase       { text-transform: uppercase }
.text-lowercase       { text-transform: lowercase }
.text-capitalize      { text-transform: capitalize }
.weight-normal        { font-weight: normal }
.weight-bold          { font-weight: bold }
.weight-bolder        { font-weight: bolder }
.weight-lighter       { font-weight: lighter }
.font-style-normal    { font-style: normal }
.wspace-normal        { white-space: normal }
.wspace-nowrap        { white-space: nowrap }
.width-25p            { width: 25% }
.width-50p            { width: 50% }
.width-75p            { width: 75% }
.width-100p           { width: 100% }
.width-100vw          { width: 100vw }
.height-100p          { height: 100% }
.height-100vh         { height: 100vh }
.cursor-pointer       { cursor: pointer }
.pointer-events-none  { pointer-events: none }
.flex-1               { flex: 1 }
.flex-wrap            { flex-wrap: wrap }
.flex-nowrap          { flex-wrap: nowrap }
.flex-shrink-none     { flex-shrink: 0 }
.overflow-hidden      { overflow: hidden }
```


### Helper classes

```scss
.[col|row]-[start|center|end|around|between]-[start|center|end|stretch]
```

Classes based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). The classes are applied to a parent element and set the flow for its children. The 1st param sets the direction, the 2nd param describes how to align the children on the main axis, the 3rd defines how to align the children on the secondary axis.

---

```scss
.[abs|fix]
.[abs|fix]-[t|b|l|r]
.[abs|fix]-[t|b]-[l|r]
.[abs|fix]-fit
.[abs|fix]-center
.[abs|fix]-center-[x|y]
```

Classes for absolute and fixed positioning. Classes that have the `fit` suffix stretch an element to which they are applied to the full width and height of its parent.

---

```scss
$sb-radius: 3px !default;

.rounded
.rounded-[t|b|l|r]
.rounded-[t|b]-[l|r]
```

Classes for corners rounding. It's up to you to change the default value of the `$sb-radius` variable.

---

```scss
$sb-space-start: 0    !default;
$sb-space-end:   8    !default;
$sb-space-step:  0.25 !default;

.margin-[$VALUE]
.margin-[t|b|l|r|v|h]-[$VALUE]
.padding-[$VALUE]
.padding-[t|b|l|r|v|h]-[$VALUE]
.gaps-[v|h]-[$VALUE]
```

Classes for idents setting. It's possible to change the range of values with the help of variables. The unit of measurement is `rem`. In fractional values the dot is replaced with `x` for example `.margin-v-1x25`. The `.gaps` classes are added to the parent element, specifying padding between its children.

---

```css
.overflow-x-scroll
```

Adds a scrollbar for the x-axis, but hides for the y-axis.

---

```css
.overflow-y-scroll
```

Adds a scrollbar for the y-axis, but hides for the x-axis.

---

```css
.text-ellipsis
```

Обрезает текстового строку выходящую за границы родительского тега.

Cuts a text string that extends beyond boundaries of its parent element.

---

```css
.square
```

Creates a square using the pseudo-class `:: before`.
Its size can be adjusted using the `width` property.

---

```css
.circle
```

Like `.square`, but rounds corners by 50%.

---

```css
.bg-cover
```

The class defines a combination of properties that set `background-image` as the cover.

---

```css
.bg-contain
```

The class defines a combination of properties to fit `background-image` to the larger side.

---

```css
.stretch-to-viewport
```

The combination of the `.col-start-stretch` helper and the `min-height: 100vh` property.

---

```css
.block-100p
```

The combination of the `.block` and` .width-100p` atoms.

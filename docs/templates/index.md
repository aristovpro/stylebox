## About

**Stylebox** — CSS библиотека, написанная на SCSS. Разработана для создания гибких и легко расширяемых веб-приложений, без необходимости написания большого количества стилей. Stylebox включает две основных концепции:

- Удобное построение разметки с помощью классов, основанных на [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox);
- Наследование принципов Atomic CSS, подразумевающих использование классов, несущих минимальное количество CSS-свойств.

## Motivation

Этот набор стилей получен из опыта разработки множества web-приложений. Он помогает сократить написание css-кода и позволяет максимально переиспользовать стили, что отлично сочетается с компонентами такого фреймворка, как React. Для лучшего понимания, давайте создадим простую карточку пользователя, используя Stylebox. Для начала создадим общую разметку без стилей:

```html
<div>
  <div>Photo</div>
  <div>
    <p><strong>User Name</strong></p>
    <p>@nickname</p>
  </div>
</div>
```

Добавим стили из Stylebox:

```html
<div class="row-start-center gaps-h-0x5 padding-0x5">
  <div class="circle bg-cover" style="width: 2.5rem; background-image: url(images/photo.jpg);"></div>
  <div class="col-start-stretch">
    <p><strong>Winnie The Pooh</strong></p>
    <p>@winnie</p>
  </div>
</div>
```

Результат:

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

Классы основанные на [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). Добавляются на родительский элемент и задают поток дочерних. Первый параметр задает направление, второй выравнивание по основной оси, третий выравнивание по второстепенной.

---

```scss
.[abs|fix]
.[abs|fix]-[t|b|l|r]
.[abs|fix]-[t|b]-[l|r]
.[abs|fix]-fit
.[abs|fix]-center
.[abs|fix]-center-[x|y]
```

Классы для абсолютного и фиксированного позиционирования. Классы с суффиксом `fit` растягивают элемент на всю ширину и высоту родительского.

---

```scss
$sb-radius: 3px !default;

.rounded
.rounded-[t|b|l|r]
.rounded-[t|b]-[l|r]
```

Классы для скругления углов. Можно поменять стандартное значение переменной.

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

Классы для задания отступов. С помощью переменных можно изменить диапазон значений. Единица измерений `rem`. В дробных значениях точка заменяется на `x`, например `.margin-v-1x25`. Классы `.gaps` добавляются на родительский тег, задавая отступы между дочерними элементами.

---

```css
.overflow-x-scroll
```

Добавляет скроллбар по оси `x`, но скрывает по оси `y`.

---

```css
.overflow-y-scroll
```

Добавляет скроллбар по оси `y`, но скрывает по оси `x`.

---

```css
.text-ellipsis
```

Обрезает текстового строку выходящую за границы родительского тега.

---

```css
.square
```

Создает квадрат, используя псевдокласс `::before`.
Размер регулируется свойством `width`.

---

```css
.circle
```

Как `.square`, но скругляет углы на 50%.

---

```css
.bg-cover
```

Класс задает комбинацию свойств, для задания `background-image` как обложки.

---

```css
.bg-contain
```

Класс задает комбинацию свойств, для вписания `background-image` по большей стороне.

---

```css
.stretch-to-viewport
```

Комбинация хелпера `.col-start-stretch` и свойства `min-height: 100vh`.

---

```css
.block-100p
```

Комбинация атомов `.block` и `.width-100p`.

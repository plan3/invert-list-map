# invert-list-map

Inverts map where values are in for of lists. Eg:

```
const result = require('invert-list-map')({ a: ['b', 'c'], d: [], e: ['f'] });
```

result would become:

```
{
    b: 'a',
    c: 'a',
    f: 'e'
}
```

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

## Conflicts resolution

By default the call:

```
require('invert-list-map')({a: ['b'], c: ['b']});
```

will result in a conflict and failure to invert the map. You can override that behaviour, by calling: 

```
require('invert-list-map', false)({a: ['b'], c: ['b']});
```

this will produce:
```
{
    b: ['a', 'c']
}
```

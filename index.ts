
const internal = 'foo'
const INTERNAL2 = 'foo'
export const EXTERNAL = 'bar'


function barFooFoo() {
  return 'foo'
}

interface Foobar { }
type Foo = string

enum SomeEnum {
  FOO = 'foo',
}

const object = {
  value: 1,
  anotherValue: 2,
  PascalCase: 2,
  'foo-bar': 3,
}

class SomeClass {

  static readonly FOO_BAR = 'foo'

  static someStaticProp = 'foo'

  private foo: string
  readonly bar: string

  constructor() { }

  public getFoo(): string {
    return this.foo
  }

  static doThings() {
    return null
  }

  get barGetter(): string {
    return this.bar
  }

  @Decorator()
  protected async doAsyncThings() { }
}

export function Decorator() {
  return (target, key, descriptor) => {
    return descriptor.value
  }
}

export const SomeDecorator = createParamDecorator()

function createParamDecorator(): Function {
  return (target, key, index) => {
    return 1
  }
}


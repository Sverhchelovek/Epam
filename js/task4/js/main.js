let a = Array(100).fill().map(() => Math.round(Math.random() * 100));

var cmp = ( mask ) => {
    mask = mask
      .replace(/(.{2})/ig, '$1 ')
      .trim()
      .split(' ')
      .map( (_, bit) => ({ bit: (_) => (_ >> bit) & 1, order: Number(_[0]), direction: _[1] }) )
      .sort( (a, b) => a.order-b.order )
    return (a, b) => {
      const m = mask.find( _ => _.bit(a) !== _.bit(b) );
      return m && ((m.bit(a) < m.bit(b) && m.direction === 'u') || (m.bit(a) > m.bit(b) && m.direction === 'd'))
    }
}
cmp('7u3d1u2u4d6d5u8d')

async function slozno = (a) =>{
  newSort()

}
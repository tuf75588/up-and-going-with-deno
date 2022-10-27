const text = new TextDecoder('utf-8')
const file = await Deno.readFile('input.txt');
console.log(text.decode(file))
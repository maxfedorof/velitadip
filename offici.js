let fieldDefinition = { type: 'text', title: 'Name' };
let globalConfig = { defaultTitle: 'Untitled Field' };

console.log(defaultTitle(fieldDefinition, globalConfig)); // Outputs: 'Name'

console.log(defaultTitle({ type: 'number' }, globalConfig)); // Outputs: 'Untitled Field'

console.log(defaultTitle(null, globalConfig)); // Outputs: 'Untitled'

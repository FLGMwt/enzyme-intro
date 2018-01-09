export const WithExport = () => null;

console.log({withExport: WithExport.name});

const WithoutExport = () => null;

console.log({withoutExport: WithoutExport.name});
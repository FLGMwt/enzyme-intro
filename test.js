export const withExport = () => null;
const withoutExport = () => null;

console.log({
  withExport: withExport.name,
  withoutExport: withoutExport.name,
});

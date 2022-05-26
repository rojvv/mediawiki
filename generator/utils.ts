export function resolveType(type: string) {
  if (["string", "boolean"].includes(type)) {
    return type;
  }
  if (type == "integer") {
    return "number";
  }
  if (Array.isArray(type)) {
    return type.map((v) => v.replace(/"/g, '\\"')).map((v) => `"${v}"`).join(
      " | ",
    ) + " | string";
  }
  return "string";
}

export function resolveIdentifier(name: string, toUpperCase?: boolean) {
  return (toUpperCase ? name[0].toUpperCase() : name[0]) +
    name.replace(/\-/g, "_").slice(1).replace(
      /-([a-z])/g,
      (_, g) => g.toUpperCase(),
    );
}

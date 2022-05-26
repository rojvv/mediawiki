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

export function resolveIdentifier(name: string) {
  if (["do", "delete", "import"].includes(name)) {
    return `${name}_`;
  }
  return name.replace(/\-/g, "_");
}

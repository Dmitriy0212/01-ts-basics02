function toUserObjects(users: string[]): { id: number; name: string }[] {
  return users.map((name, index) => ({
    id: index + 1,
    name,
  }));
}

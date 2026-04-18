type User = {
  username: string;
  age: number;
  city?: string;
};

type Role = "admin" | "user" | "guest";

function createUserCard(user: User, role: Role): string {
  return `${user.username} (${user.age}) — ${role} from ${
    user.city ?? "Unknown"
  }`;
}

type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user: User = {
  name: "Alice",
};

console.log(user);

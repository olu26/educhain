import Array "mo:base/Array";

actor UserManagement {
  type User = {
    id: Text;
    email: Text;
    role: Text;
    name: Text;
  };

  stable var users : [User] = [];

  public func registerUser(id: Text, email: Text, role: Text, name: Text) : async Bool {
    let user = { id = id; email = email; role = role; name = name };
    users := Array.append(users, [user]);
    return true;
  };

  public query func getUserById(id: Text) : async ?User {
    switch (Array.find<User>(users, func(u) { u.id == id })) {
      case (?user) return ?user;
      case null return null;
    }
  };

  public query func getAllUsers() : async [User] {
    return users;
  };
};

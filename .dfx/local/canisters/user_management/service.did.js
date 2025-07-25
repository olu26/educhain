export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'role' : IDL.Text,
    'email' : IDL.Text,
  });
  return IDL.Service({
    'getAllUsers' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'getUserById' : IDL.Func([IDL.Text], [IDL.Opt(User)], ['query']),
    'registerUser' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };

export const formValidate = (useremail, userpassword) => {
  const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(
    useremail
  );
  const pass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      userpassword
    );

  if (!email) return "Email is not valid";
  if (!pass) return "Password is not valid";

  return null;
};

export const signupUser = (user) => {
  return(
    $.ajax({
      method: "POST",
      url: "api/users",
      data: {user},
    })
  );
};


export const loginUser = (user) => (
  $.ajax({
    method: "POST",
    url: "api/session",
    data: {user},
  })
);


export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/session",
  })
);

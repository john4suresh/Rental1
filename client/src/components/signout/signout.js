export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch("/signout", {
      method: "GET",
    })
      .then((response) => {
        console.log("Signout", response);
      })
      .catch((err) => console.log(err));
  }
};

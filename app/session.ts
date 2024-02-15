export const session = {
  user: {
    name: "",
    id: "",
    role: "",
  },
};

export const loadSession = () => {
  try {
    const raw = JSON.parse(localStorage.getItem("user") || "{}");
    if (
      typeof raw === "object" &&
      Array.isArray(raw["user_role_user_role_id_userTom_user"])
    ) {
      session.user.role =
        raw[
          "user_role_user_role_id_userTom_user"
        ][0]?.m_role?.name?.toLowerCase();
    }

    if (!session.user.role) {
      logout();
    }
  } catch (e) {
    logout();
  }
};

export const logout = () => {
  for (const [k, v] of Object.entries(session.user)) {
    (session.user as any)[k] = "";
  }
  navigate("/login");
};

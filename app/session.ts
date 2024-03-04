export const session = {
  user: {
    name: "",
    id: "",
    role: "",
    id_client: "",
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

    if (typeof raw === "object" && !!raw["id"]) {
      session.user.id = raw["id"];
    }

    if (typeof raw === "object" && !!raw["name"]) {
      session.user.name = raw["name"];
    }

    if (typeof raw === "object" && !!raw["id_client"]) {
      session.user.id_client = raw["id_client"];
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

export const wo_rule_eval = async (symbol: string, nominal: number) => {
  // return id wo
  if (symbol === "<") {
    if (nominal) {
      return ["2e7ae10f-4ec4-46aa-9785-38a0020ac31c"]; // id wo
    }
  }

  if (symbol === ">") {
    if (nominal) {
      return [
        "16da8a6b-256b-401e-9b62-2140f6b56805",
        "27a046ee-21ad-449a-bd8a-5bc245b9ae5c",
      ]; // id wo
    }
  }
};

export const wo_rule_line = async (id_wo_rule: string) => {
  // return id user
  return ["fdb45461-ab2e-425f-b883-63beac331e59"];
};

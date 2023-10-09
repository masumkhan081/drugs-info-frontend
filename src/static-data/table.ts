const tableView = ["drugs", "groups", "generics", "formulations", "companies"];

const tableHeaders = {
  drugs: [
    "Brand Name",
    "Generic",
    "Strength",
    "Formulation",
    "Manufacturer",
    "Group",
  ],
  generics: ["Generic Name", "Group"],
  groups: ["Group Name"],
  formulations: ["Full Name", "Short Name"],
  companies: ["Name"],
};

const drugs = [
  {
    ID: 1,
    name: "BRAND",
    generic: {
      id: 1,
      name: "gen-1",
      group: {
        id: 1,
        name: "grp name -1",
      },
    },
    strength: "Strength",
    formulation: "Form",
    manufacturer: "MAN",
  },
  {
    id: 2,
    name: "BRAND 2",
    generic: {
      id: 2,
      name: "gen-2",
      group: {
        id: 2,
        name: "grp name -2",
      },
    },
    strength: "Strength",
    formulation: "Form",
    manufacturer: "MAN",
  },
  {
    id: 3,
    name: "BRAND 3",
    generic: {
      id: 3,
      name: "gen-3",
      group: {
        id: 3,
        name: "grp name -3",
      },
    },
    strength: "Strength",
    formulation: "Form",
    manufacturer: "MAN",
  },
];
const groups = [
  {
    id: 1,
    name: "grp name",
  },
  {
    id: 2,
    name: "grp name -2",
  },
  {
    id: 3,
    name: "grp name -3",
  },
];
const generics = [
  {
    id: 1,
    name: "gen-1",
    group: {
      id: 1,
      name: "grp name -1",
    },
  },
  {
    id: 2,
    name: "gen-2",
    group: {
      id: 2,
      name: "grp name -2",
    },
  },
  {
    id: 3,
    name: "gen-3",
    group: {
      id: 3,
      name: "grp name -3",
    },
  },
];
const formulations = [
  {
    id: 1,
    name: "frm name -1",
  },
  {
    id: 2,
    name: "frm name -2",
  },
  {
    id: 3,
    name: "grp name -3",
  },
];

const companies = [
  {
    id: 1,
    name: "cmp name -1",
  },
  {
    id: 2,
    name: "cmp name -2",
  },
  {
    id: 3,
    name: "cmp name -3",
  },
];

//
//
export {
  tableView,
  tableHeaders,
  drugs,
  groups,
  generics,
  formulations,
  companies,
};

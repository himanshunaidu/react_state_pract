const versions = {
  id: 1,
  input: 1, //1: Checkboxes, 2: Multi-Select Dropdown
  title: "Version",
  filters: [
    { filter_id: 1, filter_name: 1 },
    { filter_id: 2, filter_name: 2 },
  ],
};

const languages = {
  id: 2,
  input: 1,
  title: "Language",
  filters: [
    { filter_id: 1, filter_name: "English" },
    { filter_id: 2, filter_name: "French" },
  ],
};

const filters = { versions: versions, languages: languages };

export default filters;

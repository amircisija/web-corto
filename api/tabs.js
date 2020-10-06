const Tabs = [{
    'id': 1,
    'tabItem': {
      'main': {
        'info': {
          'id': 1,
          'title': "Bakticid",
          'text_1': "Efikasan baktericid uključujući uzročnike tuberkuloze i Helicobacter pylori. Takođe djeluje na gljivice i viruse, uključujući HIV virus, virus hepatitisa A, B, C, polio-vakcinia-, adeno-, herpes simplex virus.",
          'text_2': "Efikasan baktericid uključujući uzročnike tuberkuloze i Helicobacter pylori. Takođe djeluje na gljivice i viruse, uključujući HIV virus, virus hepatitisa A, B, C, polio-vakcinia-, adeno-, herpes simplex virus.",
        },
        'table': {
          headers: [{
              text: "",
              value: "name",
            },
            {
              text: "Cijena bez PDV-a",
              value: "p1"
            },
            {
              text: "PDV",
              value: "p2"
            },
            {
              text: "Cijena sa PDV-om",
              value: "p3"
            },
          ],
          items: [{
              name: "Bakticid 5l",
              p1: "56,17",
              p2: "9,54",
              p3: "65,71",
            },
            {
              name: "Bakticid 1l",
              p1: "12,82",
              p2: "2,18",
              p3: "15,00",
            },
          ],
        },
      }
    }
  },
  {
    'id': 2,
    'tabItem': {
      'main': {
        'info': {
          'id': 2,
          'title': "Aseptan",
          'text_1': "Efikasan baktericid uključujući uzročnike tuberkuloze i Helicobacter pylori. Takođe djeluje na gljivice i viruse, uključujući HIV virus, virus hepatitisa A, B, C, polio-vakcinia-, adeno-, herpes simplex virus.",
          'text_2': "Efikasan baktericid uključujući uzročnike tuberkuloze i Helicobacter pylori. Takođe djeluje na gljivice i viruse, uključujući HIV virus, virus hepatitisa A, B, C, polio-vakcinia-, adeno-, herpes simplex virus.",
        },
        'table': {
          headers: [{
              text: "",
              value: "name",
            },
            {
              text: "Cijena bez PDV-a",
              value: "p1"
            },
            {
              text: "PDV",
              value: "p2"
            },
            {
              text: "Cijena sa PDV-om",
              value: "p3"
            },
          ],
          items: [{
              name: "Aseptan 5l",
              p1: "56,17",
              p2: "9,54",
              p3: "65,71",
            },
            {
              name: "Aseptan 1l",
              p1: "12,82",
              p2: "2,18",
              p3: "15,00",
            },
          ],
        },
      }
    }
  },
];

const getTabs = (limit) => {
  return (limit) ? Tabs.slice(0, limit) : Tabs;
};


export {
  Tabs,
  getTabs
};

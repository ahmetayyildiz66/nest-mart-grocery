interface Component {
  is: string;
  key: string;
  props: {
    [key: string]: any
  }
  slot?: Component[];
}

interface Components {
  [key: string]: Component
}

const C: Components = {
  shopByCategories: {
    is: "IconMilkDairies",
    key: "milk-dairies",
    props: {
      title: "Milks and Dairies"
    }
  },
  shopByCategories2: {
    is: "IconMilkDairies",
    key: "milk-dairies-2",
    props: {
      title: "Milks and Dairies"
    }
  }
}

export const DynamicComponents = [C.shopByCategories, C.shopByCategories2]
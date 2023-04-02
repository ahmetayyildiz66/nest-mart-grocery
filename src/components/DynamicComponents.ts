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
      title: "Milks & Dairies"
    }
  },
  drinks: {
    is: "IconDrinks",
    key: "wines-alcohol-drinks",
    props: {
      title: "Wines & Alcohol Drinks"
    }
  },
  clothes: {
    is: "IconClothes",
    key: "clothing-beauty",
    props: {
      title: "Clothing & Beauty"
    }
  },
  petFoods: {
    is: "IconPetFoods",
    key: "pet-foods",
    props: {
      title: "Pet Foods & Toy"
    }
  },
  packagedFood: {
    is: "IconPackagedFood",
    key: "packaged-food",
    props: {
      title: "Packaged fast food"
    }
  },
  bakingMaterial: {
    is: "IconBaking",
    key: "baking-material",
    props: {
      title: "Baking material"
    }
  },
  vegetables: {
    is: "IconVegetables",
    key: "vegetables",
    props: {
      title: "Vegetables & tubers"
    }
  },
  freshSeaFood: {
    is: "IconFreshSeafood",
    key: "fresh-seafood",
    props: {
      title: "Fresh Seafood"
    }
  },
}

export const DynamicComponents = [C.shopByCategories, C.drinks, C.clothes, C.petFoods, C.packagedFood, C.bakingMaterial, C.vegetables, C.freshSeaFood]
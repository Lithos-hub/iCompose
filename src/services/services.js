import CommerceDefinition from '../api/Commerce-Definition';
import FoodDefinition from '../api/Food-Definition';
import UserDefinition from '../api/User-Definition';

class Services {
  constructor() {
    this.loadTime = 250;
  }

  getDefinition(category) {
    const cat = category.value;
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          Commerce: CommerceDefinition,
          Food: FoodDefinition,
          Users: UserDefinition,
        };
        resolve(data[cat]);
      }, this.loadTime);
    });
  }
}

export default new Services();

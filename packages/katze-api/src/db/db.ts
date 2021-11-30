import { v4 as uuidv4 } from 'uuid'

import { Cat, CatInput } from '../Cat';

export class db {
  constructor(
    private cats = new Map()
  ) { }

  public createCat (cat: CatInput): Cat {
    const catId = uuidv4();

    const newCat: Cat = {
      id: catId,
      ...cat
    }
    this.cats.set(newCat.id, newCat);
    return newCat;
  }
  
  public deleteCat (catId: string) {
    return this.cats.delete(catId);
  }

  public updateCat (catId: string, newCat: CatInput) {
    if (!this.cats.has(catId)) {
      throw 'Cat not found'
    }

    this.cats.set(catId, newCat);
    return this.cats.get(catId);
  }

  public listCats (options: {
    page: number,
    limit: number
  }) {
    const cats = Array.from(this.cats.values());
    return cats.slice((options.page - 1) * options.limit, options.limit);
  }

  public searchCats (options: {
    catId?: string;
    name?: string;
    tag?: string;
  }): Array<Cat> | Cat | undefined {
    if (options.catId) {
      return this.cats.get(options.catId)
    } else {
      return undefined
    }
  }
} 


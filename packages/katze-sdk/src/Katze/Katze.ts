import { Cat, CatInput } from '../Cat';
import { ApiClient } from '../../ApiClient';

export class Katze {
  constructor(
    private apiClient = new ApiClient()
  ) {}

  create(newCat: CatInput) {
    this.apiClient.post(newCat);
  }

  delete(catId: string) {

  }

  update(catId: string, newCat: CatInput) {

  }

  async listCats(options: {
    page?: number
    limit?: number,
    searchTerm?: string
  }) {
    const { page, limit, searchTerm } = options;
    let url = 'list';
    if (page) url += `?page=${page}`;
    if (limit) url += `&limit=${limit}`
    if (searchTerm) url += `&searchTerm=${searchTerm}`
    const data = await this.apiClient.get(url);
    return data;
  }
}
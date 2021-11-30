import axios from 'axios';
const apiBaseURL = process.env.API_BASE_URL || 'https://good-lionfish-97.tunnel.dev.fusebit.io';

export class ApiClient {
  constructor() {}

  public async get(url?: string) {
    const response = await axios.get(`${apiBaseURL}/${url}`);
    const data = await response;
    return data;
  }

  public async delete () {

  }

  public async update() {
    
  }

  public async post(body:any) {
    const data = await axios.post(`${apiBaseURL}/`, body);
    return data;
  }
}
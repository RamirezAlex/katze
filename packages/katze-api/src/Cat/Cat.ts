export interface Cat {
  id: string;
  name: string;
  color?: string;
  tags?: Array<string>;
}

export interface CatInput {
  name: string;
  color?: string;
  tags?: Array<string>;
}

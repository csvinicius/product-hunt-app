export type Post = {
  id: string;
  name: string;
  tagline: string;
  url: string;
  votesCount: number;
  thumbnail: {
    url: string;
  };
};

export type OrderType = 'POPULAR' | 'NEWEST';

export type OrderProp = {
  order: OrderType;
};
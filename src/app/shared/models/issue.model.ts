import { Serializable } from './serializable.model';

export class Issue implements Serializable<Issue>{
  _id?: string;
  serial?: string;
  vol?: string;
  publishDate: Date;
  cover: string;
  articles: string[];
  createDate?: Date;
  createUser: string;
  isRelease: boolean;
  issue?: string;
  sort?: number;
  checked?: boolean;
  disabled?: boolean;

  deserialize(data: any): Issue {
    return <Issue>Object.assign({}, {
      _id: data._id,
      serial: data.serial,
      vol: data.vol,
      publishDate: data.publishDate,
      cover: data.cover,
      articles: data.articles,
      createDate: data.createDate,
      createUser: data.createUser,
      isRelease: data.isRelease,
      issue: data.issue,
      sort: data.sort
    });
  }
}

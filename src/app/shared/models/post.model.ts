import { Serializable } from './serializable.model';
import { Author } from './author.model';

export class Post implements Serializable<Post>{
  author: Author;
  authorId: string;
  authorPhotoUrl: string;
  avgCommentRating: number;
  categoryId: string;
  categoryName: string;
  comment: string;
  content: string;
  contentTypeId: string;
  contentTypeName: string;
  countOfComment: number;
  countOfEssay: number;
  email: string;
  excerpt: string;
  expedite: boolean;
  featuredMedia: Object;
  id: string;
  isBookmark: boolean;
  isComplete: boolean;
  isFeatured: boolean;
  isPrivate: boolean;
  isPublishNow: boolean;
  nextContentId: string;
  photoUrls: Array<string>;
  photos: Array<string>;
  podcastUrls: Array<string>;
  podcasts: Array<string>;
  previousContentId: string;
  publishDate: Date;
  publishEnd: Date;
  publishOn: Date;
  readNumber: number;
  relativeTopicList: Array<string>;
  relativeTopics: Array<string>;
  reviewOn: boolean;
  sponsorId: string;
  sponsorName: string;
  status: number;
  subTitle: string;
  title: string;
  unite: boolean;
  videoUrls: Array<string>;
  videos: Array<string>;
  visualEssays: Array<string>;

  deserialize(data: any): Post {
    return <Post>Object.assign({}, {
      author: data.author,
      authorId: data.authorId,
      authorPhotoUrl: data.authorPhotoUrl,
      avgCommentRating: data.avgCommentRating,
      categoryId: data.categoryId,
      categoryName: data.categoryName,
      comment: data.comment,
      content: data.content,
      contentTypeId: data.contentTypeId,
      contentTypeName: data.contentTypeName,
      countOfComment: data.countOfComment,
      countOfEssay: data.countOfEssay,
      email: data.email,
      excerpt: data.excerpt,
      expedite: data.expedite,
      featuredMedia: data.featuredMedia,
      id: data.id,
      isBookmark: data.isBookmark,
      isComplete: data.isComplete,
      isFeatured: data.isFeatured,
      isPrivate: data.isPrivate,
      isPublishNow: data.isPublishNow,
      nextContentId: data.nextContentId,
      photoUrls: data.photoUrls,
      photos: data.photos,
      podcastUrls: data.podcastUrls,
      podcasts: data.podcasts,
      previousContentId: data.previousContentId,
      publishDate: data.publishDate,
      publishEnd: data.publishEnd,
      publishOn: data.publishOn,
      readNumber: data.readNumber,
      relativeTopicList: data.relativeTopicList,
      relativeTopics: data.relativeTopics,
      reviewOn: data.reviewOn,
      sponsorId: data.sponsorId,
      sponsorName: data.sponsorName,
      status: data.status,
      subTitle: data.subTitle,
      title: data.title,
      unite: data.unite,
      videoUrls: data.videoUrls,
      videos: data.videos,
      visualEssays: data.visualEssays
    });
  }
}

export class Book {
  id: number;
  name: string;
  link: string;
  created_at: string;
  updated_at: string;
  image: string;
  authors: string;

  constructor(config) {
    this.id = config.id;
    this.name = config.attributes.content;
    this.link = config.links.self;
    this.created_at = config.attributes.created_at;
    this.updated_at = config.attributes.updated_at;
    this.image = config.attributes.display_properties.image;
    this.authors = config.relationships.authors.links.self;
  }
}

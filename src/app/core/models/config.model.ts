export interface BooksConfig {
  data: BookConfig[];
  links: BooksConfigLinks;
}

export interface BookConfig {
  id:            number;
  type:          string;
  links:         BookLink;
  attributes:    Attributes;
  relationships: Relationships;
}

export interface Attributes {
  urn:                string;
  created_at:         Date;
  updated_at:         Date;
  content:            string;
  properties:         null;
  display_properties: DisplayProperties;
}

export interface DisplayProperties {
  type:  string;
  image: string;
}

export interface BookLink {
  self: string;
}

export interface Relationships {
  authors:    Authors;
  publishers: Authors;
}

export interface Authors {
  links: AuthorsLinks;
}

export interface AuthorsLinks {
  self:    string;
  related: string;
}

export interface BooksConfigLinks {
  first: string;
  last:  string;
}

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AttachmentInput = {
  base64: Scalars['String'];
  fileName: Scalars['String'];
};

export type AttachmentUrl = {
  __typename?: 'AttachmentURL';
  fileName: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTicket: Ticket;
};


export type MutationCreateTicketArgs = {
  attachments?: InputMaybe<Array<AttachmentInput>>;
  branch: Scalars['String'];
  category: Scalars['String'];
  clickup_id?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  sub_category: Scalars['String'];
  subject: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  get: Scalars['String'];
  ticketList: Array<Ticket>;
};

export type Ticket = {
  __typename?: 'Ticket';
  _id: Scalars['String'];
  attachmentsUrl?: Maybe<Array<AttachmentUrl>>;
  branch: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  clickup_id?: Maybe<Scalars['String']>;
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  partner_db: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  sub_category?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type TicketCategory = {
  __typename?: 'TicketCategory';
  arabicName: Scalars['String'];
  name: Scalars['String'];
  subcategories: Array<TicketCategory>;
};

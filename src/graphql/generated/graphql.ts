/* eslint-disable */
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 mins 50.52 secs after the 23rd hour of Apr 12th 1985 in UTC.
   */
  DateTime: { input: any; output: any; }
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: { input: any; output: any; }
};

export type AddCantonInput = {
  flag_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AddCantonPayload = {
  __typename?: 'AddCantonPayload';
  canton?: Maybe<Array<Maybe<Canton>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCantonPayloadCantonArgs = {
  filter?: InputMaybe<CantonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CantonOrder>;
};

export type AddCanton_SubjectsInput = {
  canton?: InputMaybe<CantonRef>;
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
};

export type AddCanton_SubjectsPayload = {
  __typename?: 'AddCanton_SubjectsPayload';
  canton_Subjects?: Maybe<Array<Maybe<Canton_Subjects>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCanton_SubjectsPayloadCanton_SubjectsArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddCitizenInput = {
  lives?: InputMaybe<TownRef>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type AddCitizenPayload = {
  __typename?: 'AddCitizenPayload';
  citizen?: Maybe<Array<Maybe<Citizen>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCitizenPayloadCitizenArgs = {
  filter?: InputMaybe<CitizenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CitizenOrder>;
};

export type AddCitizen_Subject_VoteInput = {
  target?: InputMaybe<SubjectRef>;
  vote?: InputMaybe<Choice | `${Choice}`>;
  voter?: InputMaybe<CitizenRef>;
};

export type AddCitizen_Subject_VotePayload = {
  __typename?: 'AddCitizen_Subject_VotePayload';
  citizen_Subject_Vote?: Maybe<Array<Maybe<Citizen_Subject_Vote>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCitizen_Subject_VotePayloadCitizen_Subject_VoteArgs = {
  filter?: InputMaybe<Citizen_Subject_VoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddFederal_SubjectsInput = {
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
};

export type AddFederal_SubjectsPayload = {
  __typename?: 'AddFederal_SubjectsPayload';
  federal_Subjects?: Maybe<Array<Maybe<Federal_Subjects>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddFederal_SubjectsPayloadFederal_SubjectsArgs = {
  filter?: InputMaybe<Federal_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddSubjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AddSubjectPayload = {
  __typename?: 'AddSubjectPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Array<Maybe<Subject>>>;
};


export type AddSubjectPayloadSubjectArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};

export type AddTownInput = {
  located_in?: InputMaybe<CantonRef>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AddTownPayload = {
  __typename?: 'AddTownPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  town?: Maybe<Array<Maybe<Town>>>;
};


export type AddTownPayloadTownArgs = {
  filter?: InputMaybe<TownFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TownOrder>;
};

export type AddTown_SubjectsInput = {
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
  town?: InputMaybe<TownRef>;
};

export type AddTown_SubjectsPayload = {
  __typename?: 'AddTown_SubjectsPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  town_Subjects?: Maybe<Array<Maybe<Town_Subjects>>>;
};


export type AddTown_SubjectsPayloadTown_SubjectsArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddVotationInput = {
  canton_subjects?: InputMaybe<Array<InputMaybe<Canton_SubjectsRef>>>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  federal_subject?: InputMaybe<Federal_SubjectsRef>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  town_subjects?: InputMaybe<Array<InputMaybe<Town_SubjectsRef>>>;
};

export type AddVotationPayload = {
  __typename?: 'AddVotationPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  votation?: Maybe<Array<Maybe<Votation>>>;
};


export type AddVotationPayloadVotationArgs = {
  filter?: InputMaybe<VotationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotationOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']['input']>;
};

export type Canton = {
  __typename?: 'Canton';
  flag_path?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type CantonAggregateResult = {
  __typename?: 'CantonAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  flag_pathMax?: Maybe<Scalars['String']['output']>;
  flag_pathMin?: Maybe<Scalars['String']['output']>;
  nameMax?: Maybe<Scalars['String']['output']>;
  nameMin?: Maybe<Scalars['String']['output']>;
};

export type CantonFilter = {
  and?: InputMaybe<Array<InputMaybe<CantonFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CantonHasFilter | `${CantonHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<CantonFilter>;
  or?: InputMaybe<Array<InputMaybe<CantonFilter>>>;
};

export enum CantonHasFilter {
  FlagPath = 'flag_path',
  Name = 'name'
}

export type CantonOrder = {
  asc?: InputMaybe<CantonOrderable | `${CantonOrderable}`>;
  desc?: InputMaybe<CantonOrderable | `${CantonOrderable}`>;
  then?: InputMaybe<CantonOrder>;
};

export enum CantonOrderable {
  FlagPath = 'flag_path',
  Name = 'name'
}

export type CantonPatch = {
  flag_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CantonRef = {
  flag_path?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Canton_Subjects = {
  __typename?: 'Canton_Subjects';
  canton?: Maybe<Canton>;
  id: Scalars['ID']['output'];
  subjects?: Maybe<Array<Maybe<Subject>>>;
  subjectsAggregate?: Maybe<SubjectAggregateResult>;
};


export type Canton_SubjectsCantonArgs = {
  filter?: InputMaybe<CantonFilter>;
};


export type Canton_SubjectsSubjectsArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};


export type Canton_SubjectsSubjectsAggregateArgs = {
  filter?: InputMaybe<SubjectFilter>;
};

export type Canton_SubjectsAggregateResult = {
  __typename?: 'Canton_SubjectsAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Canton_SubjectsFilter = {
  and?: InputMaybe<Array<InputMaybe<Canton_SubjectsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<Canton_SubjectsHasFilter | `${Canton_SubjectsHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<Canton_SubjectsFilter>;
  or?: InputMaybe<Array<InputMaybe<Canton_SubjectsFilter>>>;
};

export enum Canton_SubjectsHasFilter {
  Canton = 'canton',
  Subjects = 'subjects'
}

export type Canton_SubjectsPatch = {
  canton?: InputMaybe<CantonRef>;
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
};

export type Canton_SubjectsRef = {
  canton?: InputMaybe<CantonRef>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
};

export enum Choice {
  Blanc = 'Blanc',
  Non = 'Non',
  Oui = 'Oui'
}

export type Citizen = {
  __typename?: 'Citizen';
  lives?: Maybe<Town>;
  password?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['ID']['output'];
};


export type CitizenLivesArgs = {
  filter?: InputMaybe<TownFilter>;
};

export type CitizenAggregateResult = {
  __typename?: 'CitizenAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  passwordMax?: Maybe<Scalars['String']['output']>;
  passwordMin?: Maybe<Scalars['String']['output']>;
};

export type CitizenFilter = {
  and?: InputMaybe<Array<InputMaybe<CitizenFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CitizenHasFilter | `${CitizenHasFilter}`>>>;
  not?: InputMaybe<CitizenFilter>;
  or?: InputMaybe<Array<InputMaybe<CitizenFilter>>>;
  user_id?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum CitizenHasFilter {
  Lives = 'lives',
  Password = 'password'
}

export type CitizenOrder = {
  asc?: InputMaybe<CitizenOrderable | `${CitizenOrderable}`>;
  desc?: InputMaybe<CitizenOrderable | `${CitizenOrderable}`>;
  then?: InputMaybe<CitizenOrder>;
};

export enum CitizenOrderable {
  Password = 'password'
}

export type CitizenPatch = {
  lives?: InputMaybe<TownRef>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CitizenRef = {
  lives?: InputMaybe<TownRef>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type Citizen_Subject_Vote = {
  __typename?: 'Citizen_Subject_Vote';
  id: Scalars['ID']['output'];
  target?: Maybe<Subject>;
  vote?: Maybe<Choice | `${Choice}`>;
  voter?: Maybe<Citizen>;
};


export type Citizen_Subject_VoteTargetArgs = {
  filter?: InputMaybe<SubjectFilter>;
};


export type Citizen_Subject_VoteVoterArgs = {
  filter?: InputMaybe<CitizenFilter>;
};

export type Citizen_Subject_VoteAggregateResult = {
  __typename?: 'Citizen_Subject_VoteAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Citizen_Subject_VoteFilter = {
  and?: InputMaybe<Array<InputMaybe<Citizen_Subject_VoteFilter>>>;
  has?: InputMaybe<Array<InputMaybe<Citizen_Subject_VoteHasFilter | `${Citizen_Subject_VoteHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<Citizen_Subject_VoteFilter>;
  or?: InputMaybe<Array<InputMaybe<Citizen_Subject_VoteFilter>>>;
};

export enum Citizen_Subject_VoteHasFilter {
  Target = 'target',
  Vote = 'vote',
  Voter = 'voter'
}

export type Citizen_Subject_VotePatch = {
  target?: InputMaybe<SubjectRef>;
  vote?: InputMaybe<Choice | `${Choice}`>;
  voter?: InputMaybe<CitizenRef>;
};

export type Citizen_Subject_VoteRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  target?: InputMaybe<SubjectRef>;
  vote?: InputMaybe<Choice | `${Choice}`>;
  voter?: InputMaybe<CitizenRef>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']['input']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  method: HttpMethod | `${HttpMethod}`;
  mode?: InputMaybe<Mode | `${Mode}`>;
  secretHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  ge?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  le?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime']['input'];
  min: Scalars['DateTime']['input'];
};

export type DeleteCantonPayload = {
  __typename?: 'DeleteCantonPayload';
  canton?: Maybe<Array<Maybe<Canton>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCantonPayloadCantonArgs = {
  filter?: InputMaybe<CantonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CantonOrder>;
};

export type DeleteCanton_SubjectsPayload = {
  __typename?: 'DeleteCanton_SubjectsPayload';
  canton_Subjects?: Maybe<Array<Maybe<Canton_Subjects>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCanton_SubjectsPayloadCanton_SubjectsArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteCitizenPayload = {
  __typename?: 'DeleteCitizenPayload';
  citizen?: Maybe<Array<Maybe<Citizen>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCitizenPayloadCitizenArgs = {
  filter?: InputMaybe<CitizenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CitizenOrder>;
};

export type DeleteCitizen_Subject_VotePayload = {
  __typename?: 'DeleteCitizen_Subject_VotePayload';
  citizen_Subject_Vote?: Maybe<Array<Maybe<Citizen_Subject_Vote>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCitizen_Subject_VotePayloadCitizen_Subject_VoteArgs = {
  filter?: InputMaybe<Citizen_Subject_VoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteFederal_SubjectsPayload = {
  __typename?: 'DeleteFederal_SubjectsPayload';
  federal_Subjects?: Maybe<Array<Maybe<Federal_Subjects>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteFederal_SubjectsPayloadFederal_SubjectsArgs = {
  filter?: InputMaybe<Federal_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteSubjectPayload = {
  __typename?: 'DeleteSubjectPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Array<Maybe<Subject>>>;
};


export type DeleteSubjectPayloadSubjectArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};

export type DeleteTownPayload = {
  __typename?: 'DeleteTownPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  town?: Maybe<Array<Maybe<Town>>>;
};


export type DeleteTownPayloadTownArgs = {
  filter?: InputMaybe<TownFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TownOrder>;
};

export type DeleteTown_SubjectsPayload = {
  __typename?: 'DeleteTown_SubjectsPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  town_Subjects?: Maybe<Array<Maybe<Town_Subjects>>>;
};


export type DeleteTown_SubjectsPayloadTown_SubjectsArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteVotationPayload = {
  __typename?: 'DeleteVotationPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  votation?: Maybe<Array<Maybe<Votation>>>;
};


export type DeleteVotationPayloadVotationArgs = {
  filter?: InputMaybe<VotationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotationOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type Federal_Subjects = {
  __typename?: 'Federal_Subjects';
  id: Scalars['ID']['output'];
  subjects?: Maybe<Array<Maybe<Subject>>>;
  subjectsAggregate?: Maybe<SubjectAggregateResult>;
};


export type Federal_SubjectsSubjectsArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};


export type Federal_SubjectsSubjectsAggregateArgs = {
  filter?: InputMaybe<SubjectFilter>;
};

export type Federal_SubjectsAggregateResult = {
  __typename?: 'Federal_SubjectsAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Federal_SubjectsFilter = {
  and?: InputMaybe<Array<InputMaybe<Federal_SubjectsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<Federal_SubjectsHasFilter | `${Federal_SubjectsHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<Federal_SubjectsFilter>;
  or?: InputMaybe<Array<InputMaybe<Federal_SubjectsFilter>>>;
};

export enum Federal_SubjectsHasFilter {
  Subjects = 'subjects'
}

export type Federal_SubjectsPatch = {
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
};

export type Federal_SubjectsRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatRange = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']['input']>;
  get?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  query?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']['input']>;
  ge?: InputMaybe<Scalars['Int64']['input']>;
  gt?: InputMaybe<Scalars['Int64']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']['input']>>>;
  le?: InputMaybe<Scalars['Int64']['input']>;
  lt?: InputMaybe<Scalars['Int64']['input']>;
};

export type Int64Range = {
  max: Scalars['Int64']['input'];
  min: Scalars['Int64']['input'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
};

export type IntRange = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCanton?: Maybe<AddCantonPayload>;
  addCanton_Subjects?: Maybe<AddCanton_SubjectsPayload>;
  addCitizen?: Maybe<AddCitizenPayload>;
  addCitizen_Subject_Vote?: Maybe<AddCitizen_Subject_VotePayload>;
  addFederal_Subjects?: Maybe<AddFederal_SubjectsPayload>;
  addSubject?: Maybe<AddSubjectPayload>;
  addTown?: Maybe<AddTownPayload>;
  addTown_Subjects?: Maybe<AddTown_SubjectsPayload>;
  addVotation?: Maybe<AddVotationPayload>;
  deleteCanton?: Maybe<DeleteCantonPayload>;
  deleteCanton_Subjects?: Maybe<DeleteCanton_SubjectsPayload>;
  deleteCitizen?: Maybe<DeleteCitizenPayload>;
  deleteCitizen_Subject_Vote?: Maybe<DeleteCitizen_Subject_VotePayload>;
  deleteFederal_Subjects?: Maybe<DeleteFederal_SubjectsPayload>;
  deleteSubject?: Maybe<DeleteSubjectPayload>;
  deleteTown?: Maybe<DeleteTownPayload>;
  deleteTown_Subjects?: Maybe<DeleteTown_SubjectsPayload>;
  deleteVotation?: Maybe<DeleteVotationPayload>;
  updateCanton?: Maybe<UpdateCantonPayload>;
  updateCanton_Subjects?: Maybe<UpdateCanton_SubjectsPayload>;
  updateCitizen?: Maybe<UpdateCitizenPayload>;
  updateCitizen_Subject_Vote?: Maybe<UpdateCitizen_Subject_VotePayload>;
  updateFederal_Subjects?: Maybe<UpdateFederal_SubjectsPayload>;
  updateSubject?: Maybe<UpdateSubjectPayload>;
  updateTown?: Maybe<UpdateTownPayload>;
  updateTown_Subjects?: Maybe<UpdateTown_SubjectsPayload>;
  updateVotation?: Maybe<UpdateVotationPayload>;
};


export type MutationAddCantonArgs = {
  input: Array<AddCantonInput>;
};


export type MutationAddCanton_SubjectsArgs = {
  input: Array<AddCanton_SubjectsInput>;
};


export type MutationAddCitizenArgs = {
  input: Array<AddCitizenInput>;
};


export type MutationAddCitizen_Subject_VoteArgs = {
  input: Array<AddCitizen_Subject_VoteInput>;
};


export type MutationAddFederal_SubjectsArgs = {
  input: Array<AddFederal_SubjectsInput>;
};


export type MutationAddSubjectArgs = {
  input: Array<AddSubjectInput>;
};


export type MutationAddTownArgs = {
  input: Array<AddTownInput>;
};


export type MutationAddTown_SubjectsArgs = {
  input: Array<AddTown_SubjectsInput>;
};


export type MutationAddVotationArgs = {
  input: Array<AddVotationInput>;
};


export type MutationDeleteCantonArgs = {
  filter: CantonFilter;
};


export type MutationDeleteCanton_SubjectsArgs = {
  filter: Canton_SubjectsFilter;
};


export type MutationDeleteCitizenArgs = {
  filter: CitizenFilter;
};


export type MutationDeleteCitizen_Subject_VoteArgs = {
  filter: Citizen_Subject_VoteFilter;
};


export type MutationDeleteFederal_SubjectsArgs = {
  filter: Federal_SubjectsFilter;
};


export type MutationDeleteSubjectArgs = {
  filter: SubjectFilter;
};


export type MutationDeleteTownArgs = {
  filter: TownFilter;
};


export type MutationDeleteTown_SubjectsArgs = {
  filter: Town_SubjectsFilter;
};


export type MutationDeleteVotationArgs = {
  filter: VotationFilter;
};


export type MutationUpdateCantonArgs = {
  input: UpdateCantonInput;
};


export type MutationUpdateCanton_SubjectsArgs = {
  input: UpdateCanton_SubjectsInput;
};


export type MutationUpdateCitizenArgs = {
  input: UpdateCitizenInput;
};


export type MutationUpdateCitizen_Subject_VoteArgs = {
  input: UpdateCitizen_Subject_VoteInput;
};


export type MutationUpdateFederal_SubjectsArgs = {
  input: UpdateFederal_SubjectsInput;
};


export type MutationUpdateSubjectArgs = {
  input: UpdateSubjectInput;
};


export type MutationUpdateTownArgs = {
  input: UpdateTownInput;
};


export type MutationUpdateTown_SubjectsArgs = {
  input: UpdateTown_SubjectsInput;
};


export type MutationUpdateVotationArgs = {
  input: UpdateVotationInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float']['input'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCanton?: Maybe<CantonAggregateResult>;
  aggregateCanton_Subjects?: Maybe<Canton_SubjectsAggregateResult>;
  aggregateCitizen?: Maybe<CitizenAggregateResult>;
  aggregateCitizen_Subject_Vote?: Maybe<Citizen_Subject_VoteAggregateResult>;
  aggregateFederal_Subjects?: Maybe<Federal_SubjectsAggregateResult>;
  aggregateSubject?: Maybe<SubjectAggregateResult>;
  aggregateTown?: Maybe<TownAggregateResult>;
  aggregateTown_Subjects?: Maybe<Town_SubjectsAggregateResult>;
  aggregateVotation?: Maybe<VotationAggregateResult>;
  getCanton?: Maybe<Canton>;
  getCanton_Subjects?: Maybe<Canton_Subjects>;
  getCitizen?: Maybe<Citizen>;
  getCitizen_Subject_Vote?: Maybe<Citizen_Subject_Vote>;
  getFederal_Subjects?: Maybe<Federal_Subjects>;
  getSubject?: Maybe<Subject>;
  getTown?: Maybe<Town>;
  getTown_Subjects?: Maybe<Town_Subjects>;
  getVotation?: Maybe<Votation>;
  queryCanton?: Maybe<Array<Maybe<Canton>>>;
  queryCanton_Subjects?: Maybe<Array<Maybe<Canton_Subjects>>>;
  queryCitizen?: Maybe<Array<Maybe<Citizen>>>;
  queryCitizen_Subject_Vote?: Maybe<Array<Maybe<Citizen_Subject_Vote>>>;
  queryFederal_Subjects?: Maybe<Array<Maybe<Federal_Subjects>>>;
  querySubject?: Maybe<Array<Maybe<Subject>>>;
  queryTown?: Maybe<Array<Maybe<Town>>>;
  queryTown_Subjects?: Maybe<Array<Maybe<Town_Subjects>>>;
  queryVotation?: Maybe<Array<Maybe<Votation>>>;
};


export type QueryAggregateCantonArgs = {
  filter?: InputMaybe<CantonFilter>;
};


export type QueryAggregateCanton_SubjectsArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
};


export type QueryAggregateCitizenArgs = {
  filter?: InputMaybe<CitizenFilter>;
};


export type QueryAggregateCitizen_Subject_VoteArgs = {
  filter?: InputMaybe<Citizen_Subject_VoteFilter>;
};


export type QueryAggregateFederal_SubjectsArgs = {
  filter?: InputMaybe<Federal_SubjectsFilter>;
};


export type QueryAggregateSubjectArgs = {
  filter?: InputMaybe<SubjectFilter>;
};


export type QueryAggregateTownArgs = {
  filter?: InputMaybe<TownFilter>;
};


export type QueryAggregateTown_SubjectsArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
};


export type QueryAggregateVotationArgs = {
  filter?: InputMaybe<VotationFilter>;
};


export type QueryGetCantonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCanton_SubjectsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCitizenArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetCitizen_Subject_VoteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFederal_SubjectsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSubjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTownArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTown_SubjectsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetVotationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQueryCantonArgs = {
  filter?: InputMaybe<CantonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CantonOrder>;
};


export type QueryQueryCanton_SubjectsArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryCitizenArgs = {
  filter?: InputMaybe<CitizenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CitizenOrder>;
};


export type QueryQueryCitizen_Subject_VoteArgs = {
  filter?: InputMaybe<Citizen_Subject_VoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryFederal_SubjectsArgs = {
  filter?: InputMaybe<Federal_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQuerySubjectArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};


export type QueryQueryTownArgs = {
  filter?: InputMaybe<TownFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TownOrder>;
};


export type QueryQueryTown_SubjectsArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryVotationArgs = {
  filter?: InputMaybe<VotationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotationOrder>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']['input']>;
  anyoftext?: InputMaybe<Scalars['String']['input']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StringRange = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']['input']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']['input']>;
  anyofterms?: InputMaybe<Scalars['String']['input']>;
};

export type Subject = {
  __typename?: 'Subject';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type SubjectAggregateResult = {
  __typename?: 'SubjectAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  descriptionMax?: Maybe<Scalars['String']['output']>;
  descriptionMin?: Maybe<Scalars['String']['output']>;
  titleMax?: Maybe<Scalars['String']['output']>;
  titleMin?: Maybe<Scalars['String']['output']>;
};

export type SubjectFilter = {
  and?: InputMaybe<Array<InputMaybe<SubjectFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SubjectHasFilter | `${SubjectHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<SubjectFilter>;
  or?: InputMaybe<Array<InputMaybe<SubjectFilter>>>;
};

export enum SubjectHasFilter {
  Description = 'description',
  Title = 'title'
}

export type SubjectOrder = {
  asc?: InputMaybe<SubjectOrderable | `${SubjectOrderable}`>;
  desc?: InputMaybe<SubjectOrderable | `${SubjectOrderable}`>;
  then?: InputMaybe<SubjectOrder>;
};

export enum SubjectOrderable {
  Description = 'description',
  Title = 'title'
}

export type SubjectPatch = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubjectRef = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Town = {
  __typename?: 'Town';
  id: Scalars['ID']['output'];
  located_in?: Maybe<Canton>;
  name?: Maybe<Scalars['String']['output']>;
};


export type TownLocated_InArgs = {
  filter?: InputMaybe<CantonFilter>;
};

export type TownAggregateResult = {
  __typename?: 'TownAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  nameMax?: Maybe<Scalars['String']['output']>;
  nameMin?: Maybe<Scalars['String']['output']>;
};

export type TownFilter = {
  and?: InputMaybe<Array<InputMaybe<TownFilter>>>;
  has?: InputMaybe<Array<InputMaybe<TownHasFilter | `${TownHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<TownFilter>;
  or?: InputMaybe<Array<InputMaybe<TownFilter>>>;
};

export enum TownHasFilter {
  LocatedIn = 'located_in',
  Name = 'name'
}

export type TownOrder = {
  asc?: InputMaybe<TownOrderable | `${TownOrderable}`>;
  desc?: InputMaybe<TownOrderable | `${TownOrderable}`>;
  then?: InputMaybe<TownOrder>;
};

export enum TownOrderable {
  Name = 'name'
}

export type TownPatch = {
  located_in?: InputMaybe<CantonRef>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TownRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  located_in?: InputMaybe<CantonRef>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Town_Subjects = {
  __typename?: 'Town_Subjects';
  id: Scalars['ID']['output'];
  subjects?: Maybe<Array<Maybe<Subject>>>;
  subjectsAggregate?: Maybe<SubjectAggregateResult>;
  town?: Maybe<Town>;
};


export type Town_SubjectsSubjectsArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};


export type Town_SubjectsSubjectsAggregateArgs = {
  filter?: InputMaybe<SubjectFilter>;
};


export type Town_SubjectsTownArgs = {
  filter?: InputMaybe<TownFilter>;
};

export type Town_SubjectsAggregateResult = {
  __typename?: 'Town_SubjectsAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Town_SubjectsFilter = {
  and?: InputMaybe<Array<InputMaybe<Town_SubjectsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<Town_SubjectsHasFilter | `${Town_SubjectsHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<Town_SubjectsFilter>;
  or?: InputMaybe<Array<InputMaybe<Town_SubjectsFilter>>>;
};

export enum Town_SubjectsHasFilter {
  Subjects = 'subjects',
  Town = 'town'
}

export type Town_SubjectsPatch = {
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
  town?: InputMaybe<TownRef>;
};

export type Town_SubjectsRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  subjects?: InputMaybe<Array<InputMaybe<SubjectRef>>>;
  town?: InputMaybe<TownRef>;
};

export type UpdateCantonInput = {
  filter: CantonFilter;
  remove?: InputMaybe<CantonPatch>;
  set?: InputMaybe<CantonPatch>;
};

export type UpdateCantonPayload = {
  __typename?: 'UpdateCantonPayload';
  canton?: Maybe<Array<Maybe<Canton>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCantonPayloadCantonArgs = {
  filter?: InputMaybe<CantonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CantonOrder>;
};

export type UpdateCanton_SubjectsInput = {
  filter: Canton_SubjectsFilter;
  remove?: InputMaybe<Canton_SubjectsPatch>;
  set?: InputMaybe<Canton_SubjectsPatch>;
};

export type UpdateCanton_SubjectsPayload = {
  __typename?: 'UpdateCanton_SubjectsPayload';
  canton_Subjects?: Maybe<Array<Maybe<Canton_Subjects>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCanton_SubjectsPayloadCanton_SubjectsArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCitizenInput = {
  filter: CitizenFilter;
  remove?: InputMaybe<CitizenPatch>;
  set?: InputMaybe<CitizenPatch>;
};

export type UpdateCitizenPayload = {
  __typename?: 'UpdateCitizenPayload';
  citizen?: Maybe<Array<Maybe<Citizen>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCitizenPayloadCitizenArgs = {
  filter?: InputMaybe<CitizenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CitizenOrder>;
};

export type UpdateCitizen_Subject_VoteInput = {
  filter: Citizen_Subject_VoteFilter;
  remove?: InputMaybe<Citizen_Subject_VotePatch>;
  set?: InputMaybe<Citizen_Subject_VotePatch>;
};

export type UpdateCitizen_Subject_VotePayload = {
  __typename?: 'UpdateCitizen_Subject_VotePayload';
  citizen_Subject_Vote?: Maybe<Array<Maybe<Citizen_Subject_Vote>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCitizen_Subject_VotePayloadCitizen_Subject_VoteArgs = {
  filter?: InputMaybe<Citizen_Subject_VoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateFederal_SubjectsInput = {
  filter: Federal_SubjectsFilter;
  remove?: InputMaybe<Federal_SubjectsPatch>;
  set?: InputMaybe<Federal_SubjectsPatch>;
};

export type UpdateFederal_SubjectsPayload = {
  __typename?: 'UpdateFederal_SubjectsPayload';
  federal_Subjects?: Maybe<Array<Maybe<Federal_Subjects>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateFederal_SubjectsPayloadFederal_SubjectsArgs = {
  filter?: InputMaybe<Federal_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSubjectInput = {
  filter: SubjectFilter;
  remove?: InputMaybe<SubjectPatch>;
  set?: InputMaybe<SubjectPatch>;
};

export type UpdateSubjectPayload = {
  __typename?: 'UpdateSubjectPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Array<Maybe<Subject>>>;
};


export type UpdateSubjectPayloadSubjectArgs = {
  filter?: InputMaybe<SubjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SubjectOrder>;
};

export type UpdateTownInput = {
  filter: TownFilter;
  remove?: InputMaybe<TownPatch>;
  set?: InputMaybe<TownPatch>;
};

export type UpdateTownPayload = {
  __typename?: 'UpdateTownPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  town?: Maybe<Array<Maybe<Town>>>;
};


export type UpdateTownPayloadTownArgs = {
  filter?: InputMaybe<TownFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TownOrder>;
};

export type UpdateTown_SubjectsInput = {
  filter: Town_SubjectsFilter;
  remove?: InputMaybe<Town_SubjectsPatch>;
  set?: InputMaybe<Town_SubjectsPatch>;
};

export type UpdateTown_SubjectsPayload = {
  __typename?: 'UpdateTown_SubjectsPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  town_Subjects?: Maybe<Array<Maybe<Town_Subjects>>>;
};


export type UpdateTown_SubjectsPayloadTown_SubjectsArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateVotationInput = {
  filter: VotationFilter;
  remove?: InputMaybe<VotationPatch>;
  set?: InputMaybe<VotationPatch>;
};

export type UpdateVotationPayload = {
  __typename?: 'UpdateVotationPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  votation?: Maybe<Array<Maybe<Votation>>>;
};


export type UpdateVotationPayloadVotationArgs = {
  filter?: InputMaybe<VotationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotationOrder>;
};

export type Votation = {
  __typename?: 'Votation';
  canton_subjects?: Maybe<Array<Maybe<Canton_Subjects>>>;
  canton_subjectsAggregate?: Maybe<Canton_SubjectsAggregateResult>;
  end_date?: Maybe<Scalars['String']['output']>;
  federal_subject?: Maybe<Federal_Subjects>;
  id: Scalars['ID']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  town_subjects?: Maybe<Array<Maybe<Town_Subjects>>>;
  town_subjectsAggregate?: Maybe<Town_SubjectsAggregateResult>;
};


export type VotationCanton_SubjectsArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VotationCanton_SubjectsAggregateArgs = {
  filter?: InputMaybe<Canton_SubjectsFilter>;
};


export type VotationFederal_SubjectArgs = {
  filter?: InputMaybe<Federal_SubjectsFilter>;
};


export type VotationTown_SubjectsArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VotationTown_SubjectsAggregateArgs = {
  filter?: InputMaybe<Town_SubjectsFilter>;
};

export type VotationAggregateResult = {
  __typename?: 'VotationAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  end_dateMax?: Maybe<Scalars['String']['output']>;
  end_dateMin?: Maybe<Scalars['String']['output']>;
  start_dateMax?: Maybe<Scalars['DateTime']['output']>;
  start_dateMin?: Maybe<Scalars['DateTime']['output']>;
};

export type VotationFilter = {
  and?: InputMaybe<Array<InputMaybe<VotationFilter>>>;
  has?: InputMaybe<Array<InputMaybe<VotationHasFilter | `${VotationHasFilter}`>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<VotationFilter>;
  or?: InputMaybe<Array<InputMaybe<VotationFilter>>>;
};

export enum VotationHasFilter {
  CantonSubjects = 'canton_subjects',
  EndDate = 'end_date',
  FederalSubject = 'federal_subject',
  StartDate = 'start_date',
  TownSubjects = 'town_subjects'
}

export type VotationOrder = {
  asc?: InputMaybe<VotationOrderable | `${VotationOrderable}`>;
  desc?: InputMaybe<VotationOrderable | `${VotationOrderable}`>;
  then?: InputMaybe<VotationOrder>;
};

export enum VotationOrderable {
  EndDate = 'end_date',
  StartDate = 'start_date'
}

export type VotationPatch = {
  canton_subjects?: InputMaybe<Array<InputMaybe<Canton_SubjectsRef>>>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  federal_subject?: InputMaybe<Federal_SubjectsRef>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  town_subjects?: InputMaybe<Array<InputMaybe<Town_SubjectsRef>>>;
};

export type VotationRef = {
  canton_subjects?: InputMaybe<Array<InputMaybe<Canton_SubjectsRef>>>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  federal_subject?: InputMaybe<Federal_SubjectsRef>;
  id?: InputMaybe<Scalars['ID']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  town_subjects?: InputMaybe<Array<InputMaybe<Town_SubjectsRef>>>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', queryCanton?: Array<{ __typename?: 'Canton', name?: string | null, id: string } | null> | null };

export const MyQueryDocument = gql`
    query MyQuery {
  queryCanton {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MyQueryGQL extends Apollo.Query<MyQueryQuery, MyQueryQueryVariables> {
    override document = MyQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
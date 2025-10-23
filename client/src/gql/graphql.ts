/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Appeals = {
  __typename?: 'Appeals';
  client?: Maybe<User>;
  clientId?: Maybe<Scalars['Int']['output']>;
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  house?: Maybe<House>;
  houseId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  realtor?: Maybe<User>;
  realtorId?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
};

export type AppealsCreateInput = {
  client?: InputMaybe<UserCreateNestedOneWithoutAppealsAsClientInput>;
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  house?: InputMaybe<HouseCreateNestedOneWithoutAppealInput>;
  realtor?: InputMaybe<UserCreateNestedOneWithoutAppealsAsRealtorInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AppealsCreateManyClientInput = {
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  houseId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  realtorId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AppealsCreateManyClientInputEnvelope = {
  data: Array<AppealsCreateManyClientInput>;
};

export type AppealsCreateManyRealtorInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  houseId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AppealsCreateManyRealtorInputEnvelope = {
  data: Array<AppealsCreateManyRealtorInput>;
};

export type AppealsCreateNestedManyWithoutClientInput = {
  connect?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppealsCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<AppealsCreateWithoutClientInput>>;
  createMany?: InputMaybe<AppealsCreateManyClientInputEnvelope>;
};

export type AppealsCreateNestedManyWithoutRealtorInput = {
  connect?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppealsCreateOrConnectWithoutRealtorInput>>;
  create?: InputMaybe<Array<AppealsCreateWithoutRealtorInput>>;
  createMany?: InputMaybe<AppealsCreateManyRealtorInputEnvelope>;
};

export type AppealsCreateNestedOneWithoutHouseInput = {
  connect?: InputMaybe<AppealsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AppealsCreateOrConnectWithoutHouseInput>;
  create?: InputMaybe<AppealsCreateWithoutHouseInput>;
};

export type AppealsCreateOrConnectWithoutClientInput = {
  create: AppealsCreateWithoutClientInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsCreateOrConnectWithoutHouseInput = {
  create: AppealsCreateWithoutHouseInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsCreateOrConnectWithoutRealtorInput = {
  create: AppealsCreateWithoutRealtorInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsCreateWithoutClientInput = {
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  house?: InputMaybe<HouseCreateNestedOneWithoutAppealInput>;
  realtor?: InputMaybe<UserCreateNestedOneWithoutAppealsAsRealtorInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AppealsCreateWithoutHouseInput = {
  client?: InputMaybe<UserCreateNestedOneWithoutAppealsAsClientInput>;
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  realtor?: InputMaybe<UserCreateNestedOneWithoutAppealsAsRealtorInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AppealsCreateWithoutRealtorInput = {
  client?: InputMaybe<UserCreateNestedOneWithoutAppealsAsClientInput>;
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  house?: InputMaybe<HouseCreateNestedOneWithoutAppealInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AppealsListRelationFilter = {
  every?: InputMaybe<AppealsWhereInput>;
  none?: InputMaybe<AppealsWhereInput>;
  some?: InputMaybe<AppealsWhereInput>;
};

export type AppealsNullableScalarRelationFilter = {
  is?: InputMaybe<AppealsWhereInput>;
  isNot?: InputMaybe<AppealsWhereInput>;
};

export type AppealsScalarWhereInput = {
  AND?: InputMaybe<Array<AppealsScalarWhereInput>>;
  NOT?: InputMaybe<Array<AppealsScalarWhereInput>>;
  OR?: InputMaybe<Array<AppealsScalarWhereInput>>;
  clientId?: InputMaybe<IntNullableFilter>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  houseId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  realtorId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
};

export type AppealsUpdateInput = {
  client?: InputMaybe<UserUpdateOneWithoutAppealsAsClientNestedInput>;
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  house?: InputMaybe<HouseUpdateOneWithoutAppealNestedInput>;
  realtor?: InputMaybe<UserUpdateOneWithoutAppealsAsRealtorNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppealsUpdateManyMutationInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppealsUpdateManyWithWhereWithoutClientInput = {
  data: AppealsUpdateManyMutationInput;
  where: AppealsScalarWhereInput;
};

export type AppealsUpdateManyWithWhereWithoutRealtorInput = {
  data: AppealsUpdateManyMutationInput;
  where: AppealsScalarWhereInput;
};

export type AppealsUpdateManyWithoutClientNestedInput = {
  connect?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppealsCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<AppealsCreateWithoutClientInput>>;
  createMany?: InputMaybe<AppealsCreateManyClientInputEnvelope>;
  delete?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AppealsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  set?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  update?: InputMaybe<Array<AppealsUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: InputMaybe<Array<AppealsUpdateManyWithWhereWithoutClientInput>>;
  upsert?: InputMaybe<Array<AppealsUpsertWithWhereUniqueWithoutClientInput>>;
};

export type AppealsUpdateManyWithoutRealtorNestedInput = {
  connect?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AppealsCreateOrConnectWithoutRealtorInput>>;
  create?: InputMaybe<Array<AppealsCreateWithoutRealtorInput>>;
  createMany?: InputMaybe<AppealsCreateManyRealtorInputEnvelope>;
  delete?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AppealsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  set?: InputMaybe<Array<AppealsWhereUniqueInput>>;
  update?: InputMaybe<Array<AppealsUpdateWithWhereUniqueWithoutRealtorInput>>;
  updateMany?: InputMaybe<Array<AppealsUpdateManyWithWhereWithoutRealtorInput>>;
  upsert?: InputMaybe<Array<AppealsUpsertWithWhereUniqueWithoutRealtorInput>>;
};

export type AppealsUpdateOneWithoutHouseNestedInput = {
  connect?: InputMaybe<AppealsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AppealsCreateOrConnectWithoutHouseInput>;
  create?: InputMaybe<AppealsCreateWithoutHouseInput>;
  delete?: InputMaybe<AppealsWhereInput>;
  disconnect?: InputMaybe<AppealsWhereInput>;
  update?: InputMaybe<AppealsUpdateToOneWithWhereWithoutHouseInput>;
  upsert?: InputMaybe<AppealsUpsertWithoutHouseInput>;
};

export type AppealsUpdateToOneWithWhereWithoutHouseInput = {
  data: AppealsUpdateWithoutHouseInput;
  where?: InputMaybe<AppealsWhereInput>;
};

export type AppealsUpdateWithWhereUniqueWithoutClientInput = {
  data: AppealsUpdateWithoutClientInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsUpdateWithWhereUniqueWithoutRealtorInput = {
  data: AppealsUpdateWithoutRealtorInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsUpdateWithoutClientInput = {
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  house?: InputMaybe<HouseUpdateOneWithoutAppealNestedInput>;
  realtor?: InputMaybe<UserUpdateOneWithoutAppealsAsRealtorNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppealsUpdateWithoutHouseInput = {
  client?: InputMaybe<UserUpdateOneWithoutAppealsAsClientNestedInput>;
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  realtor?: InputMaybe<UserUpdateOneWithoutAppealsAsRealtorNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppealsUpdateWithoutRealtorInput = {
  client?: InputMaybe<UserUpdateOneWithoutAppealsAsClientNestedInput>;
  comment?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  house?: InputMaybe<HouseUpdateOneWithoutAppealNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AppealsUpsertWithWhereUniqueWithoutClientInput = {
  create: AppealsCreateWithoutClientInput;
  update: AppealsUpdateWithoutClientInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsUpsertWithWhereUniqueWithoutRealtorInput = {
  create: AppealsCreateWithoutRealtorInput;
  update: AppealsUpdateWithoutRealtorInput;
  where: AppealsWhereUniqueInput;
};

export type AppealsUpsertWithoutHouseInput = {
  create: AppealsCreateWithoutHouseInput;
  update: AppealsUpdateWithoutHouseInput;
  where?: InputMaybe<AppealsWhereInput>;
};

export type AppealsWhereInput = {
  AND?: InputMaybe<Array<AppealsWhereInput>>;
  NOT?: InputMaybe<Array<AppealsWhereInput>>;
  OR?: InputMaybe<Array<AppealsWhereInput>>;
  client?: InputMaybe<UserNullableScalarRelationFilter>;
  clientId?: InputMaybe<IntNullableFilter>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  house?: InputMaybe<HouseNullableScalarRelationFilter>;
  houseId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  realtor?: InputMaybe<UserNullableScalarRelationFilter>;
  realtorId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
};

export type AppealsWhereUniqueInput = {
  AND?: InputMaybe<Array<AppealsWhereInput>>;
  NOT?: InputMaybe<Array<AppealsWhereInput>>;
  OR?: InputMaybe<Array<AppealsWhereInput>>;
  client?: InputMaybe<UserNullableScalarRelationFilter>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  house?: InputMaybe<HouseNullableScalarRelationFilter>;
  houseId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  realtor?: InputMaybe<UserNullableScalarRelationFilter>;
  realtorId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StringFilter>;
};

export type AuthSuccessDto = {
  __typename?: 'AuthSuccessDto';
  _count: UserCount;
  appealsAsClient?: Maybe<Array<Appeals>>;
  appealsAsRealtor?: Maybe<Array<Appeals>>;
  avatar?: Maybe<File>;
  avatarId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  houses?: Maybe<Array<House>>;
  id: Scalars['ID']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  middlename?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['Int']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
  tg?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Feature = {
  __typename?: 'Feature';
  _count: FeatureCount;
  houses?: Maybe<Array<House>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FeatureCount = {
  __typename?: 'FeatureCount';
  houses: Scalars['Int']['output'];
};

export type FeatureCreateInput = {
  houses?: InputMaybe<HouseCreateNestedManyWithoutFeaturesInput>;
  title: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type FeatureCreateNestedManyWithoutHousesInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutHousesInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutHousesInput>>;
};

export type FeatureCreateOrConnectWithoutHousesInput = {
  create: FeatureCreateWithoutHousesInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureCreateWithoutHousesInput = {
  title: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type FeatureListRelationFilter = {
  every?: InputMaybe<FeatureWhereInput>;
  none?: InputMaybe<FeatureWhereInput>;
  some?: InputMaybe<FeatureWhereInput>;
};

export type FeatureScalarWhereInput = {
  AND?: InputMaybe<Array<FeatureScalarWhereInput>>;
  NOT?: InputMaybe<Array<FeatureScalarWhereInput>>;
  OR?: InputMaybe<Array<FeatureScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FeatureUpdateInput = {
  houses?: InputMaybe<HouseUpdateManyWithoutFeaturesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FeatureUpdateManyMutationInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FeatureUpdateManyWithWhereWithoutHousesInput = {
  data: FeatureUpdateManyMutationInput;
  where: FeatureScalarWhereInput;
};

export type FeatureUpdateManyWithoutHousesNestedInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutHousesInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutHousesInput>>;
  delete?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeatureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  set?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  update?: InputMaybe<Array<FeatureUpdateWithWhereUniqueWithoutHousesInput>>;
  updateMany?: InputMaybe<Array<FeatureUpdateManyWithWhereWithoutHousesInput>>;
  upsert?: InputMaybe<Array<FeatureUpsertWithWhereUniqueWithoutHousesInput>>;
};

export type FeatureUpdateWithWhereUniqueWithoutHousesInput = {
  data: FeatureUpdateWithoutHousesInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpdateWithoutHousesInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FeatureUpsertWithWhereUniqueWithoutHousesInput = {
  create: FeatureCreateWithoutHousesInput;
  update: FeatureUpdateWithoutHousesInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureWhereInput = {
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  houses?: InputMaybe<HouseListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FeatureWhereUniqueInput = {
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  houses?: InputMaybe<HouseListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type File = {
  __typename?: 'File';
  house?: Maybe<House>;
  houseId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};

export type FileCreateManyHouseInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FileCreateManyHouseInputEnvelope = {
  data: Array<FileCreateManyHouseInput>;
};

export type FileCreateNestedManyWithoutHouseInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutHouseInput>>;
  create?: InputMaybe<Array<FileCreateWithoutHouseInput>>;
  createMany?: InputMaybe<FileCreateManyHouseInputEnvelope>;
};

export type FileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<FileCreateWithoutUserInput>;
};

export type FileCreateOrConnectWithoutHouseInput = {
  create: FileCreateWithoutHouseInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutHouseInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAvatarInput>;
};

export type FileCreateWithoutUserInput = {
  house?: InputMaybe<HouseCreateNestedOneWithoutImagesInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileNullableScalarRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  houseId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntNullableFilter>;
};

export type FileUpdateManyMutationInput = {
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutHouseInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutHouseNestedInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutHouseInput>>;
  create?: InputMaybe<Array<FileCreateWithoutHouseInput>>;
  createMany?: InputMaybe<FileCreateManyHouseInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutHouseInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutHouseInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutHouseInput>>;
};

export type FileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<FileCreateWithoutUserInput>;
  delete?: InputMaybe<FileWhereInput>;
  disconnect?: InputMaybe<FileWhereInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<FileUpsertWithoutUserInput>;
};

export type FileUpdateToOneWithWhereWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateWithWhereUniqueWithoutHouseInput = {
  data: FileUpdateWithoutHouseInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutHouseInput = {
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutAvatarNestedInput>;
};

export type FileUpdateWithoutUserInput = {
  house?: InputMaybe<HouseUpdateOneWithoutImagesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutHouseInput = {
  create: FileCreateWithoutHouseInput;
  update: FileUpdateWithoutHouseInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  house?: InputMaybe<HouseNullableScalarRelationFilter>;
  houseId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  house?: InputMaybe<HouseNullableScalarRelationFilter>;
  houseId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
};

export type House = {
  __typename?: 'House';
  _count: HouseCount;
  address: Scalars['String']['output'];
  appeal?: Maybe<Appeals>;
  bio: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  features?: Maybe<Array<Feature>>;
  floor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<File>>;
  isRent: Scalars['Boolean']['output'];
  isSell: Scalars['Boolean']['output'];
  price: Scalars['Int']['output'];
  realtor: User;
  realtorId: Scalars['Int']['output'];
  remont: Scalars['String']['output'];
  rooms?: Maybe<Scalars['String']['output']>;
  square: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HouseCount = {
  __typename?: 'HouseCount';
  features: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
};

export type HouseCreateDto = {
  address: Scalars['String']['input'];
  bio: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  floor?: InputMaybe<Scalars['String']['input']>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  isSell?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Float']['input'];
  remont: Scalars['String']['input'];
  rooms?: InputMaybe<Scalars['String']['input']>;
  square: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HouseCreateManyRealtorInput = {
  address: Scalars['String']['input'];
  bio: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  floor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  isSell?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  remont: Scalars['String']['input'];
  rooms?: InputMaybe<Scalars['String']['input']>;
  square: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HouseCreateManyRealtorInputEnvelope = {
  data: Array<HouseCreateManyRealtorInput>;
};

export type HouseCreateNestedManyWithoutFeaturesInput = {
  connect?: InputMaybe<Array<HouseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HouseCreateOrConnectWithoutFeaturesInput>>;
  create?: InputMaybe<Array<HouseCreateWithoutFeaturesInput>>;
};

export type HouseCreateNestedManyWithoutRealtorInput = {
  connect?: InputMaybe<Array<HouseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HouseCreateOrConnectWithoutRealtorInput>>;
  create?: InputMaybe<Array<HouseCreateWithoutRealtorInput>>;
  createMany?: InputMaybe<HouseCreateManyRealtorInputEnvelope>;
};

export type HouseCreateNestedOneWithoutAppealInput = {
  connect?: InputMaybe<HouseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HouseCreateOrConnectWithoutAppealInput>;
  create?: InputMaybe<HouseCreateWithoutAppealInput>;
};

export type HouseCreateNestedOneWithoutImagesInput = {
  connect?: InputMaybe<HouseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HouseCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<HouseCreateWithoutImagesInput>;
};

export type HouseCreateOrConnectWithoutAppealInput = {
  create: HouseCreateWithoutAppealInput;
  where: HouseWhereUniqueInput;
};

export type HouseCreateOrConnectWithoutFeaturesInput = {
  create: HouseCreateWithoutFeaturesInput;
  where: HouseWhereUniqueInput;
};

export type HouseCreateOrConnectWithoutImagesInput = {
  create: HouseCreateWithoutImagesInput;
  where: HouseWhereUniqueInput;
};

export type HouseCreateOrConnectWithoutRealtorInput = {
  create: HouseCreateWithoutRealtorInput;
  where: HouseWhereUniqueInput;
};

export type HouseCreateWithoutAppealInput = {
  address: Scalars['String']['input'];
  bio: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  features?: InputMaybe<FeatureCreateNestedManyWithoutHousesInput>;
  floor?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<FileCreateNestedManyWithoutHouseInput>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  isSell?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  realtor: UserCreateNestedOneWithoutHousesInput;
  remont: Scalars['String']['input'];
  rooms?: InputMaybe<Scalars['String']['input']>;
  square: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HouseCreateWithoutFeaturesInput = {
  address: Scalars['String']['input'];
  appeal?: InputMaybe<AppealsCreateNestedOneWithoutHouseInput>;
  bio: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  floor?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<FileCreateNestedManyWithoutHouseInput>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  isSell?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  realtor: UserCreateNestedOneWithoutHousesInput;
  remont: Scalars['String']['input'];
  rooms?: InputMaybe<Scalars['String']['input']>;
  square: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HouseCreateWithoutImagesInput = {
  address: Scalars['String']['input'];
  appeal?: InputMaybe<AppealsCreateNestedOneWithoutHouseInput>;
  bio: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  features?: InputMaybe<FeatureCreateNestedManyWithoutHousesInput>;
  floor?: InputMaybe<Scalars['String']['input']>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  isSell?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  realtor: UserCreateNestedOneWithoutHousesInput;
  remont: Scalars['String']['input'];
  rooms?: InputMaybe<Scalars['String']['input']>;
  square: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HouseCreateWithoutRealtorInput = {
  address: Scalars['String']['input'];
  appeal?: InputMaybe<AppealsCreateNestedOneWithoutHouseInput>;
  bio: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  features?: InputMaybe<FeatureCreateNestedManyWithoutHousesInput>;
  floor?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<FileCreateNestedManyWithoutHouseInput>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  isSell?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  remont: Scalars['String']['input'];
  rooms?: InputMaybe<Scalars['String']['input']>;
  square: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HouseListRelationFilter = {
  every?: InputMaybe<HouseWhereInput>;
  none?: InputMaybe<HouseWhereInput>;
  some?: InputMaybe<HouseWhereInput>;
};

export type HouseNullableScalarRelationFilter = {
  is?: InputMaybe<HouseWhereInput>;
  isNot?: InputMaybe<HouseWhereInput>;
};

export type HouseScalarWhereInput = {
  AND?: InputMaybe<Array<HouseScalarWhereInput>>;
  NOT?: InputMaybe<Array<HouseScalarWhereInput>>;
  OR?: InputMaybe<Array<HouseScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  floor?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isRent?: InputMaybe<BoolFilter>;
  isSell?: InputMaybe<BoolFilter>;
  price?: InputMaybe<IntFilter>;
  realtorId?: InputMaybe<IntFilter>;
  remont?: InputMaybe<StringFilter>;
  rooms?: InputMaybe<StringNullableFilter>;
  square?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HouseUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  appeal?: InputMaybe<AppealsUpdateOneWithoutHouseNestedInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  features?: InputMaybe<FeatureUpdateManyWithoutHousesNestedInput>;
  floor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutHouseNestedInput>;
  isRent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isSell?: InputMaybe<BoolFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  realtor?: InputMaybe<UserUpdateOneRequiredWithoutHousesNestedInput>;
  remont?: InputMaybe<StringFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  square?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type HouseUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  floor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isRent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isSell?: InputMaybe<BoolFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  remont?: InputMaybe<StringFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  square?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type HouseUpdateManyWithWhereWithoutFeaturesInput = {
  data: HouseUpdateManyMutationInput;
  where: HouseScalarWhereInput;
};

export type HouseUpdateManyWithWhereWithoutRealtorInput = {
  data: HouseUpdateManyMutationInput;
  where: HouseScalarWhereInput;
};

export type HouseUpdateManyWithoutFeaturesNestedInput = {
  connect?: InputMaybe<Array<HouseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HouseCreateOrConnectWithoutFeaturesInput>>;
  create?: InputMaybe<Array<HouseCreateWithoutFeaturesInput>>;
  delete?: InputMaybe<Array<HouseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<HouseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<HouseWhereUniqueInput>>;
  set?: InputMaybe<Array<HouseWhereUniqueInput>>;
  update?: InputMaybe<Array<HouseUpdateWithWhereUniqueWithoutFeaturesInput>>;
  updateMany?: InputMaybe<Array<HouseUpdateManyWithWhereWithoutFeaturesInput>>;
  upsert?: InputMaybe<Array<HouseUpsertWithWhereUniqueWithoutFeaturesInput>>;
};

export type HouseUpdateManyWithoutRealtorNestedInput = {
  connect?: InputMaybe<Array<HouseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HouseCreateOrConnectWithoutRealtorInput>>;
  create?: InputMaybe<Array<HouseCreateWithoutRealtorInput>>;
  createMany?: InputMaybe<HouseCreateManyRealtorInputEnvelope>;
  delete?: InputMaybe<Array<HouseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<HouseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<HouseWhereUniqueInput>>;
  set?: InputMaybe<Array<HouseWhereUniqueInput>>;
  update?: InputMaybe<Array<HouseUpdateWithWhereUniqueWithoutRealtorInput>>;
  updateMany?: InputMaybe<Array<HouseUpdateManyWithWhereWithoutRealtorInput>>;
  upsert?: InputMaybe<Array<HouseUpsertWithWhereUniqueWithoutRealtorInput>>;
};

export type HouseUpdateOneWithoutAppealNestedInput = {
  connect?: InputMaybe<HouseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HouseCreateOrConnectWithoutAppealInput>;
  create?: InputMaybe<HouseCreateWithoutAppealInput>;
  delete?: InputMaybe<HouseWhereInput>;
  disconnect?: InputMaybe<HouseWhereInput>;
  update?: InputMaybe<HouseUpdateToOneWithWhereWithoutAppealInput>;
  upsert?: InputMaybe<HouseUpsertWithoutAppealInput>;
};

export type HouseUpdateOneWithoutImagesNestedInput = {
  connect?: InputMaybe<HouseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HouseCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<HouseCreateWithoutImagesInput>;
  delete?: InputMaybe<HouseWhereInput>;
  disconnect?: InputMaybe<HouseWhereInput>;
  update?: InputMaybe<HouseUpdateToOneWithWhereWithoutImagesInput>;
  upsert?: InputMaybe<HouseUpsertWithoutImagesInput>;
};

export type HouseUpdateToOneWithWhereWithoutAppealInput = {
  data: HouseUpdateWithoutAppealInput;
  where?: InputMaybe<HouseWhereInput>;
};

export type HouseUpdateToOneWithWhereWithoutImagesInput = {
  data: HouseUpdateWithoutImagesInput;
  where?: InputMaybe<HouseWhereInput>;
};

export type HouseUpdateWithWhereUniqueWithoutFeaturesInput = {
  data: HouseUpdateWithoutFeaturesInput;
  where: HouseWhereUniqueInput;
};

export type HouseUpdateWithWhereUniqueWithoutRealtorInput = {
  data: HouseUpdateWithoutRealtorInput;
  where: HouseWhereUniqueInput;
};

export type HouseUpdateWithoutAppealInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  features?: InputMaybe<FeatureUpdateManyWithoutHousesNestedInput>;
  floor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutHouseNestedInput>;
  isRent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isSell?: InputMaybe<BoolFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  realtor?: InputMaybe<UserUpdateOneRequiredWithoutHousesNestedInput>;
  remont?: InputMaybe<StringFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  square?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type HouseUpdateWithoutFeaturesInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  appeal?: InputMaybe<AppealsUpdateOneWithoutHouseNestedInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  floor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutHouseNestedInput>;
  isRent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isSell?: InputMaybe<BoolFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  realtor?: InputMaybe<UserUpdateOneRequiredWithoutHousesNestedInput>;
  remont?: InputMaybe<StringFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  square?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type HouseUpdateWithoutImagesInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  appeal?: InputMaybe<AppealsUpdateOneWithoutHouseNestedInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  features?: InputMaybe<FeatureUpdateManyWithoutHousesNestedInput>;
  floor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isRent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isSell?: InputMaybe<BoolFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  realtor?: InputMaybe<UserUpdateOneRequiredWithoutHousesNestedInput>;
  remont?: InputMaybe<StringFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  square?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type HouseUpdateWithoutRealtorInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  appeal?: InputMaybe<AppealsUpdateOneWithoutHouseNestedInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  features?: InputMaybe<FeatureUpdateManyWithoutHousesNestedInput>;
  floor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutHouseNestedInput>;
  isRent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isSell?: InputMaybe<BoolFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  remont?: InputMaybe<StringFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  square?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type HouseUpsertWithWhereUniqueWithoutFeaturesInput = {
  create: HouseCreateWithoutFeaturesInput;
  update: HouseUpdateWithoutFeaturesInput;
  where: HouseWhereUniqueInput;
};

export type HouseUpsertWithWhereUniqueWithoutRealtorInput = {
  create: HouseCreateWithoutRealtorInput;
  update: HouseUpdateWithoutRealtorInput;
  where: HouseWhereUniqueInput;
};

export type HouseUpsertWithoutAppealInput = {
  create: HouseCreateWithoutAppealInput;
  update: HouseUpdateWithoutAppealInput;
  where?: InputMaybe<HouseWhereInput>;
};

export type HouseUpsertWithoutImagesInput = {
  create: HouseCreateWithoutImagesInput;
  update: HouseUpdateWithoutImagesInput;
  where?: InputMaybe<HouseWhereInput>;
};

export type HouseWhereInput = {
  AND?: InputMaybe<Array<HouseWhereInput>>;
  NOT?: InputMaybe<Array<HouseWhereInput>>;
  OR?: InputMaybe<Array<HouseWhereInput>>;
  address?: InputMaybe<StringFilter>;
  appeal?: InputMaybe<AppealsNullableScalarRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  features?: InputMaybe<FeatureListRelationFilter>;
  floor?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<FileListRelationFilter>;
  isRent?: InputMaybe<BoolFilter>;
  isSell?: InputMaybe<BoolFilter>;
  price?: InputMaybe<IntFilter>;
  realtor?: InputMaybe<UserScalarRelationFilter>;
  realtorId?: InputMaybe<IntFilter>;
  remont?: InputMaybe<StringFilter>;
  rooms?: InputMaybe<StringNullableFilter>;
  square?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HouseWhereUniqueInput = {
  AND?: InputMaybe<Array<HouseWhereInput>>;
  NOT?: InputMaybe<Array<HouseWhereInput>>;
  OR?: InputMaybe<Array<HouseWhereInput>>;
  address?: InputMaybe<StringFilter>;
  appeal?: InputMaybe<AppealsNullableScalarRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  features?: InputMaybe<FeatureListRelationFilter>;
  floor?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<FileListRelationFilter>;
  isRent?: InputMaybe<BoolFilter>;
  isSell?: InputMaybe<BoolFilter>;
  price?: InputMaybe<IntFilter>;
  realtor?: InputMaybe<UserScalarRelationFilter>;
  realtorId?: InputMaybe<IntFilter>;
  remont?: InputMaybe<StringFilter>;
  rooms?: InputMaybe<StringNullableFilter>;
  square?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppeal: Appeals;
  createFeature: Feature;
  createHouse: House;
  createUser: User;
  removeAnyUser: User;
  removeAppeal: Appeals;
  removeFeature: Feature;
  removeHouse: House;
  removeUser: User;
  signIn: AuthSuccessDto;
  signUp: AuthSuccessDto;
  updateAnyUser: User;
  updateAppeal: Appeals;
  updateFeature: Feature;
  updateHouse: House;
  updateUser: User;
  uploadFiles: Array<UploadDto>;
};


export type MutationCreateAppealArgs = {
  createAppealInput: AppealsCreateInput;
};


export type MutationCreateFeatureArgs = {
  createFeatureInput: FeatureCreateInput;
};


export type MutationCreateHouseArgs = {
  createHouseInput: HouseCreateDto;
};


export type MutationCreateUserArgs = {
  createUserInput: UserCreateInput;
};


export type MutationRemoveAnyUserArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveAppealArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFeatureArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveHouseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignInArgs = {
  createUserInput: UserCreateInput;
};


export type MutationSignUpArgs = {
  createUserInput: UserCreateInput;
};


export type MutationUpdateAnyUserArgs = {
  data: UserUpdateInput;
  id: Scalars['Float']['input'];
};


export type MutationUpdateAppealArgs = {
  id: Scalars['Int']['input'];
  updateAppealInput: AppealsUpdateInput;
};


export type MutationUpdateFeatureArgs = {
  id: Scalars['Int']['input'];
  updateFeatureInput: FeatureUpdateInput;
};


export type MutationUpdateHouseArgs = {
  id: Scalars['Float']['input'];
  updateHouseInput: HouseUpdateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};


export type MutationUploadFilesArgs = {
  files: Array<Scalars['Upload']['input']>;
  houseId?: InputMaybe<Scalars['String']['input']>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  appeal: Appeals;
  appeals: Array<Appeals>;
  feature: Array<Feature>;
  features: Array<Feature>;
  house: House;
  housesAll: Array<House>;
  housesFilter: Array<House>;
  housesRealtor: Array<House>;
  housesRent: Array<House>;
  housesSell: Array<House>;
  me: User;
  sayHello: Scalars['String']['output'];
  user: User;
  users: Array<User>;
};


export type QueryAppealArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFeatureArgs = {
  title: Scalars['String']['input'];
};


export type QueryHouseArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHousesFilterArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryHousesRealtorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  users: Scalars['Int']['output'];
};

export type RoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  title: Scalars['String']['input'];
};

export type RoleNullableScalarRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateOneWithoutUsersNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
  delete?: InputMaybe<RoleWhereInput>;
  disconnect?: InputMaybe<RoleWhereInput>;
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutUsersInput>;
  upsert?: InputMaybe<RoleUpsertWithoutUsersInput>;
};

export type RoleUpdateToOneWithWhereWithoutUsersInput = {
  data: RoleUpdateWithoutUsersInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateWithoutUsersInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpsertWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  update: RoleUpdateWithoutUsersInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadDto = {
  __typename?: 'UploadDto';
  id: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  appealsAsClient?: Maybe<Array<Appeals>>;
  appealsAsRealtor?: Maybe<Array<Appeals>>;
  avatar?: Maybe<File>;
  avatarId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  houses?: Maybe<Array<House>>;
  id: Scalars['ID']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  middlename?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['Int']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
  tg?: Maybe<Scalars['String']['output']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  appealsAsClient: Scalars['Int']['output'];
  appealsAsRealtor: Scalars['Int']['output'];
  houses: Scalars['Int']['output'];
};

export type UserCreateInput = {
  appealsAsClient?: InputMaybe<AppealsCreateNestedManyWithoutClientInput>;
  appealsAsRealtor?: InputMaybe<AppealsCreateNestedManyWithoutRealtorInput>;
  avatar?: InputMaybe<FileCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  houses?: InputMaybe<HouseCreateNestedManyWithoutRealtorInput>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<RoleCreateNestedOneWithoutUsersInput>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  tg?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedOneWithoutAppealsAsClientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAppealsAsClientInput>;
  create?: InputMaybe<UserCreateWithoutAppealsAsClientInput>;
};

export type UserCreateNestedOneWithoutAppealsAsRealtorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAppealsAsRealtorInput>;
  create?: InputMaybe<UserCreateWithoutAppealsAsRealtorInput>;
};

export type UserCreateNestedOneWithoutAvatarInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAvatarInput>;
  create?: InputMaybe<UserCreateWithoutAvatarInput>;
};

export type UserCreateNestedOneWithoutHousesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutHousesInput>;
  create?: InputMaybe<UserCreateWithoutHousesInput>;
};

export type UserCreateOrConnectWithoutAppealsAsClientInput = {
  create: UserCreateWithoutAppealsAsClientInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAppealsAsRealtorInput = {
  create: UserCreateWithoutAppealsAsRealtorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAvatarInput = {
  create: UserCreateWithoutAvatarInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutHousesInput = {
  create: UserCreateWithoutHousesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAppealsAsClientInput = {
  appealsAsRealtor?: InputMaybe<AppealsCreateNestedManyWithoutRealtorInput>;
  avatar?: InputMaybe<FileCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  houses?: InputMaybe<HouseCreateNestedManyWithoutRealtorInput>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<RoleCreateNestedOneWithoutUsersInput>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  tg?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAppealsAsRealtorInput = {
  appealsAsClient?: InputMaybe<AppealsCreateNestedManyWithoutClientInput>;
  avatar?: InputMaybe<FileCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  houses?: InputMaybe<HouseCreateNestedManyWithoutRealtorInput>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<RoleCreateNestedOneWithoutUsersInput>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  tg?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAvatarInput = {
  appealsAsClient?: InputMaybe<AppealsCreateNestedManyWithoutClientInput>;
  appealsAsRealtor?: InputMaybe<AppealsCreateNestedManyWithoutRealtorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  houses?: InputMaybe<HouseCreateNestedManyWithoutRealtorInput>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<RoleCreateNestedOneWithoutUsersInput>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  tg?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutHousesInput = {
  appealsAsClient?: InputMaybe<AppealsCreateNestedManyWithoutClientInput>;
  appealsAsRealtor?: InputMaybe<AppealsCreateNestedManyWithoutRealtorInput>;
  avatar?: InputMaybe<FileCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<RoleCreateNestedOneWithoutUsersInput>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  tg?: InputMaybe<Scalars['String']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserNullableScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  appealsAsClient?: InputMaybe<AppealsUpdateManyWithoutClientNestedInput>;
  appealsAsRealtor?: InputMaybe<AppealsUpdateManyWithoutRealtorNestedInput>;
  avatar?: InputMaybe<FileUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  houses?: InputMaybe<HouseUpdateManyWithoutRealtorNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middlename?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneWithoutUsersNestedInput>;
  telephone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutHousesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutHousesInput>;
  create?: InputMaybe<UserCreateWithoutHousesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutHousesInput>;
  upsert?: InputMaybe<UserUpsertWithoutHousesInput>;
};

export type UserUpdateOneWithoutAppealsAsClientNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAppealsAsClientInput>;
  create?: InputMaybe<UserCreateWithoutAppealsAsClientInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAppealsAsClientInput>;
  upsert?: InputMaybe<UserUpsertWithoutAppealsAsClientInput>;
};

export type UserUpdateOneWithoutAppealsAsRealtorNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAppealsAsRealtorInput>;
  create?: InputMaybe<UserCreateWithoutAppealsAsRealtorInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput>;
  upsert?: InputMaybe<UserUpsertWithoutAppealsAsRealtorInput>;
};

export type UserUpdateOneWithoutAvatarNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAvatarInput>;
  create?: InputMaybe<UserCreateWithoutAvatarInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAvatarInput>;
  upsert?: InputMaybe<UserUpsertWithoutAvatarInput>;
};

export type UserUpdateToOneWithWhereWithoutAppealsAsClientInput = {
  data: UserUpdateWithoutAppealsAsClientInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput = {
  data: UserUpdateWithoutAppealsAsRealtorInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAvatarInput = {
  data: UserUpdateWithoutAvatarInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutHousesInput = {
  data: UserUpdateWithoutHousesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAppealsAsClientInput = {
  appealsAsRealtor?: InputMaybe<AppealsUpdateManyWithoutRealtorNestedInput>;
  avatar?: InputMaybe<FileUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  houses?: InputMaybe<HouseUpdateManyWithoutRealtorNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middlename?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneWithoutUsersNestedInput>;
  telephone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAppealsAsRealtorInput = {
  appealsAsClient?: InputMaybe<AppealsUpdateManyWithoutClientNestedInput>;
  avatar?: InputMaybe<FileUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  houses?: InputMaybe<HouseUpdateManyWithoutRealtorNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middlename?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneWithoutUsersNestedInput>;
  telephone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAvatarInput = {
  appealsAsClient?: InputMaybe<AppealsUpdateManyWithoutClientNestedInput>;
  appealsAsRealtor?: InputMaybe<AppealsUpdateManyWithoutRealtorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  houses?: InputMaybe<HouseUpdateManyWithoutRealtorNestedInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middlename?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneWithoutUsersNestedInput>;
  telephone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutHousesInput = {
  appealsAsClient?: InputMaybe<AppealsUpdateManyWithoutClientNestedInput>;
  appealsAsRealtor?: InputMaybe<AppealsUpdateManyWithoutRealtorNestedInput>;
  avatar?: InputMaybe<FileUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middlename?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneWithoutUsersNestedInput>;
  telephone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAppealsAsClientInput = {
  create: UserCreateWithoutAppealsAsClientInput;
  update: UserUpdateWithoutAppealsAsClientInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAppealsAsRealtorInput = {
  create: UserCreateWithoutAppealsAsRealtorInput;
  update: UserUpdateWithoutAppealsAsRealtorInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAvatarInput = {
  create: UserCreateWithoutAvatarInput;
  update: UserUpdateWithoutAvatarInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutHousesInput = {
  create: UserCreateWithoutHousesInput;
  update: UserUpdateWithoutHousesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  appealsAsClient?: InputMaybe<AppealsListRelationFilter>;
  appealsAsRealtor?: InputMaybe<AppealsListRelationFilter>;
  avatar?: InputMaybe<FileNullableScalarRelationFilter>;
  avatarId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstname?: InputMaybe<StringNullableFilter>;
  houses?: InputMaybe<HouseListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  lastname?: InputMaybe<StringNullableFilter>;
  middlename?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleNullableScalarRelationFilter>;
  roleId?: InputMaybe<IntNullableFilter>;
  telephone?: InputMaybe<StringNullableFilter>;
  tg?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  appealsAsClient?: InputMaybe<AppealsListRelationFilter>;
  appealsAsRealtor?: InputMaybe<AppealsListRelationFilter>;
  avatar?: InputMaybe<FileNullableScalarRelationFilter>;
  avatarId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<StringNullableFilter>;
  houses?: InputMaybe<HouseListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastname?: InputMaybe<StringNullableFilter>;
  middlename?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleNullableScalarRelationFilter>;
  roleId?: InputMaybe<IntNullableFilter>;
  telephone?: InputMaybe<StringNullableFilter>;
  tg?: InputMaybe<StringNullableFilter>;
};

export type CreateAppealMutationVariables = Exact<{
  input: AppealsCreateInput;
}>;


export type CreateAppealMutation = { __typename?: 'Mutation', createAppeal: { __typename?: 'Appeals', id: string, createdAt: any, status: string, comment: string, houseId?: number | null, clientId?: number | null, realtorId?: number | null, house?: { __typename?: 'House', id: string, title: string, address: string, price: number } | null, client?: { __typename?: 'User', id: string, firstname?: string | null, lastname?: string | null, email: string } | null, realtor?: { __typename?: 'User', id: string, firstname?: string | null, lastname?: string | null, email: string } | null } };

export type GetAppealsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppealsQuery = { __typename?: 'Query', appeals: Array<{ __typename?: 'Appeals', id: string, createdAt: any, status: string, comment: string, houseId?: number | null, clientId?: number | null, realtorId?: number | null, house?: { __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, floor?: string | null, rooms?: string | null, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number } | null, client?: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null } | null, realtor?: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null } | null }> };

export type UpdateAppealMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: AppealsUpdateInput;
}>;


export type UpdateAppealMutation = { __typename?: 'Mutation', updateAppeal: { __typename?: 'Appeals', id: string, createdAt: any, status: string, comment: string, houseId?: number | null, clientId?: number | null, realtorId?: number | null, house?: { __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, floor?: string | null, rooms?: string | null, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number } | null, client?: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null } | null, realtor?: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null } | null } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthSuccessDto', id: string, createdAt: any, email: string, password: string, roleId?: number | null, token: string, role?: { __typename?: 'Role', id: string, title: string } | null, houses?: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number }> | null } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  middlename?: InputMaybe<Scalars['String']['input']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthSuccessDto', id: string, createdAt: any, email: string, password: string, roleId?: number | null, token: string, role?: { __typename?: 'Role', id: string, title: string } | null, houses?: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number }> | null } };

export type CreateFeatureMutationMutationVariables = Exact<{
  title: Scalars['String']['input'];
  value: Scalars['String']['input'];
  houses?: InputMaybe<HouseCreateNestedManyWithoutFeaturesInput>;
}>;


export type CreateFeatureMutationMutation = { __typename?: 'Mutation', createFeature: { __typename?: 'Feature', id: string, title: string, value: string } };

export type EditFeatureMutationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  value: Scalars['String']['input'];
}>;


export type EditFeatureMutationMutation = { __typename?: 'Mutation', updateFeature: { __typename?: 'Feature', id: string, title: string, value: string } };

export type DeleteFeatureMutationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteFeatureMutationMutation = { __typename?: 'Mutation', removeFeature: { __typename?: 'Feature', id: string, title: string, value: string } };

export type GetFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturesQuery = { __typename?: 'Query', features: Array<{ __typename?: 'Feature', id: string, title: string, value: string }> };

export type UploadFilesMutationVariables = Exact<{
  houseId?: InputMaybe<Scalars['String']['input']>;
  files: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
}>;


export type UploadFilesMutation = { __typename?: 'Mutation', uploadFiles: Array<{ __typename?: 'UploadDto', id: number, url: string }> };

export type GetHousesRentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHousesRentQuery = { __typename?: 'Query', housesRent: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, bio: string, price: number, realtorId: number, floor?: string | null, rooms?: string | null, images?: Array<{ __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null }> | null }> };

export type GetHousesAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHousesAllQuery = { __typename?: 'Query', housesAll: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, bio: string, price: number, realtorId: number, floor?: string | null, rooms?: string | null, images?: Array<{ __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null }> | null }> };

export type GetHouseDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetHouseDetailQuery = { __typename?: 'Query', house: { __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number, realtor: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null, role?: { __typename?: 'Role', id: string, title: string } | null, avatar?: { __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null } | null, houses?: Array<{ __typename?: 'House', id: string, title: string, address: string }> | null, appealsAsClient?: Array<{ __typename?: 'Appeals', id: string, createdAt: any, status: string, comment: string, clientId?: number | null, realtorId?: number | null, houseId?: number | null }> | null, appealsAsRealtor?: Array<{ __typename?: 'Appeals', id: string, createdAt: any, status: string, comment: string, clientId?: number | null, realtorId?: number | null, houseId?: number | null }> | null }, images?: Array<{ __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null }> | null, features?: Array<{ __typename?: 'Feature', id: string, title: string, value: string }> | null } };

export type CreateHouseMutationVariables = Exact<{
  input: HouseCreateDto;
}>;


export type CreateHouseMutation = { __typename?: 'Mutation', createHouse: { __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, floor?: string | null, rooms?: string | null, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number, realtor: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null }, images?: Array<{ __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null }> | null, features?: Array<{ __typename?: 'Feature', id: string, title: string, value: string }> | null, appeal?: { __typename?: 'Appeals', id: string, createdAt: any, status: string, comment: string, houseId?: number | null, clientId?: number | null, realtorId?: number | null } | null } };

export type GetHousesByRealtorIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetHousesByRealtorIdQuery = { __typename?: 'Query', housesRealtor: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, floor?: string | null, rooms?: string | null, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number, images?: Array<{ __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null }> | null, features?: Array<{ __typename?: 'Feature', id: string, title: string, value: string }> | null }> };

export type HousesFilterQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  isRent?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type HousesFilterQuery = { __typename?: 'Query', housesFilter: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, floor?: string | null, rooms?: string | null, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number, images?: Array<{ __typename?: 'File', id: string, path: string }> | null }> };

export type UpdateHouseMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  input: HouseUpdateInput;
}>;


export type UpdateHouseMutation = { __typename?: 'Mutation', updateHouse: { __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, floor?: string | null, rooms?: string | null, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number, images?: Array<{ __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null }> | null, features?: Array<{ __typename?: 'Feature', id: string, title: string, value: string }> | null } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, roleId?: number | null, avatarId?: number | null, houses?: Array<{ __typename?: 'House', id: string }> | null, role?: { __typename?: 'Role', id: string, title: string } | null, avatar?: { __typename?: 'File', id: string, path: string } | null }> };

export type ChangeUserRoleMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  roleId: Scalars['Int']['input'];
}>;


export type ChangeUserRoleMutation = { __typename?: 'Mutation', updateAnyUser: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, roleId?: number | null, avatarId?: number | null, role?: { __typename?: 'Role', id: string, title: string } | null, avatar?: { __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null } | null, houses?: Array<{ __typename?: 'House', id: string, createdAt: any, title: string, description: string, address: string, square: string, remont: string, bio: string, price: number, isRent: boolean, isSell: boolean, realtorId: number }> | null } };

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeAnyUser: { __typename?: 'User', id: string } };

export type UsersMeQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersMeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null, role?: { __typename?: 'Role', id: string, title: string } | null, avatar?: { __typename?: 'File', id: string, path: string, name?: string | null, size?: number | null, houseId?: number | null } | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null, avatar?: { __typename?: 'File', id: string, path: string } | null } };

export type UserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, createdAt: any, email: string, firstname?: string | null, lastname?: string | null, middlename?: string | null, password: string, telephone?: string | null, tg?: string | null, roleId?: number | null, avatarId?: number | null, avatar?: { __typename?: 'File', id: string, path: string } | null } };


export const CreateAppealDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAppeal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppealsCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAppeal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAppealInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"house"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realtor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAppealMutation, CreateAppealMutationVariables>;
export const GetAppealsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAppeals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appeals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"house"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realtor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAppealsQuery, GetAppealsQueryVariables>;
export const UpdateAppealDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppeal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppealsUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppeal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateAppealInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"house"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realtor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAppealMutation, UpdateAppealMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"houses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"middlename"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"middlename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"middlename"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"houses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CreateFeatureMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFeatureMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"houses"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HouseCreateNestedManyWithoutFeaturesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFeature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFeatureInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"houses"},"value":{"kind":"Variable","name":{"kind":"Name","value":"houses"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CreateFeatureMutationMutation, CreateFeatureMutationMutationVariables>;
export const EditFeatureMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditFeatureMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFeature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateFeatureInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<EditFeatureMutationMutation, EditFeatureMutationMutationVariables>;
export const DeleteFeatureMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFeatureMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFeature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<DeleteFeatureMutationMutation, DeleteFeatureMutationMutationVariables>;
export const GetFeaturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetFeaturesQuery, GetFeaturesQueryVariables>;
export const UploadFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"houseId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"houseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"houseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadFilesMutation, UploadFilesMutationVariables>;
export const GetHousesRentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHousesRent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"housesRent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}}]}}]}}]} as unknown as DocumentNode<GetHousesRentQuery, GetHousesRentQueryVariables>;
export const GetHousesAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHousesAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"housesAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}}]}}]}}]} as unknown as DocumentNode<GetHousesAllQuery, GetHousesAllQueryVariables>;
export const GetHouseDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHouseDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"house"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"realtor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"houses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appealsAsClient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appealsAsRealtor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetHouseDetailQuery, GetHouseDetailQueryVariables>;
export const CreateHouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createHouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HouseCreateDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHouseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"realtor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateHouseMutation, CreateHouseMutationVariables>;
export const GetHousesByRealtorIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHousesByRealtorId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"housesRealtor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetHousesByRealtorIdQuery, GetHousesByRealtorIdQueryVariables>;
export const HousesFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HousesFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isRent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"housesFilter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"minPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"maxPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPrice"}}},{"kind":"Argument","name":{"kind":"Name","value":"isRent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isRent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<HousesFilterQuery, HousesFilterQueryVariables>;
export const UpdateHouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateHouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HouseUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateHouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateHouseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateHouseMutation, UpdateHouseMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"houses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const ChangeUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAnyUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"role"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"houses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"square"}},{"kind":"Field","name":{"kind":"Name","value":"remont"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isRent"}},{"kind":"Field","name":{"kind":"Name","value":"isSell"}},{"kind":"Field","name":{"kind":"Name","value":"realtorId"}}]}}]}}]}}]} as unknown as DocumentNode<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>;
export const RemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAnyUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveUserMutation, RemoveUserMutationVariables>;
export const UsersMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"houseId"}}]}}]}}]}}]} as unknown as DocumentNode<UsersMeQuery, UsersMeQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"middlename"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"tg"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
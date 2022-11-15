
Object.defineProperty(exports, "__esModule", { value: true });

import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, NotFoundError, decompressFromBase64, getPrismaClient, sqltag, empty, join, raw, Decimal, Debug, objectEnumValues, makeStrictEnum, Extensions } from './runtime/index';


const Prisma = {}

const _Prisma = Prisma;
export { _Prisma as Prisma };

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  import { join as _join, resolve } from 'path';

import { findSync } from './runtime';
import { existsSync } from 'fs';

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && existsSync(_join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/generated",
    "generated",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

_Prisma.AssignedMemberScalarFieldEnum = makeEnum({
  memberId: 'memberId',
  taskId: 'taskId',
  role: 'role'
});

_Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

_Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

_Prisma.TaskScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  title: 'title',
  isDone: 'isDone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  workspaceId: 'workspaceId',
  statusId: 'statusId'
});

_Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

_Prisma.UserIdentityScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  email: 'email',
  password: 'password',
  refreshToken: 'refreshToken'
});

_Prisma.UserScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

_Prisma.WorkspaceMemberScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  userId: 'userId',
  workspaceId: 'workspaceId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

_Prisma.WorkspaceScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

_Prisma.WorkspaceTaskStatusScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  workspaceId: 'workspaceId',
  order: 'order'
});
export const TaskRole = makeEnum({
  CREATOR: 'CREATOR',
  OBSERVER: 'OBSERVER',
  EXECUTOR: 'EXECUTOR'
});

export const WorkspaceMemberRole = makeEnum({
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  USER: 'USER'
});

_Prisma.ModelName = makeEnum({
  Workspace: 'Workspace',
  WorkspaceMember: 'WorkspaceMember',
  Task: 'Task',
  AssignedMember: 'AssignedMember',
  User: 'User',
  UserIdentity: 'UserIdentity',
  WorkspaceTaskStatus: 'WorkspaceTaskStatus'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"WorkspaceMemberRole\",\"values\":[{\"name\":\"OWNER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null}],\"dbName\":null},{\"name\":\"TaskRole\",\"values\":[{\"name\":\"CREATOR\",\"dbName\":null},{\"name\":\"OBSERVER\",\"dbName\":null},{\"name\":\"EXECUTOR\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"Workspace\",\"dbName\":\"workspaces\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceMember\",\"relationName\":\"WorkspaceToWorkspaceMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"TaskToWorkspace\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taskStatuses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceTaskStatus\",\"relationName\":\"WorkspaceToWorkspaceTaskStatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"WorkspaceMember\",\"dbName\":\"workspace_members\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToWorkspaceMember\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workspace\",\"relationName\":\"WorkspaceToWorkspaceMember\",\"relationFromFields\":[\"workspaceId\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WorkspaceMemberRole\",\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"tasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssignedMember\",\"relationName\":\"AssignedMemberToWorkspaceMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Task\",\"dbName\":\"tasks\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"workspace\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workspace\",\"relationName\":\"TaskToWorkspace\",\"relationFromFields\":[\"workspaceId\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedMembers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssignedMember\",\"relationName\":\"AssignedMemberToTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceTaskStatus\",\"relationName\":\"TaskToWorkspaceTaskStatus\",\"relationFromFields\":[\"statusId\"],\"relationToFields\":[\"uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AssignedMember\",\"dbName\":\"assigned_members\",\"fields\":[{\"name\":\"memberId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceMember\",\"relationName\":\"AssignedMemberToWorkspaceMember\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taskId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"AssignedMemberToTask\",\"relationFromFields\":[\"taskId\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TaskRole\",\"default\":\"EXECUTOR\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"memberId\",\"taskId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"User\",\"dbName\":\"users\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"workspaceParticipation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceMember\",\"relationName\":\"UserToWorkspaceMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"UserIdentity\",\"dbName\":\"users_identity\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"WorkspaceTaskStatus\",\"dbName\":\"workspace_task_statuses\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"workspace\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Workspace\",\"relationName\":\"WorkspaceToWorkspaceTaskStatus\",\"relationFromFields\":[\"workspaceId\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"TaskToWorkspaceTaskStatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Workspace\",\"plural\":\"workspaces\",\"findUnique\":\"findUniqueWorkspace\",\"findFirst\":\"findFirstWorkspace\",\"findMany\":\"findManyWorkspace\",\"create\":\"createOneWorkspace\",\"createMany\":\"createManyWorkspace\",\"delete\":\"deleteOneWorkspace\",\"update\":\"updateOneWorkspace\",\"deleteMany\":\"deleteManyWorkspace\",\"updateMany\":\"updateManyWorkspace\",\"upsert\":\"upsertOneWorkspace\",\"aggregate\":\"aggregateWorkspace\",\"groupBy\":\"groupByWorkspace\"},{\"model\":\"WorkspaceMember\",\"plural\":\"workspaceMembers\",\"findUnique\":\"findUniqueWorkspaceMember\",\"findFirst\":\"findFirstWorkspaceMember\",\"findMany\":\"findManyWorkspaceMember\",\"create\":\"createOneWorkspaceMember\",\"createMany\":\"createManyWorkspaceMember\",\"delete\":\"deleteOneWorkspaceMember\",\"update\":\"updateOneWorkspaceMember\",\"deleteMany\":\"deleteManyWorkspaceMember\",\"updateMany\":\"updateManyWorkspaceMember\",\"upsert\":\"upsertOneWorkspaceMember\",\"aggregate\":\"aggregateWorkspaceMember\",\"groupBy\":\"groupByWorkspaceMember\"},{\"model\":\"Task\",\"plural\":\"tasks\",\"findUnique\":\"findUniqueTask\",\"findFirst\":\"findFirstTask\",\"findMany\":\"findManyTask\",\"create\":\"createOneTask\",\"createMany\":\"createManyTask\",\"delete\":\"deleteOneTask\",\"update\":\"updateOneTask\",\"deleteMany\":\"deleteManyTask\",\"updateMany\":\"updateManyTask\",\"upsert\":\"upsertOneTask\",\"aggregate\":\"aggregateTask\",\"groupBy\":\"groupByTask\"},{\"model\":\"AssignedMember\",\"plural\":\"assignedMembers\",\"findUnique\":\"findUniqueAssignedMember\",\"findFirst\":\"findFirstAssignedMember\",\"findMany\":\"findManyAssignedMember\",\"create\":\"createOneAssignedMember\",\"createMany\":\"createManyAssignedMember\",\"delete\":\"deleteOneAssignedMember\",\"update\":\"updateOneAssignedMember\",\"deleteMany\":\"deleteManyAssignedMember\",\"updateMany\":\"updateManyAssignedMember\",\"upsert\":\"upsertOneAssignedMember\",\"aggregate\":\"aggregateAssignedMember\",\"groupBy\":\"groupByAssignedMember\"},{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findFirst\":\"findFirstUser\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"createMany\":\"createManyUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"UserIdentity\",\"plural\":\"userIdentities\",\"findUnique\":\"findUniqueUserIdentity\",\"findFirst\":\"findFirstUserIdentity\",\"findMany\":\"findManyUserIdentity\",\"create\":\"createOneUserIdentity\",\"createMany\":\"createManyUserIdentity\",\"delete\":\"deleteOneUserIdentity\",\"update\":\"updateOneUserIdentity\",\"deleteMany\":\"deleteManyUserIdentity\",\"updateMany\":\"updateManyUserIdentity\",\"upsert\":\"upsertOneUserIdentity\",\"aggregate\":\"aggregateUserIdentity\",\"groupBy\":\"groupByUserIdentity\"},{\"model\":\"WorkspaceTaskStatus\",\"plural\":\"workspaceTaskStatuses\",\"findUnique\":\"findUniqueWorkspaceTaskStatus\",\"findFirst\":\"findFirstWorkspaceTaskStatus\",\"findMany\":\"findManyWorkspaceTaskStatus\",\"create\":\"createOneWorkspaceTaskStatus\",\"createMany\":\"createManyWorkspaceTaskStatus\",\"delete\":\"deleteOneWorkspaceTaskStatus\",\"update\":\"updateOneWorkspaceTaskStatus\",\"deleteMany\":\"deleteManyWorkspaceTaskStatus\",\"updateMany\":\"updateManyWorkspaceTaskStatus\",\"upsert\":\"upsertOneWorkspaceTaskStatus\",\"aggregate\":\"aggregateWorkspaceTaskStatus\",\"groupBy\":\"groupByWorkspaceTaskStatus\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
_Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/user/projects/test-todo/models/prisma/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "4.6.1",
  "engineVersion": "694eea289a8462c80264df36757e4fdc129b1b32",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




import { warnEnvConflicts } from './runtime/index';

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
const _PrismaClient = PrismaClient;
export { _PrismaClient as PrismaClient };
Object.assign(exports, Prisma)

_join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
_join(process.cwd(), "prisma/generated/libquery_engine-debian-openssl-1.1.x.so.node")
_join(__dirname, "schema.prisma");
_join(process.cwd(), "prisma/generated/schema.prisma")

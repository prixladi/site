type DBs = 'MongoDB' | 'Redis' | 'PostgreSQL' | 'SQL Server' | 'SQL' | 'CosmosDB';

type DevOps = 'Github Actions' | 'Azure' | 'Azure DevOps' | 'AWS';

type Languages = 'C#' | 'JavaScript' | 'TypeScript';

type FWs =
  | 'RabbitMQ'
  | 'React'
  | 'Next.js'
  | '.NET'
  | '.NET Core'
  | 'ASP.NET Core'
  | 'Node.js'
  | 'Entity Framework'
  | 'Chakra UI'
  | 'Ant Design'
  | 'Leaflet'
  | 'Vue'
  | 'Tailwind CSS'
  | 'SolidJS'
  | 'Deno'
  | 'sass';

type Misc =
  | 'RabbitMQ'
  | 'IdentityServer'
  | 'SignalR'
  | 'Docker'
  | 'Kubernetes'
  | 'Express.js'
  | 'GraphQL'
  | 'Apollo Server'
  | 'Apollo Client'
  | 'Serverless'
  | 'Azure Blob Storage'
  | 'OpenID Connect'
  | 'Socket.io'
  | 'React Query'
  | 'tRPC';

export type Technology = DBs | DevOps | Languages | FWs | Misc;

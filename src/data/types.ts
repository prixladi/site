type DBs = 'MongoDB' | 'Redis' | 'PostgreSQL' | 'SQL Server' | 'SQL';

type DevOps = 'Github Actions' | 'Azure' | 'Azure DevOps';

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
  | 'Leaflet';

type Misc =
  | 'RabbitMQ'
  | 'IdentityServer'
  | 'SignalR'
  | 'Docker'
  | 'Kubernetes'
  | 'Express.js'
  | 'GraphQL'
  | 'Apollo Server'
  | 'Apollo Client';

export type Technology = DBs | DevOps | Languages | FWs | Misc;

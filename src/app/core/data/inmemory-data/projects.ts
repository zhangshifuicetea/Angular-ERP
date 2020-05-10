export const stages: Stage[] = [
  {
    id: 's11',
    title: '待办',
    projects: [
      {id: 'p111', content: '待办项目1', author: 'Spike'},
      {id: 'p222', content: '待办项目2', author: 'Faye'},
      {id: 'p333', content: '待办项目3', author: 'Jet'},
    ]
  },
  {
    id: 's22',
    title: '设计阶段',
    projects: [
      {id: 'p333', content: '设计中的1', author: 'Edward'},
      {id: 'p444', content: '设计中的2', author: 'Ein'},
      {id: 'p555', content: '设计中的3', author: 'Spike'},
    ]
  },
  {
    id: 's33',
    title: '开发阶段',
    projects: [
      {id: 'p66', content: '开发中1', author: 'Faye'},
      {id: 'p77', content: '开发中2', author: 'Spike'},
    ]
  },
  {
    id: 's33',
    title: '测试阶段',
    projects: [
      {id: 'p88', content: '测试1', author: 'Spike'},
      {id: 'p99', content: '测试2', author: 'Jet'},
    ]
  },
  {
    id: 's33',
    title: '完成',
    projects: [
      {id: 'p10', content: '完成1', author: 'Spike'},
      {id: 'p11', content: '完成2', author: 'Spike'},
    ]
  }
];

export interface Project {
  id?: string;
  content: string;
  author: string;
}

export interface Stage {
  id: string;
  title: string;
  projects: Project[];
}

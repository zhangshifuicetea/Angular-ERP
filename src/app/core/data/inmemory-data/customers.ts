export const customers: Customer[] = [
  {id: 11, name: 'Dr Nice', created: '2020/05/20', tags: ['意向', '定制', '亚洲']},
  {id: 12, name: 'Narco', created: '2020/05/19', tags: ['客源', '欧洲'] },
  {id: 13, name: 'Bombasto', created: '2020/05/16', tags: ['意向', '标准', 'Houston']},
  {id: 14, name: 'Celeritas', created: '2020/03/21', tags: ['签单', '标准']},
  {id: 15, name: 'Archer', created: '2020/02/1', tags: ['签单', '定制', 'M78']},
  {id: 16, name: 'Dr Nice', created: '2020/05/20', tags: ['意向', '定制', '亚洲']},
  {id: 17, name: 'Narco', created: '2020/05/19', tags: ['客源', '欧洲'] },
  {id: 18, name: 'Bombasto', created: '2020/05/16', tags: ['意向', '标准', 'Houston']},
  {id: 19, name: 'Celeritas', created: '2020/03/21', tags: ['签单', '标准']},
];

export interface Customer {
  id?: number;
  name: string;
  created: string;
  tags?: string[];
}

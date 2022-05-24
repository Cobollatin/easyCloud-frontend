/* eslint-disable */
import * as moment from 'moment';

const _date = moment().toDate();
export const quotes = [
    {
        id          : '1',
        title        : 'VM 1',
        description : 'lore ipsum sic dolor amet et minim veniam laborum adipisicing',
        service: 'Virtual Machines',
        date : moment().subtract(25, 'minutes').toISOString(),
        q_cores: '16',
        memory: '128',
        so: 'Linux',
        storage: '1024',
        price: '$100',
    },
    {
        id          : '1',
        title        : 'DB 1',
        description : 'lore ipsum sic dolor amet et minim veniam laborum adipisicing',
        service: 'Data Base',
        date : moment().subtract(25, 'minutes').toISOString(),
        q_cores: '16',
        storage: '128',
        elastic: 'Activado',
        type: 'SQL',
        software: 'PostgreSQL',
        price: '$100',
    },
    {
        id          : '1',
        title        : 'VM 2',
        description : 'lore ipsum sic dolor amet et minim veniam laborum adipisicing',
        service: 'Virtual Machines',
        date : moment().subtract(25, 'minutes').toISOString(),
        location : 'US',
        q_cores: '8',
        memory: '128',
        storage: '1024',
        so: 'Windows',
        price: '$111',
    },
    {
        id          : '1',
        title        : 'SL 2',
        description : 'lore ipsum sic dolor amet et minim veniam laborum adipisicing',
        service: 'Serverless',
        date : moment().subtract(25, 'minutes').toISOString(),
        arch: 'x86',
        memory: '128',
        execute: '120ms',
        price: '$111',
    },
];
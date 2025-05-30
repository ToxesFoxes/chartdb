import { DatabaseType } from '@/lib/domain/database-type';
import type { Template } from '../templates-data';
import image from '@/assets/templates/bouncer-db.png';
import imageDark from '@/assets/templates/bouncer-db-dark.png';

const now = Date.now();

export const bouncerDb: Template = {
    slug: 'bouncer-database',
    name: 'Bouncer',
    shortDescription: 'Laravel Eloquent roles and abilities',
    description:
        'framework-agnostic approach to managing roles and abilities for any app using Eloquent models.',
    image,
    imageDark,
    tags: ['Postgres', 'Laravel', 'PHP'],
    featured: false,
    url: 'https://github.com/JosephSilber/bouncer',
    diagram: {
        id: 'bouncer_db',
        name: 'bouncer-database',
        createdAt: new Date(),
        updatedAt: new Date(),
        databaseType: DatabaseType.POSTGRESQL,
        tables: [
            {
                id: '1ecviq82pwny6e5qsftqqv85t',
                name: 'roles',
                schema: 'public',
                x: 900,
                y: 100,
                fields: [
                    {
                        id: '6dgpy48ulwwj4la0v9qyasacn',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'g8j0s94za7lstfgqpu0rjv30q',
                        name: 'name',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'mt51mbyv77zhhlxo6aoqtdrvb',
                        name: 'title',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'r0kdjfscr4qrxug9lltz8ff05',
                        name: 'level',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '8pc8xntbm3ie0to59grej0hi0',
                        name: 'scope',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'r1bpa7kr06tlijcc5g6ozhyi1',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'fcghi02e6v8ituzvhxcqvry5s',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '5ozix6ibq6b8ifaqvpazqsd4e',
                        name: 'roles_pkey',
                        unique: true,
                        fieldIds: ['6dgpy48ulwwj4la0v9qyasacn'],
                        createdAt: now,
                    },
                    {
                        id: 'vb8w5m8rtwigvffo0hza1cnq5',
                        name: 'roles_name_scope_unique',
                        unique: true,
                        fieldIds: [
                            'g8j0s94za7lstfgqpu0rjv30q',
                            '8pc8xntbm3ie0to59grej0hi0',
                        ],
                        createdAt: now,
                    },
                    {
                        id: 'us1nbhilpzrzzdz20ee8b2yz5',
                        name: 'roles_scope_index',
                        unique: false,
                        fieldIds: ['8pc8xntbm3ie0to59grej0hi0'],
                        createdAt: now,
                    },
                ],
                color: '#ff6b8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: '2dk2y86w5uwob2walqmzpvd38',
                name: 'permissions',
                schema: 'public',
                x: 500,
                y: 100,
                fields: [
                    {
                        id: 'dw9wefm90272eqrtdzc0kija2',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'dln78b8156xss9vmtzufiyq89',
                        name: 'ability_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'aybk9y71s2rkghsn2fpze24bc',
                        name: 'entity_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '6jy0ziy0307k43itxl9syi36d',
                        name: 'entity_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'os6d10ohhct1tftf3ddpzplgl',
                        name: 'forbidden',
                        type: {
                            id: 'smallint',
                            name: 'smallint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'o6zy8fbod1pojyclv43hpnzyq',
                        name: 'scope',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'dmuc2cgc1fsf7ex8848yfvf51',
                        name: 'permissions_pkey',
                        unique: true,
                        fieldIds: ['dw9wefm90272eqrtdzc0kija2'],
                        createdAt: now,
                    },
                    {
                        id: 'zauknvtjvcvv8s9kzmpcbidmq',
                        name: 'permissions_entity_id_entity_type_scope_index',
                        unique: false,
                        fieldIds: [
                            'aybk9y71s2rkghsn2fpze24bc',
                            '6jy0ziy0307k43itxl9syi36d',
                            'o6zy8fbod1pojyclv43hpnzyq',
                        ],
                        createdAt: now,
                    },
                    {
                        id: 'm9h7f90dxevidzoel423z84pq',
                        name: 'permissions_ability_id_index',
                        unique: false,
                        fieldIds: ['dln78b8156xss9vmtzufiyq89'],
                        createdAt: now,
                    },
                    {
                        id: 'e25jukkbmmmgtbux5mprd5c2t',
                        name: 'permissions_scope_index',
                        unique: false,
                        fieldIds: ['o6zy8fbod1pojyclv43hpnzyq'],
                        createdAt: now,
                    },
                ],
                color: '#ff6363',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'cv6gzut9xl6vi18h1uipfszse',
                name: 'abilities',
                schema: 'public',
                x: 100,
                y: 100,
                fields: [
                    {
                        id: '5klow3heh0h4wyysvvlolrd3k',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'b5fkxgkqocrav6gdjw5u8qna9',
                        name: 'name',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'p9ein9lspzmrtrcgxnwcu4jtr',
                        name: 'title',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'o7iqp8jvekbqmufkriravzd14',
                        name: 'entity_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'z6347t0nenn6l7zfckobbkwky',
                        name: 'entity_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'a42we94njfh5wfe40tzshz7yy',
                        name: 'only_owned',
                        type: {
                            id: 'smallint',
                            name: 'smallint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'ot976a09yh5xjnidymxl4bvx7',
                        name: 'options',
                        type: {
                            id: 'json',
                            name: 'json',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'sd6tn5b4dhrezroc5deefct22',
                        name: 'scope',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '7ei2ayl775rt4anar8we426b7',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '9frp78uwm48o3rehdgi8zfgwe',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '3tgypga0ix9jhfn7bed3lg3zf',
                        name: 'abilities_pkey',
                        unique: true,
                        fieldIds: ['5klow3heh0h4wyysvvlolrd3k'],
                        createdAt: now,
                    },
                    {
                        id: 'd4sskhldtbn57htxwc3qobpwp',
                        name: 'abilities_scope_index',
                        unique: false,
                        fieldIds: ['sd6tn5b4dhrezroc5deefct22'],
                        createdAt: now,
                    },
                ],
                color: '#9ef07a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'e5a0uhiuu982vjhbujvd40klh',
                name: 'model_has_abilities',
                schema: 'public',
                x: 583.14307105074,
                y: 757.4824496551473,
                fields: [
                    {
                        id: '7wir8w7knt9jwjkc4ttsl0vn6',
                        name: 'ability_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'ojer4wzhyne7fdrgw9qy47x12',
                        name: 'model_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: true,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'dzak2cn4sxwh0i85qpxxwnkz9',
                        name: 'model_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 's6asnly67otxpgpvsfu0u4du5',
                        name: 'scope',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'lrsg01t8cmwyaezp5uamrjoto',
                        name: 'model_has_abilities_pkey',
                        unique: true,
                        fieldIds: [
                            '7wir8w7knt9jwjkc4ttsl0vn6',
                            'ojer4wzhyne7fdrgw9qy47x12',
                            'dzak2cn4sxwh0i85qpxxwnkz9',
                        ],
                        createdAt: now,
                    },
                ],
                color: '#42e0c0',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'ftblbz8shvhibeyenqw2j66og',
                name: 'tenants',
                schema: 'public',
                x: 900,
                y: 600,
                fields: [
                    {
                        id: 'rilheq75e61ukzvoovax5dww5',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'hdvep6n3x5mpyize0poffmi8x',
                        name: 'name',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '2zvadpju6k7472brqxnjwc25y',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '0a7ypts0qu8p8xdgmx973r0j2',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'k6kmwfu8adxag9bzlvk0rfihc',
                        name: 'tenants_pkey',
                        unique: true,
                        fieldIds: ['rilheq75e61ukzvoovax5dww5'],
                        createdAt: now,
                    },
                ],
                color: '#7175fa',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'lyw5j25p9jijopmxeg9wh21wt',
                name: 'assigned_roles',
                schema: 'public',
                x: 1300,
                y: 100,
                fields: [
                    {
                        id: 'md1pv885295zlruqjf3bc2cn4',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'wg9z61qv2m6gmqulnfrozpp0f',
                        name: 'role_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'mr6hxkrpypz2vdsfidw3ilvzh',
                        name: 'entity_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'g7u6a5onmfgzgm7qb528koa6w',
                        name: 'entity_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'gvlv2hj10lgelg9cn3366sslu',
                        name: 'restricted_to_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '1devmagh0xrj16ynyxvas28b4',
                        name: 'restricted_to_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '27rz618ufyo31x2v9tqmv7bf9',
                        name: 'scope',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'v5jrok6ayblrkll3rj4opwb0v',
                        name: 'assigned_roles_entity_id_entity_type_scope_index',
                        unique: false,
                        fieldIds: [
                            'mr6hxkrpypz2vdsfidw3ilvzh',
                            'g7u6a5onmfgzgm7qb528koa6w',
                            '27rz618ufyo31x2v9tqmv7bf9',
                        ],
                        createdAt: now,
                    },
                    {
                        id: 'ngfkhhz8p8qd1in8jfp3m33dh',
                        name: 'assigned_roles_role_id_index',
                        unique: false,
                        fieldIds: ['wg9z61qv2m6gmqulnfrozpp0f'],
                        createdAt: now,
                    },
                    {
                        id: 'dmqwn02z4vxbyajgx9a85o9z4',
                        name: 'assigned_roles_scope_index',
                        unique: false,
                        fieldIds: ['27rz618ufyo31x2v9tqmv7bf9'],
                        createdAt: now,
                    },
                    {
                        id: 'eanj0487n1x5r3kbf3asm1sgg',
                        name: 'assigned_roles_pkey',
                        unique: true,
                        fieldIds: ['md1pv885295zlruqjf3bc2cn4'],
                        createdAt: now,
                    },
                ],
                color: '#8eb7ff',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'mcsql3yipul3bvoa8zp2z6xhm',
                name: 'model_has_roles',
                schema: 'public',
                x: 1192.3806696641184,
                y: 462.2441187492435,
                fields: [
                    {
                        id: 'nmzyqbvbie1q6u0qdj2bx0ejk',
                        name: 'role_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'dv9059syivzdb1lq2ibqhu0rf',
                        name: 'model_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: true,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'tg1p3nusig09vpso36nv4cqsm',
                        name: 'model_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '1ak37xnicelk5z4tpekrdhrcn',
                        name: 'scope',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '1pnpzmyhlhs32qwtcwz1po9ja',
                        name: 'model_has_roles_pkey',
                        unique: true,
                        fieldIds: [
                            'nmzyqbvbie1q6u0qdj2bx0ejk',
                            'dv9059syivzdb1lq2ibqhu0rf',
                            'tg1p3nusig09vpso36nv4cqsm',
                        ],
                        createdAt: now,
                    },
                ],
                color: '#ff6b8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'oy09nzysvqt9q38z38qdop5ky',
                name: 'users',
                schema: 'public',
                x: 598.0705987070124,
                y: 389.1233352248536,
                fields: [
                    {
                        id: 'y13z863nrqq2jx88humld1c8l',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'ki90zf8yhg9cr4qa58hoi4mhh',
                        name: 'name',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '8qm8ms9bgwz5hhlaq5l36hnm1',
                        name: 'email',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'vyso7h7t0wc441lj7zo51n5wd',
                        name: 'password',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '8tmf7j5sga201ll66tufvruiu',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '5l5z4tzttk5f1xff7cot9aoxl',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'nzc8rmf6y2cz9xjqnc90c4klf',
                        name: 'users_pkey',
                        unique: true,
                        fieldIds: ['y13z863nrqq2jx88humld1c8l'],
                        createdAt: now,
                    },
                ],
                color: '#ff6b8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'rk4mh3tnvjgx2olpm5nu317g9',
                name: 'activity_logs',
                schema: 'public',
                x: 225.9858576165807,
                y: 561.8413654216401,
                fields: [
                    {
                        id: '78k97fv3zqmnhqlygy10lq7oy',
                        name: 'id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'ulzkft5ohumvi9faj4ha0r1rn',
                        name: 'loggable_type',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'r7utet2eq51fiqks56uird3ut',
                        name: 'loggable_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '73nnegxjwq3fpccbqzxhmhgfp',
                        name: 'action',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'vav8txgj5835e0w3g86be4ozi',
                        name: 'user_id',
                        type: {
                            id: 'bigint',
                            name: 'bigint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'nopldofnpy5yhlx2qcy92j3ix',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'izfr3v00bqcrzcac5d745eztx',
                        name: 'activity_logs_pkey',
                        unique: true,
                        fieldIds: ['78k97fv3zqmnhqlygy10lq7oy'],
                        createdAt: now,
                    },
                ],
                color: '#ff6b8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
        ],
        relationships: [
            {
                id: 'ikg1ovyjpye234c8zfhumhr6h',
                name: 'permissions_ability_id_foreign',
                sourceSchema: 'public',
                targetSchema: 'public',
                sourceTableId: '2dk2y86w5uwob2walqmzpvd38',
                targetTableId: 'cv6gzut9xl6vi18h1uipfszse',
                sourceFieldId: 'dln78b8156xss9vmtzufiyq89',
                targetFieldId: '5klow3heh0h4wyysvvlolrd3k',
                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'wkembgjtz8w9fau09ngjlxa8v',
                name: 'assigned_roles_role_id_foreign',
                sourceSchema: 'public',
                targetSchema: 'public',
                sourceTableId: 'lyw5j25p9jijopmxeg9wh21wt',
                targetTableId: '1ecviq82pwny6e5qsftqqv85t',
                sourceFieldId: 'wg9z61qv2m6gmqulnfrozpp0f',
                targetFieldId: '6dgpy48ulwwj4la0v9qyasacn',
                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
        ],
        dependencies: [],
    },
};

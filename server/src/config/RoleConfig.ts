export default {
    defaultName: 'new role',
    defaultPermission: 0,
    defaultColor: '#808080',
    nameMaxLength: 25,
    nameMinLength: 1,
    descriptionMaxLength: 250,
    descriptionMinLength: 1,
    roles: [
        {
            _id: 0,
            name: 'member',
            description: 'simple member',
            permissions: 0,
            color: '#ffffff'
        },
        {
            _id: 1,
            name: 'redacteur',
            description: 'simple redacteur',
            permissions: 1,
            color: '#0000ff'
        },
        {
            _id: 2,
            name: 'moderator',
            description: 'simple moderator',
            permissions: 2,
            color: '#00ff00'
        },
        {
            _id: 3,
            name: 'admin',
            description: 'simple admin',
            permissions: 3,
            color: '#ff0000'
        },
    ]
}
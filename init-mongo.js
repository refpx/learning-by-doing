db.createUser({
  user: 'refpx',
  pwd: 'refpx123',
  roles: [
    {
      role: 'readWrite',
      db: 'example',
    },
  ],
})

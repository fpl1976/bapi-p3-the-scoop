const yaml = require('js-yaml');
const fs = require('fs');

const saveDatabase = (db) => {
    const dump = yaml.dump(db);
    fs.writeFileSync('./database.yml', dump);
}

const loadDatabase = () => {
    return yaml.safeLoad(fs.readFileSync('./database.yml'));
}
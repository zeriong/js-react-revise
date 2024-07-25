import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

export const users = Array.from(Array(THRESHOLD), () => {
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        background: faker.image.urlPicsumPhotos(),
    };
});

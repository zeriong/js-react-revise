import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

/**@return { { id: string, name: string, avatar: string, background: string } } 리턴값 */
export const users = Array.from(Array(THRESHOLD), () => {
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        background: faker.image.urlPicsumPhotos(),
    };
});

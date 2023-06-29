import { faker } from '@faker-js/faker';

export const createRandomUser = (companyId) => {
  return {
    companyId,
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

export const createRandomCompany = () => {
  return {
    companyId: faker.string.uuid(),
    name: faker.company.name(),
    motto: faker.company.catchPhrase(),
  };
};

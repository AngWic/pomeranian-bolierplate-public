import { createRandomCompany, createRandomUser } from './utils';

export const companies = Array(5)
  .fill()
  .map((el) => createRandomCompany());

export const employees = Array(25)
  .fill()
  .map((el) =>
    createRandomUser(
      companies[Math.floor(Math.random() * companies.length)].companyId
    )
  );

export const getAllEmployes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(employees));
  }, 3000);
};

export const getAllCompanies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(companies));
  }, 3000);
};

export const getCompanyDetails = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      resolve(companies.filter((company) => company.companyId === id)),
      3000
    );
  }, 3000);
};

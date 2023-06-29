//CAŁY PLIK DO POPRAWY

// import { useEffect, useState } from 'react';
// import './styles.css';
// import { faker } from '@faker-js/faker';
// import { getCompanyDetails, companies, employees } from './db';

// const createRandomUser = (source) => {
//   return {
//     source,
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

// const fbDb = Array(10)
//   .fill()
//   .map((el) => createRandomUser('facebook'));

// const googDb = Array(10)
//   .fill()
//   .map((el) => createRandomUser('google'));

// export const AsyncAwait = () => {
//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   const getData = async () => {
//   //     const myPromise = new Promise((resolve, reject) => {
//   //       setTimeout(() => {
//   //         resolve(fbDb);
//   //         // reject('error');
//   //       }, 1000);
//   //     });

//   //     //try ... catch

//   //     return myPromise
//   //       .then((data) => {
//   //         // console.log('getData', data);
//   //         return data;
//   //       })
//   //       .catch((err) => {
//   //         return err;
//   //       });

//   //     async function getDataFaster() {
//   //       const myPromise = new Promise((resolve, reject) => {
//   //         setTimeout(() => {
//   //           resolve(googDb);
//   //           // reject('error');
//   //         }, 100);
//   //       });

//   //       return myPromise
//   //         .then((data) => {
//   //           // console.log('getDataFaster', data);
//   //           return data;
//   //         })
//   //         .catch((err) => {
//   //           return err;
//   //         });
//   //     }

//   //     const fbDataPromise = getData();
//   //     const googleDataPromise = getDataFaster();

//   //     Promise.allSettled([fbDataPromise, googleDataPromise]).then(
//   //       (promises) => promises.filter((prom) => prom.status !== 'fulfilled')
//   //       // console.table(values));
//   //       // console.log('value: ', value)
//   //     );
//   //   };
//   // }, []);

//   // const handleMottoAlert = (companyId) => {
//   //   getCompanyDetails(companyId)
//   //     .then((company) => {
//   //       return company.motto;
//   //     })
//   //     .catch((err) => {
//   //       return err;
//   //     });

//   //   //albo drugi sposób:

//   //   // const handleMottoAlert = async (companyId) => {
//   //   //   try {
//   //   //   const company = await getCompanyDetails(companyId);
//   //   //   alert(company.motto);
//   //   // } catch (e) {
//   //   //   console.error(e);
//   //   // }
//   //   // };

//     return (
//       <>
//         <h4>Companies</h4>
//         {/* {companies.map((company) => (
//           <div key={company.companyId} title={company.companyId}>
//             {company.name}
//           </div>
//         ))}
//         <hr />
//         <h4>Employees</h4>
//         {employees.map((employee) => (
//           <div key={employee.userId} title={employee.userId}>
//             <ul>
//               <li>
//                 Username: {employee.username}
//                 <br />
//                 <i onClick={() => handleMottoAlert(employee.userId)}>
//                   Works for:
//                   <b>
//                     {' '}
//                     {companies.find(
//                       (company) => company.companyId === employee.companyId
//                     )?.name || 'unknown company'}
//                   </b>
//                 </i>
//                 {/* <button onClick={handleMottoAlert}>company motto</button> */}
//                 {/* <p>
//                   {`Date of birth: ${employee.birthdate.getDay()}.${employee.birthdate.getMonth()}.${employee.birthdate.getFullYear()}`}
//                 </p>
//               </li>
//             </ul>
//           </div>
//         ))}
//       </>
//     );
//   }; */} */}
// };

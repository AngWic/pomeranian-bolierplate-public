import './styles.css';

// export const ArrayRendering = () => {
//   const cars = [
//     { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
//     { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
//     { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
//     { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
//   ];

//   return (
//     <div>
//       Auta:
//       <ul>
//         {cars.map((car) => {
//           return (
//             // <li key={car.id}>
//             <li key={car.make + car.model}>
//               {car.make} <b>{car.model}</b> ({car.year}) - <u>{car.owner}</u>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export const ArrayRendering = () => {
  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like Heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

  return (
    <div>
      <table className="table-punk">
        <thead>
          <tr>
            <th>Band</th>
            <th>Year formed</th>
            <th>No. of albums</th>
            <th>Most famous songs</th>
          </tr>
        </thead>

        <tbody>
          {bands.map((punk) => (
            <tr>
              <td>{punk.band}</td>
              <td>{punk.yearFormed}</td>
              <td>{punk.albums}</td>
              <td>{punk.mostFamousSong}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" className="total-albums">
              Total albums
            </td>
            <td colspan="2" className="total-albums-sum">
              47
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

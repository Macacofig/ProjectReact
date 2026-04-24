export default function CountryCard({ country, onClick }: any) {
  return (
    <div onClick={onClick} style={{ border: '1px solid #ccc', padding: '1rem', cursor: 'pointer' }}>
      <img src={country.flags.png} alt="flag" width="100%" />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Región: {country.region}</p>
    </div>
  );
}
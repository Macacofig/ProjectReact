export default function CountryDetail({ country, onBack }: any) {
  return (
    <div>
      <button onClick={onBack}>Volver</button>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} width="200" />
      <p>Población: {country.population}</p>
      <p>Región: {country.region}</p>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Idiomas: {country.languages && Object.values(country.languages).join(', ')}</p>
      <p>Moneda: {country.currencies && Object.values(country.currencies)[0].name}</p>
      <p>Zona horaria: {country.timezones?.join(', ')}</p>
      {country.maps?.googleMaps && (
        <a href={country.maps.googleMaps} target="_blank">Ver mapa</a>
      )}
    </div>
  );
}
import { useEffect, useState } from 'react';
import CountryCard from './components/CountryCard';
import CountryDetail from './components/CountryDetail';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';

export default function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('Todos');
  const [sort, setSort] = useState('');
  const [selected, setSelected] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...countries];

    // búsqueda
    if (search) {
      result = result.filter(c =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    // filtro región
    if (region !== 'Todos') {
      result = result.filter(c => c.region === region);
    }

    // ordenamiento
    if (sort === 'asc') {
      result.sort((a, b) => a.population - b.population);
    } else if (sort === 'desc') {
      result.sort((a, b) => b.population - a.population);
    }

    setFiltered(result);
  }, [search, region, sort, countries]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar datos</p>;

  if (selected) {
    return (
      <CountryDetail country={selected} onBack={() => setSelected(null)} />
    );
  }

  return (
    <div>
      <h1>Países</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter region={region} setRegion={setRegion} />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Ordenar</option>
        <option value="asc">Población ↑</option>
        <option value="desc">Población ↓</option>
      </select>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '1rem' }}>
        {filtered.map((c, i) => (
          <CountryCard key={i} country={c} onClick={() => setSelected(c)} />
        ))}
      </div>
    </div>
  );
} 
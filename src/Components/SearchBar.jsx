export default function SearchBar({ search, setSearch }: any) {
  return (
    <input
      type="text"
      placeholder="Buscar país..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
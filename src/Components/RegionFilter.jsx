export default function RegionFilter({ region, setRegion }: any) {
  return (
    <select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option>Todos</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  );
}
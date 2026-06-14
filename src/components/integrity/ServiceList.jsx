export default function ServiceList({ items }) {
  return (
    <ul className="integrity-service-list">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">›</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export const GamesList = ({ items }: any) => (
  <div>
    {items.map((item: any) => (
      <div key={item.id}>
        {item.name} - {item.price}
      </div>
    ))}
  </div>
);

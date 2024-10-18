export const Text = ({ title, name }: { title: string; name: string }) => {
  return (
    <h2 className="text-2xl font-semibold ">
      {title}
      <span className=" font-normal"> {name}</span>
    </h2>
  );
};

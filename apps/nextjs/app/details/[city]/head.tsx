export default function Head({ params }: any) {
  const title = `Weather in ${params.city}`;
  return (
    <>
      <title>{title}</title>
    </>
  );
}

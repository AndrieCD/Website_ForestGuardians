import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data } = await supabase.from("wildlife_entries").select("*");

  return (
    <div>
      <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg">
        ABOUT
      </div>
      {data?.map((animal) => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
          <p>{animal.description}</p>
        </div>
      ))}
    </div>
  );
}
